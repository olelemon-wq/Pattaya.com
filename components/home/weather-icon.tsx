type WeatherIconProps = {
  className?: string;
};

/** Clean partly-cloudy icon — sun + cloud */
export function WeatherPartlyCloudyIcon({ className = "h-20 w-20" }: WeatherIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="36" cy="32" r="18" fill="#FBBF24" />
      <circle cx="36" cy="32" r="14" fill="#FCD34D" />
      <g filter="url(#weather-soft)">
        <path
          d="M28 52c0-8.837 7.163-16 16-16 3.9 0 7.47 1.404 10.24 3.73C57.5 36.9 61.6 35 66 35c11.046 0 20 8.954 20 20s-8.954 20-20 20H44c-11.046 0-20-8.954-20-20z"
          fill="white"
          fillOpacity="0.95"
        />
        <path
          d="M32 54c0-6.627 5.373-12 12-12 2.9 0 5.56 1.04 7.6 2.78C53.2 42.4 56.2 41 59.5 41c8.284 0 15 6.716 15 15s-6.716 15-15 15H44c-8.284 0-15-6.716-15-15z"
          fill="#F8FAFC"
        />
      </g>
      <defs>
        <filter
          id="weather-soft"
          x="20"
          y="30"
          width="72"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.12" />
        </filter>
      </defs>
    </svg>
  );
}
