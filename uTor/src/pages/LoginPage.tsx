import type { FormEvent } from "react"
import "../styles/login.css"

function Arrow() {
  return <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
}

function Brand() {
  return <a className="login-brand" href="#"><span><i /><i /><i /></span>uTor</a>
}

export function LoginPage() {
  const enterDashboard = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.hash = "dashboard"
  }

  return (
    <main className="login-page">
      <section className="login-welcome">
        <Brand />
        <div className="login-welcome__copy"><p>WELCOME TO UTOR</p><h1>Small reading moments. <em>Big confidence.</em></h1><span>Pick up a story, practice a sound, and celebrate every little win.</span></div>
        <div className="login-illustration" aria-hidden="true"><div className="login-illustration__moon" /><div className="login-illustration__hill login-illustration__hill--one" /><div className="login-illustration__hill login-illustration__hill--two" /><div className="login-illustration__book"><i /><i /></div><b>✦</b><b>✦</b><b>✦</b></div>
        <p className="login-welcome__footer">A calm space for young readers and their trusted grown-ups.</p>
      </section>
      <section className="login-form-area">
        <a className="login-back" href="#"><span>←</span> Back to home</a>
        <form className="login-form" onSubmit={enterDashboard}><div className="login-form__heading"><p>WELCOME BACK</p><h2>Let&apos;s keep learning.</h2><span>Sign in to open your reading space.</span></div><label>Email address<input autoComplete="email" name="email" placeholder="you@example.com" type="email" required /></label><label>Password<input autoComplete="current-password" name="password" placeholder="Your password" type="password" required /></label><div className="login-form__options"><label><input type="checkbox" /> Keep me signed in</label><a href="#login">Forgot password?</a></div><button type="submit">Sign in <Arrow /></button><p className="login-form__note">New to uTor? <a href="#login">A grown-up can create an account</a></p></form>
      </section>
    </main>
  )
}

export default LoginPage
