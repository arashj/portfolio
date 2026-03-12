"use client";

import { useMemo, useState } from "react";
import type { Profile } from "@/content/types";

type Status = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactPanel({
  profile,
  text
}: {
  profile: Profile;
  text: {
    formTitle: string;
    fullName: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    sentTitle: string;
    sentBody: string;
    sendAnother: string;
    linkedin: string;
    notConfigured: string;
    error: string;
  };
}) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    // Honeypot field: if a bot fills it, we treat as spam.
    botcheck: ""
  });

  const [status, setStatus] = useState<Status>("idle");

  const canSubmit = useMemo(() => {
    return (
      status !== "sending" &&
      form.fullname.trim().length > 1 &&
      form.email.trim().length > 3 &&
      form.subject.trim().length > 2 &&
      form.message.trim().length > 5
    );
  }, [form, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!accessKey) {
      setStatus("error");
      return;
    }

    // If honeypot is filled, silently succeed to avoid giving signal to bots.
    if (form.botcheck.trim().length > 0) {
      setStatus("success");
      return;
    }

    setStatus("sending");

    try {
      const body = new FormData();
      body.append("access_key", accessKey);
      body.append("from_name", "Portfolio");
      body.append("name", form.fullname);
      body.append("email", form.email);
      body.append("subject", `[Portfolio] ${form.subject}`);
      body.append("message", form.message);
      body.append("botcheck", form.botcheck);

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body
      });

      const json = (await res.json()) as { success?: boolean };

      if (json.success) {
        setStatus("success");
        setForm({ fullname: "", email: "", subject: "", message: "", botcheck: "" });
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-form">
      <h3 className="h3 form-title">{text.formTitle}</h3>

      {status === "success" ? (
        <div className="content-card" style={{ padding: 26, textAlign: "center" }}>
          <h4 className="h3" style={{ marginBottom: 8 }}>
            {text.sentTitle}
          </h4>
          <p style={{ color: "var(--light-gray-70)", lineHeight: 1.6 }}>{text.sentBody}</p>
          <div style={{ marginTop: 16, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="form-btn" type="button" onClick={() => setStatus("idle")}>
              <span>{text.sendAnother}</span>
            </button>
            <a className="form-btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <span>{text.linkedin}</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="form" data-form>
          {/* Honeypot: keep it visually hidden */}
          <input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            value={form.botcheck}
            onChange={(e) => setForm((v) => ({ ...v, botcheck: e.target.value }))}
            style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}
            aria-hidden="true"
          />

          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder={text.fullName}
              required
              value={form.fullname}
              onChange={(e) => setForm((v) => ({ ...v, fullname: e.target.value }))}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder={text.email}
              required
              value={form.email}
              onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
            />
          </div>

          <input
            type="text"
            name="subject"
            className="form-input"
            placeholder={text.subject}
            required
            value={form.subject}
            onChange={(e) => setForm((v) => ({ ...v, subject: e.target.value }))}
          />

          <textarea
            name="message"
            className="form-input"
            placeholder={text.message}
            required
            value={form.message}
            onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
          />

          <button className="form-btn" type="submit" disabled={!canSubmit} style={{ opacity: status === "sending" ? 0.75 : 1 }}>
            <span>{status === "sending" ? text.sending : text.send}</span>
          </button>

          {!accessKey ? <p style={{ marginTop: 12, color: "var(--light-gray-70)" }}>{text.notConfigured}</p> : null}

          {status === "error" ? <p style={{ marginTop: 12, color: "#ff6b6b" }}>{text.error}</p> : null}
        </form>
      )}
    </section>
  );
}