interface ExperienceEntryProps {
  role: string;
  date: string;
}

export function ExperienceEntry({ role, date }: ExperienceEntryProps) {
  return (
    <div className="section-exp__block">
      <div className="section-exp__entry">
        <span className="section-exp__entry-role">{role}</span>
        <span className="section-exp__entry-date">{date}</span>
      </div>
      <div className="section-exp__divider" role="separator" aria-hidden />
    </div>
  );
}
