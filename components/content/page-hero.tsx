interface PageHeroProps {
  title: string;
  titleTh?: string;
  description: string;
  badge?: string;
}

export function PageHero({ title, titleTh, description, badge }: PageHeroProps) {
  return (
    <div className="mb-10 border-b border-zinc-200 pb-8">
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-teal-800">
          {badge}
        </span>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h1>
      {titleTh && (
        <p className="mt-1 text-lg text-teal-700">{titleTh}</p>
      )}
      <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
        {description}
      </p>
    </div>
  );
}
