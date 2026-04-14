"use client";
import { useRef, useState } from "react";

interface Job {
  _id: string;
  title: string;
  location?: string;
  employmentType?: string;
}

interface Props {
  job: Job;
  onClose: () => void;
  onSuccess: () => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  resume: File | null;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  resume?: string;
}

const APPLY_URL =
  "https://wolvio-careers-page-backend-f459ff65fd55.herokuapp.com/api/candidates/applyforjob";

export function JobApplyModal({ job, onClose, onSuccess }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
      e.phone = "Phone must be exactly 10 digits.";
    }
    if (!form.resume) {
      e.resume = "Please upload your resume.";
    }
    return e;
  }

  function handleFile(file: File | null) {
    if (!file) return;
    const allowed = ["application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      setErrors(prev => ({ ...prev, resume: "Only PDF, DOC, and DOCX files are allowed." }));
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, resume: "File size must be less than 2 MB." }));
      return;
    }
    setForm(prev => ({ ...prev, resume: file }));
    setErrors(prev => ({ ...prev, resume: undefined }));
  }

  async function handleSubmit() {
    const errs = validate();
    setErrors(errs);
    setApiError(null);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("jobId", job._id);
      fd.append("name", form.name.trim());
      fd.append("email", form.email.trim());
      fd.append("phone", form.phone.trim());
      if (form.coverLetter.trim()) fd.append("coverLetter", form.coverLetter.trim());
      fd.append("resume", form.resume!);

      const res = await fetch(APPLY_URL, { method: "POST", body: fd });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setApiError(data.message || "Something went wrong. Please try again.");
        return;
      }

      onSuccess();
      onClose();
    } catch {
      setApiError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Close on backdrop click
  function handleBackdrop(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 px-4 py-8 sm:py-12"
      onClick={handleBackdrop}
    >
      <div className="w-full max-w-[520px] rounded-[16px] border border-[#dce6ef] bg-white">

        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-[#dce6ef] px-6 py-5">
          <div>
            <p className="text-[17px] font-semibold leading-snug text-[#173652]">
              Apply for {job.title}
            </p>
            <p className="mt-1 text-[13px] text-[#63798d]">
              Wolvio Technologies
              {job.employmentType ? ` · ${job.employmentType}` : ""}
              {job.location ? ` · ${job.location}` : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#dce6ef] bg-[#f5f8fb] text-[#486173] hover:bg-[#eef3f8]"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-4 px-6 py-5">

          {/* Name + Phone row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Full name" required error={errors.name}>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                className={inputCls(!!errors.name)}
              />
            </Field>
            <Field label="Phone number" required error={errors.phone}>
              <input
                type="tel"
                placeholder="10-digit number"
                value={form.phone}
                maxLength={10}
                onChange={e => setForm(p => ({ ...p, phone: e.target.value.replace(/\D/g, "") }))}
                className={inputCls(!!errors.phone)}
              />
            </Field>
          </div>

          {/* Email */}
          <Field label="Email address" required error={errors.email}>
            <input
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              className={inputCls(!!errors.email)}
            />
          </Field>

          {/* Resume upload */}
          <Field label="Resume" required error={errors.resume}>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={e => handleFile(e.target.files?.[0] ?? null)}
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`cursor-pointer rounded-[10px] border-[1.5px] border-dashed px-4 py-4 text-center transition-colors
                ${form.resume
                  ? "border-[#2f7f88] bg-[#f0faf8]"
                  : errors.resume
                  ? "border-[#e24b4a] bg-[#fef9f9]"
                  : "border-[#c8d8e8] bg-[#fafcfe] hover:border-[#2f7f88] hover:bg-[#f0f8f8]"
                }`}
            >
              <svg className="mx-auto mb-1.5" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="5" y="3" width="14" height="18" rx="2" stroke={form.resume ? "#2f7f88" : "#9ab0c0"} strokeWidth="1.5"/>
                <path d="M15 3v6h6" stroke={form.resume ? "#2f7f88" : "#9ab0c0"} strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 13h8M9 17h5" stroke={form.resume ? "#2f7f88" : "#9ab0c0"} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              {form.resume ? (
                <p className="text-[13px] font-medium text-[#173652]">{form.resume.name}</p>
              ) : (
                <p className="text-[13px] text-[#486173]">Click to upload your resume</p>
              )}
              <p className="mt-1 text-[11px] text-[#9ab0c0]">PDF, DOC, DOCX · max 2 MB</p>
            </div>
          </Field>

          {/* Cover letter */}
          <Field label="Cover letter" hint="optional">
            <textarea
              rows={3}
              placeholder="Tell us why you're a great fit for this role..."
              value={form.coverLetter}
              onChange={e => setForm(p => ({ ...p, coverLetter: e.target.value }))}
              className="w-full resize-y rounded-lg border border-[#c8d8e8] bg-white px-3 py-2.5 text-[14px] text-[#173652] outline-none placeholder:text-[#aab8c2] focus:border-[#2f7f88] focus:ring-2 focus:ring-[#2f7f88]/10"
            />
          </Field>

          {/* API error */}
          {apiError && (
            <div className="rounded-lg border border-[#fca5a5] bg-[#fef2f2] px-4 py-3 text-[13px] text-[#991b1b]">
              {apiError}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2.5 border-t border-[#dce6ef] px-6 py-4">
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="rounded-lg border border-[#dce6ef] bg-white px-5 py-2.5 text-[14px] font-medium text-[#486173] hover:bg-[#f5f8fb] disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 rounded-lg bg-[#0b3a63] px-6 py-2.5 text-[14px] font-medium text-white hover:bg-[#0e4a7a] disabled:opacity-60"
          >
            {isSubmitting && (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <path d="M8 2a6 6 0 016 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
            {isSubmitting ? "Submitting..." : "Submit application"}
          </button>
        </div>

      </div>
    </div>
  );
}

// ---- helpers ----

function inputCls(hasError: boolean) {
  return `w-full rounded-lg border px-3 py-2.5 text-[14px] text-[#173652] outline-none placeholder:text-[#aab8c2] transition-colors
    focus:ring-2 focus:ring-[#2f7f88]/10
    ${hasError
      ? "border-[#e24b4a] bg-[#fef9f9] focus:border-[#e24b4a]"
      : "border-[#c8d8e8] bg-white focus:border-[#2f7f88]"
    }`;
}

function Field({
  label, required, hint, error, children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-medium text-[#486173]">
        {label}
        {required && <span className="ml-0.5 text-[#e24b4a]">*</span>}
        {hint && <span className="ml-1 font-normal text-[#9ab0c0]">({hint})</span>}
      </label>
      {children}
      {error && <p className="text-[12px] text-[#e24b4a]">{error}</p>}
    </div>
  );
}