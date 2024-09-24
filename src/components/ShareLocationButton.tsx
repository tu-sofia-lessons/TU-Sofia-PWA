import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren & { googleMapsLink: string; _class: string };

export function ShareLocationButton({ googleMapsLink, _class }: Props) {
  async function shareLocation() {
    try {
      if (navigator.share) {
        await navigator.share({
          url: googleMapsLink
        });
        console.log('Link shared successfully!');
      } else {
        // Share API not supported
        window.open(googleMapsLink, '_blank');
      }
    } catch (err) {
      console.error('Error sharing the link:', err);
    }
  }
  return (
    <button onClick={shareLocation}>
      <svg
        className={_class}
        xmlns="http://www.w3.org/2000/svg"
        width="1rem"
        height="1rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 4v4C6.425 9.028 3.98 14.788 3 20c-.037.206 5.384-5.962 10-6v4l8-7z"
        />
      </svg>
    </button>
  );
}
