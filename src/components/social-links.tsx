import { motion } from 'motion/react';
import { Github, Linkedin, MapPin , Send  } from 'lucide-react';  
import React from 'react';

const SOCIAL_LINKS = [
  {
    icon: <Github className="w-6 h-6" />,
    label: 'GitHub',
    link: 'https://github.com/tarektech',
    username: '@tarektech',
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tarektech/',
    username: '/in/tarekzein',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label:'Location',
    username:'Istanbul, Turkey',
  },
  {
    icon: <Send className="w-6 h-6" />,
    label: 'Telegram',
    link: 'https://t.me/tarek_alzein',
    username: '@tarek_alzein',
  },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="flex items-center gap-6"
    >
      <div className="flex flex-wrap  gap-4 ">
        {SOCIAL_LINKS.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            viewport={{ once: true }}
            className="group flex items-center gap-3 p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
          >
            <div className="text-orange-400 group-hover:scale-110 transition-transform duration-300">
              {social.icon}
            </div>
            <div>
              <div className="text-white font-medium text-sm">
                {social.label}
              </div>
              <div className="text-gray-400 text-xs">{social.username}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
