import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-[#659287]">
              NoorPath
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Connecting talent with opportunities and helping
              people discover meaningful career paths.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-[#659287]">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/">Dashboard</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/opportunities">Opportunities</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-[#659287]">
              Resources
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>

              <li>
                <Link href="#">Terms of Service</Link>
              </li>

              <li>
                <Link href="#">Help Center</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          © 2026 NoorPath. All rights reserved.
        </div>
      </div>
    </footer>
  );
}