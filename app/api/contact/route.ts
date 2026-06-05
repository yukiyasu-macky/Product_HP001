export const dynamic = 'force-dynamic'

import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { company, name, email, industry, industryOther, employeeSize, message } = await req.json()

  await resend.emails.send({
    from: 'noreply@arcrise.ai',
    to: process.env.CONTACT_EMAIL!,
    subject: `【お問い合わせ】${company} / ${name}`,
    html: `
      <p><strong>会社名：</strong>${company}</p>
      <p><strong>担当者名：</strong>${name}</p>
      <p><strong>メール：</strong>${email}</p>
      <p><strong>業界：</strong>${industry === 'other' ? industryOther : industry}</p>
      <p><strong>従業員規模：</strong>${employeeSize}</p>
      <p><strong>お問い合わせ内容：</strong><br/>${message}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
