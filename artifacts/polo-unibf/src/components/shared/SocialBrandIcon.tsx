import { FaBlog, FaEnvelope, FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaQuestion, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

const iconByChannel: Record<string, IconType> = {
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  x: FaXTwitter,
  tiktok: FaTiktok,
  linkedin: FaLinkedinIn,
  'google-business': FaGoogle,
  blog: FaBlog,
  newsletter: FaEnvelope,
  'unibf-tv': FaYoutube,
};

type SocialBrandIconProps = {
  channelId: string;
  className?: string;
};

export function SocialBrandIcon({ channelId, className }: SocialBrandIconProps) {
  const Icon = iconByChannel[channelId] ?? FaQuestion;
  return <Icon className={className} aria-hidden="true" focusable="false" />;
}
