import type { ReactNode } from "react"
import "../styles/secondary.css"

export type PageName = "learn" | "stories" | "week" | "progress" | "help" | "settings"

type IconName = "home" | "book" | "story" | "calendar" | "chart" | "help" | "settings" | "arrow" | "play" | "check" | "star" | "clock" | "sound"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const p = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.8 }
  const svg: Record<IconName, ReactNode> = {
    home: <path {...p} d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" />,
    book: <><path {...p} d="M4 5.3A2.3 2.3 0 0 1 6.3 3H20v16H6.3A2.3 2.3 0 0 0 4 21.3V5.3ZM4 5v16" /><path {...p} d="M8 7h8M8 11h7" /></>,
    story: <><path {...p} d="M5 4h11a3 3 0 0 1 3 3v12H8a3 3 0 0 0-3 3V4Z" /><path {...p} d="M8 8h7M8 12h6" /></>,
    calendar: <><rect {...p} height="16" rx="2" width="17" x="3.5" y="5" /><path {...p} d="M7.5 3v4M16.5 3v4M3.5 10h17" /></>,
    chart: <><path {...p} d="M4 20V4M4 20h17" /><rect {...p} height="6" rx="1" width="3" x="7" y="11" /><rect {...p} height="10" rx="1" width="3" x="13" y="7" /><rect {...p} height="4" rx="1" width="3" x="19" y="13" /></>,
    help: <><circle {...p} cx="12" cy="12" r="9" /><path {...p} d="M9.6 9a2.5 2.5 0 1 1 4.4 1.6c-.85.82-1.8 1.25-1.8 2.65M12 16.9h.01" /></>,
    settings: <><circle {...p} cx="12" cy="12" r="3.4" /><path {...p} d="M19 13.6v-3.2l-2-.6a7.5 7.5 0 0 0-.8-1.8l1-1.85-2.3-2.3-1.85 1a7.5 7.5 0 0 0-1.8-.8L10.65 2h-3.3l-.55 2.05a7.5 7.5 0 0 0-1.8.8l-1.85-1-2.3 2.3 1 1.85a7.5 7.5 0 0 0-.8 1.8l-2 .6v3.2l2 .6a7.5 7.5 0 0 0 .8 1.8l-1 1.85 2.3 2.3 1.85-1a7.5 7.5 0 0 0 1.8.8l.55 2.05h3.3l.55-2.05a7.5 7.5 0 0 0 1.8-.8l1.85 1 2.3-2.3-1-1.85a7.5 7.5 0 0 0 .8-1.8l2-.6Z" /></>,
    arrow: <path {...p} d="M5 12h14M13 6l6 6-6 6" />,
    play: <path d="m9 6 9 6-9 6V6Z" fill="currentColor" />,
    check: <path {...p} d="m5 12.5 4.2 4L19 7.2" />,
    star: <path d="m12 3 2.35 5.1L20 8.85l-4.2 3.95 1.1 5.6L12 15.7 7.1 18.4l1.1-5.6L4 8.85l5.65-.75L12 3Z" fill="currentColor" />,
    clock: <><circle {...p} cx="12" cy="12" r="8.5" /><path {...p} d="M12 7v5l3.2 2" /></>,
    sound: <><path {...p} d="M4 10v4h3l4 3V7l-4 3H4Z" /><path {...p} d="M15 9.2a4.2 4.2 0 0 1 0 5.6M17.6 6.8a7.6 7.6 0 0 1 0 10.4" /></>,
  }
  return <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}>{svg[name]}</svg>
}

const pageInfo: Record<PageName, { title: string; sub: string; icon: IconName }> = {
  learn: { title: "Learn", sub: "Choose one thing.", icon: "book" },
  stories: { title: "Stories", sub: "Find a story you like.", icon: "story" },
  week: { title: "My week", sub: "A small plan for you.", icon: "calendar" },
  progress: { title: "My progress", sub: "See your little wins.", icon: "chart" },
  help: { title: "Help", sub: "We can help.", icon: "help" },
  settings: { title: "Settings", sub: "For a grown-up.", icon: "settings" },
}

