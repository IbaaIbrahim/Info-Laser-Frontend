import Link from "next/link";

export const ContactsHeader = () => {
  return (
    <dl className="leading-4">
      <div>
        <dt className="hidden">Phone</dt>
        <dd>
          <Link
            href="tel:88002222741"
            className="block text-xl hover:text-[#b82c2c] transition-colors"
          >
            8 (800) 222-27-41
          </Link>
        </dd>
      </div>

      <div>
        <dt className="hidden">Mail</dt>
        <dd>
          <Link
            href="mailto:info@lasercut.ru"
            className="block text-right hover:text-[#b82c2c] transition-colors"
          >
            info@infolaser.ru
          </Link>
        </dd>
      </div>
    </dl>
  );
};
