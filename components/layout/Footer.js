import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-100 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.address}</p>
        </div>
      </div>
    </footer>
  );
}