function Brand() { return <a className="sub-brand" href="#"><span><i /><i /><i /></span>uTor</a> }

function Sidebar({ active }: { active: PageName }) {
  const items: Array<{ label: string; href: string; icon: IconName; page?: PageName }> = [{ label: "Home", href: "#dashboard", icon: "home" }, { label: "Learn", href: "#learn", icon: "book", page: "learn" }, { label: "Stories", href: "#stories", icon: "story", page: "stories" }, { label: "My week", href: "#week", icon: "calendar", page: "week" }, { label: "My progress", href: "#progress", icon: "chart", page: "progress" }]
  return <aside className="sub-sidebar"><Brand /><p>MY SPACE</p><nav>{items.map((item) => <a className={item.page === active ? "is-active" : ""} href={item.href} key={item.label}><Icon name={item.icon} size={20} /><span>{item.label}</span></a>)}</nav><nav className="sub-sidebar__bottom"><a className={active === "help" ? "is-active" : ""} href="#help"><Icon name="help" size={20} /><span>Help</span></a><a className={active === "settings" ? "is-active" : ""} href="#settings"><Icon name="settings" size={20} /><span>Settings</span></a></nav><a className="sub-user" href="#settings"><b>AR</b><span><small>MY ACCOUNT</small>Ari Reader</span></a></aside>
}

function Topbar() { return <header className="sub-topbar"><button aria-label="Search"><Icon name="book" size={20} /></button><a href="#help"><span><Icon name="star" size={16} /></span> Ask Poppy</a></header> }

function LearnPage() { const cards = [{ title: "Letter garden", text: "Match letters and sounds.", icon: "book" as IconName, color: "green", state: "Keep going" }, { title: "Sound safari", text: "Hear words that rhyme.", icon: "sound" as IconName, color: "yellow", state: "Start" }, { title: "Cozy tales", text: "Listen to a short story.", icon: "story" as IconName, color: "purple", state: "Listen" }]; return <><section className="sub-feature"><div><p>READ NOW</p><h2>Letter garden</h2><span>Find the letter that makes the <b>m</b> sound.</span><a href="#learn"><Icon name="play" size={15} /> Play now</a></div><div className="letter-garden" aria-hidden="true"><i>M</i><i>A</i><i>T</i><b>m</b></div></section><section className="sub-section"><header><div><h2>Try next</h2><p>Short and fun.</p></div></header><div className="activity-grid">{cards.map((card) => <article className="activity-card" key={card.title}><span className={`activity-card__icon activity-card__icon--${card.color}`}><Icon name={card.icon} size={24} /></span><h3>{card.title}</h3><p>{card.text}</p><a href="#learn">{card.state} <Icon name="arrow" size={15} /></a></article>)}</div></section></> }

function StoriesPage() { const stories = ["The Moonlight Library", "The Lost Blue Kite", "A Tiny Seed", "Nora and the Cloud"]; return <><section className="story-hero"><div><p>STORY TIME</p><h2>The Moonlight Library</h2><span>Part 3 is ready for you.</span><a href="#stories"><Icon name="play" size={15} /> Keep reading</a></div><div className="story-hero__scene" aria-hidden="true"><i /><i /><b>✦</b></div></section><section className="sub-section"><header><div><h2>Pick a story</h2><p>Read, listen, or both.</p></div></header><div className="story-grid">{stories.map((story, index) => <article className={`story-card story-card--${index + 1}`} key={story}><span>STORY</span><h3>{story}</h3><p>{index === 0 ? "8 min left" : "New story"}</p><a href="#stories">Open <Icon name="arrow" size={15} /></a></article>)}</div></section></> }

