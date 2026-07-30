export function getContactChannels(data) {
  return [
    {
      label: 'Gọi điện',
      value: data.hotline,
      href: `tel:${data.hotline.replace(/\s/g, '')}`,
      color: '#16a34a',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.9 21.1 2.9 13.1 2.9 3.2 2.9 2.6 3.4 2.1 4 2.1h3.5c.6 0 1.1.5 1.1 1.1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1L6.6 10.8z" /></svg>
      ),
    },
    {
      label: 'Nhắn Zalo',
      value: data.hotline,
      href: data.zalo,
      external: true,
      color: '#0068ff',
      icon: (
        <span className="flex h-5 w-5 items-center justify-center text-[7px] font-black uppercase leading-none tracking-tighter">Zalo</span>
      ),
    },
    {
      label: 'Messenger',
      value: data.brand,
      href: data.messenger,
      external: true,
      color: '#0084ff',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.2 2 11.5c0 2.9 1.4 5.5 3.6 7.3V22l3.3-1.8c.9.3 1.9.4 3.1.4 5.5 0 10-4.2 10-9.5S17.5 2 12 2zm1 12.7l-2.6-2.7-5 2.7 5.5-5.8 2.6 2.7 5-2.7-5.5 5.8z" /></svg>
      ),
    },
  ]
}
