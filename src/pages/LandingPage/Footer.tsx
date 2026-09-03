const footerLinkClass =
  'text-center text-[14px] font-semibold leading-[1.3] text-white no-underline hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

const contentLinkClass =
  'font-normal text-inherit underline underline-offset-2 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black';

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

export default function Footer() {
  return (
    <footer role="contentinfo" className="w-full overflow-x-hidden bg-white font-sans text-black">
      <nav aria-label="Footer navigation" className="w-full bg-[#252525] px-3 py-10">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-6 min-[769px]:grid min-[769px]:max-w-[860px] min-[769px]:grid-cols-[repeat(7,max-content)] min-[769px]:justify-center min-[769px]:gap-x-8 min-[769px]:gap-y-0">
          <ul className="m-0 flex w-full list-none items-center justify-between gap-2 p-0 min-[769px]:contents">
            <li>
              <a
                href="https://pronailcomplex.com//help/contact-us.php?hopId=091df0bb-acfd-418e-9580-2ca8552d9249"
                className={footerLinkClass}
                {...externalLinkProps}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://pronailcomplex.com//help/references.php?hopId=091df0bb-acfd-418e-9580-2ca8552d9249"
                className={footerLinkClass}
                {...externalLinkProps}
              >
                References
              </a>
            </li>
            <li>
              <a
                href="https://pronailcomplex.com//help/terms.php?hopId=091df0bb-acfd-418e-9580-2ca8552d9249"
                className={footerLinkClass}
                {...externalLinkProps}
              >
                Terms Of Use
              </a>
            </li>
            <li>
              <a
                href="https://pronailcomplex.com//help/disclaimer.php?hopId=091df0bb-acfd-418e-9580-2ca8552d9249"
                className={footerLinkClass}
                {...externalLinkProps}
              >
                Disclaimer
              </a>
            </li>
          </ul>

          <ul className="m-0 flex w-full list-none items-center justify-between gap-3 p-0 min-[769px]:contents">
            <li>
              <a
                href="https://pronailcomplex.com//help/privacy.php?hopId=091df0bb-acfd-418e-9580-2ca8552d9249"
                className={footerLinkClass}
                {...externalLinkProps}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://pronailcomplex.com//help/shipping.php?hopId=091df0bb-acfd-418e-9580-2ca8552d9249"
                className={footerLinkClass}
                {...externalLinkProps}
              >
                Shipping Policy
              </a>
            </li>
            <li>
              <a
                href="https://pronailcomplex.com//help/refunds.php?hopId=091df0bb-acfd-418e-9580-2ca8552d9249"
                className={footerLinkClass}
                {...externalLinkProps}
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="w-full bg-white px-[14px] pt-[50px] pb-[48px] text-black">
        <div className="mx-auto w-full max-w-[1000px]">
          <div className="text-center text-[15px] font-normal leading-[1.5]">
            <p className="m-0">
              For Product Support, please contact the vendor{' '}
              <a
                href="https://pronailcomplex.com//help/contact-us.php?hopId=091df0bb-acfd-418e-9580-2ca8552d9249"
                className={contentLinkClass}
                {...externalLinkProps}
              >
                here
              </a>
            </p>
            <p className="m-0">
              For Order Support, please contact ClickBank{' '}
              <a href="https://www.clkbank.com/" className={contentLinkClass} {...externalLinkProps}>
                here
              </a>
            </p>
          </div>

          <div className="mt-10 text-left text-[15px] font-normal leading-[1.55] text-[#111111]">
            <p className="mt-0 mb-5">
              Please note that the information we provide is not intended to replace consultation with a qualified
              medical professional. We encourage you to inform your physician of changes you make to your lifestyle
              and discuss these with him or her. For questions or concerns about any medical conditions you may have,
              please contact your doctor.
            </p>

            <p className="mt-0 mb-5">
              Statements on this website have not been evaluated by the Food and Drug Administration. Products are
              not intended to diagnose, treat, cure or prevent any disease. If you are pregnant, nursing, taking
              medication, or have a medical condition, consult your physician before using our products.
            </p>

            <p className="mt-0 mb-5">
              The website&apos;s content and the product for sale is based upon the author&apos;s opinion and is provided
              solely on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. You should do your own research and
              confirm the information with other sources when searching for information regarding health issues and
              always review the information carefully with your professional health care provider before using any of
              the protocols presented on this website and/or the product sold here.
            </p>

            <p className="mt-0 mb-5">
              ClickBank is the retailer of products on this site. CLICKBANK is a registered trademark of Click Sales,
              Inc., a Delaware corporation located at 1444 South Entertainment Ave, Suite 410, Boise, Idaho, 83709,
              USA and used by permission. ClickBanks role as retailer does not constitute an endorsement, approval or
              review of these products or any claim, statement or opinion used in promotion of these products.
            </p>

            <p className="m-0 pt-2">
              *For international shipping (outside of the United States), shipping fees will apply.{' '}
              <a
                href="https://pronailcomplex.com/help/shipping.php?hopId=091df0bb-acfd-418e-9580-2ca8552d9249"
                className={contentLinkClass}
                {...externalLinkProps}
              >
                Read more here
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#d5d5d5] px-[14px] py-6 text-center text-[16px] font-normal leading-[1.4] text-black">
        Copyright © 2026 <strong className="font-semibold">ProNail Complex</strong> | All Rights Reserved
      </div>
    </footer>
  );
}
