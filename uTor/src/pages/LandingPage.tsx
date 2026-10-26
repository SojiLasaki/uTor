import "../styles/landing.css"

type IconName = "home" | "book" | "calendar" | "sparkle" | "bell" | "arrow" | "play"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.8 }

  if (name === "home") return <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}><path {...common} d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" /></svg>
  if (name === "book") return <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}><path {...common} d="M4 5.2A2.2 2.2 0 0 1 6.2 3H20v16H6.2A2.2 2.2 0 0 0 4 21.2V5.2ZM4 5v16" /><path {...common} d="M8 7h8M8 11h7" /></svg>
  if (name === "calendar") return <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}><rect {...common} height="16" rx="2" width="17" x="3.5" y="5" /><path {...common} d="M7.5 3v4M16.5 3v4M3.5 10h17M8 14h.01M12 14h.01M16 14h.01" /></svg>
  if (name === "sparkle") return <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}><path d="M12 2.8c.65 4.45 3.1 6.88 7.35 7.33-4.25.45-6.7 2.9-7.35 7.35-.65-4.45-3.1-6.9-7.35-7.35C8.9 9.68 11.35 7.25 12 2.8Z" fill="currentColor" /><circle cx="18.5" cy="18" fill="currentColor" r="1.4" /></svg>
  if (name === "bell") return <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}><path {...common} d="M18 10.2c0-3.55-2.1-6.2-5.1-6.2s-5.1 2.65-5.1 6.2c0 3.95-1.8 5.38-1.8 6.28h13.8c0-.9-1.8-2.33-1.8-6.28Z" /><path {...common} d="M10.5 20a2.7 2.7 0 0 0 4.8 0" /></svg>
  if (name === "play") return <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}><path d="m9 6 9 6-9 6V6Z" fill="currentColor" /></svg>
  return <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}><path {...common} d="M5 12h14M13 6l6 6-6 6" /></svg>
}

const MiniLogo = () => (
  <span className="landing-logo" aria-label="uTor">
    <span className="landing-logo__mark" aria-hidden="true"><i /><i /><i /></span>
    <span>uTor</span>
  </span>
)

function MockupSidebar() {
  const items: Array<{ icon: IconName; text: string; active?: boolean }> = [
    { icon: "home", text: "Home", active: true },
    { icon: "book", text: "Learn" },
    { icon: "calendar", text: "My week" },
    { icon: "sparkle", text: "Rewards" },
  ]

  return (
    <aside className="preview-sidebar">
      <MiniLogo />
      <div className="preview-profile">
        <span className="preview-profile__avatar">AR</span>
        <div><small>READING TODAY</small><strong>Little learners</strong></div>
      </div>
      <nav>
        {items.map((item) => <a className={item.active ? "is-active" : ""} href="#preview" key={item.text}><Icon name={item.icon} size={16} />{item.text}</a>)}
      </nav>
      <div className="preview-sidebar__footer"><span className="preview-people"><i /> <i /> <i /></span><small>Learning together</small></div>
    </aside>
  )
}

function ReadingProgressCard() {
  return (
    <article className="preview-card preview-card--progress">
      <small>KEEP GOING</small><h3>Reading<br />progress</h3><strong>+20<span>%</span></strong>
      <div className="progress-chart" aria-hidden="true"><i /><i /><i className="progress-chart__selected" /><i /><i /></div>
      <div className="progress-months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span></div>
      <button aria-label="See reading progress"><Icon name="arrow" size={17} /></button>
    </article>
  )
}

function RewardsCard() {
  return (
    <article className="preview-card preview-card--rewards">
      <small>YOUR LITTLE WINS</small><h3>Reading<br />rewards</h3>
      <div className="trophy" aria-hidden="true"><span className="trophy__star trophy__star--one">★</span><span className="trophy__star trophy__star--two">★</span><div className="trophy__cup">★</div><i /></div>
    </article>
  )
}

function AdventureCard() {
  return (
    <article className="preview-card preview-card--adventure">
      <small>ONE SMALL STEP</small><h3>Start a<br />story</h3>
      <div className="rocket" aria-hidden="true"><i className="rocket__flame" /><i className="rocket__body" /><i className="rocket__window" /><i className="rocket__fin rocket__fin--left" /><i className="rocket__fin rocket__fin--right" /></div>
    </article>
  )
}

function Schedule() {
  return (
    <aside className="preview-schedule">
      <div className="preview-schedule__top"><div><small>TODAY'S PLAN</small><strong>Tuesday, 13 May</strong></div><button aria-label="Notifications"><Icon name="bell" size={17} /></button></div>
      <div className="schedule-grid" aria-label="Sample reading schedule">
        <span>10 AM</span><div /><span>11 AM</span><div className="schedule-event schedule-event--soft"><b>10:45</b><strong>Word play</strong></div><span>12 PM</span><div /><span>1 PM</span><div className="schedule-event schedule-event--green"><b>1:30</b><strong>Read together</strong></div><span>2 PM</span><div /><span>3 PM</span><div className="schedule-event schedule-event--pink"><b>3:15</b><strong>Story time</strong></div><span>4 PM</span><div /></div>
    </aside>
  )
}

function DashboardPreview() {
  return (
    <div className="dashboard-preview" id="preview" aria-label="Preview of the uTor learning dashboard">
      <MockupSidebar />
      <section className="preview-main"><p className="preview-greeting">GOOD MORNING, ARIANA</p><h2>Start <strong>learning</strong></h2><div className="preview-card-grid"><ReadingProgressCard /><div className="preview-card-stack"><RewardsCard /><AdventureCard /></div></div></section>
      <Schedule />
    </div>
  )
}

export function LandingPage() {
  return (
    <main className="landing-page">
      <nav className="landing-nav" aria-label="Main navigation"><MiniLogo /><div className="landing-nav__links"><a href="#how-it-works">How it works</a><a href="#for-grown-ups">For grown-ups</a><a href="#login">Sign in</a><a className="landing-nav__button" href="#login">Get started <Icon name="arrow" size={17} /></a></div></nav>
      <section className="landing-hero" id="get-started"><div className="landing-hero__copy"><p className="landing-eyebrow"><i /> A KINDER WAY TO LEARN</p><h1>Every little reader has a big story waiting.</h1><p className="landing-hero__description">uTor turns small, joyful reading moments into steady confidence—at home, at school, and anywhere a child feels curious.</p><div className="landing-hero__actions"><a className="landing-button landing-button--primary" href="#dashboard">Explore uTor <Icon name="arrow" size={18} /></a><a className="landing-button landing-button--quiet" href="#how-it-works"><span><Icon name="play" size={15} /></span> See how it works</a></div><p className="landing-trust"><span>✦</span> Built for young learners and their trusted grown-ups.</p></div><div className="landing-hero__preview"><DashboardPreview /></div></section>
      <section className="landing-strip" id="how-it-works"><p>One calm place for <strong>reading, practice, encouragement,</strong> and tiny celebrations.</p><div><span>Listen</span><span>Practice</span><span>Discover</span><span>Grow</span></div></section>
    </main>
  )
}

export default LandingPage