function WeekPage() { return <><section className="week-banner"><div><p>THIS WEEK</p><h2>Two small things a day.</h2><span>That is enough.</span></div><span className="week-banner__star"><Icon name="star" size={32} /></span></section><section className="sub-section week-list"><header><div><h2>My plan</h2><p>Move at your own pace.</p></div></header>{[{ day: "Today", task: "Read together", time: "10 min", icon: "book" as IconName, done: true }, { day: "Tomorrow", task: "Sound safari", time: "5 min", icon: "sound" as IconName }, { day: "Friday", task: "Pick a story", time: "10 min", icon: "story" as IconName }].map((item) => <article key={item.day}><span className="week-list__icon"><Icon name={item.icon} size={21} /></span><div><small>{item.day}</small><h3>{item.task}</h3></div><span className="week-list__time"><Icon name="clock" size={15} /> {item.time}</span>{item.done ? <span className="week-list__done"><Icon name="check" size={18} /></span> : <a href="#week">Start <Icon name="arrow" size={15} /></a>}</article>)}</section></> }

function ProgressPage() { return <><div className="progress-page-top"><article><span>READING DAYS</span><strong>4<small>/5</small></strong><Icon name="calendar" size={32} /></article><article><span>STARS</span><strong>18</strong><Icon name="star" size={29} /></article><article><span>TIME</span><strong>1h 28m</strong><Icon name="clock" size={30} /></article></div><section className="sub-section progress-page-card"><header><div><h2>My reading</h2><p>You are doing well.</p></div><strong>68% done</strong></header><div className="simple-bars" aria-label="Reading time by day"><i /><i /><i /><i /><i /><i /><i /></div><div className="simple-bars__labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></section><section className="sub-section win-row"><article><span><Icon name="check" size={18} /></span><div><h3>Four reading days</h3><p>Nice job coming back.</p></div></article><article><span><Icon name="star" size={18} /></span><div><h3>18 stars</h3><p>You earned them by trying.</p></div></article></section></> }

function HelpPage() { const items = [["Listen to words", "Tap the sound button to hear a word again.", "sound" as IconName], ["Start a story", "Pick any story and press play.", "story" as IconName], ["Ask Poppy", "Poppy gives small hints, not answers.", "star" as IconName]]; return <><section className="help-hero"><span><Icon name="help" size={31} /></span><div><p>WE ARE HERE</p><h2>What do you need?</h2><small>Choose one small thing.</small></div></section><section className="help-list">{items.map(([title, text, icon]) => <a href="#help" key={title as string}><span><Icon name={icon as IconName} size={22} /></span><div><h3>{title as string}</h3><p>{text as string}</p></div><Icon name="arrow" size={18} /></a>)}</section><section className="help-grownup"><p>FOR GROWN-UPS</p><h3>Need more help?</h3><span>Use Settings to check sound, reminders, and privacy.</span><a href="#settings">Open Settings <Icon name="arrow" size={15} /></a></section></> }

function SettingsPage() { const items = [["Sound", "Read words out loud", "sound" as IconName], ["Reminders", "Choose a good reading time", "clock" as IconName], ["Privacy", "Keep learning private", "settings" as IconName]]; return <><section className="settings-user"><span>AR</span><div><p>MY ACCOUNT</p><h2>Ari Reader</h2><small>Grade 2 · Reading space</small></div></section><section className="settings-list">{items.map(([title, text, icon]) => <a href="#settings" key={title as string}><span><Icon name={icon as IconName} size={21} /></span><div><h3>{title as string}</h3><p>{text as string}</p></div><Icon name="arrow" size={18} /></a>)}</section><p className="settings-note">These options are for a trusted grown-up.</p></> }

function PageBody({ page }: { page: PageName }) { if (page === "learn") return <LearnPage />; if (page === "stories") return <StoriesPage />; if (page === "week") return <WeekPage />; if (page === "progress") return <ProgressPage />; if (page === "help") return <HelpPage />; return <SettingsPage /> }

export function OtherPages({ page }: { page: PageName }) { const info = pageInfo[page]; return <main className="sub-shell"><Sidebar active={page} /><section className="sub-main"><Topbar /><div className="sub-content"><header className="sub-heading"><span><Icon name={info.icon} size={24} /></span><div><h1>{info.title}</h1><p>{info.sub}</p></div></header><PageBody page={page} /></div></section></main> }
