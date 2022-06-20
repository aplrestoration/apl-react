import React from "react";
import bg from "../assets/bg/page-hero/restoration-header-water-flood.jpg";
import GalleryNav from "../components/GalleryNav";
import Layout from "../components/Layout";

const WaterFlood = () => {
  return (
    <Layout>
    <div className="page-container">
      <div
        className="container-fluid d-flex flex-column justify-content-end page-hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="page-text-container">
          <h1 className="page-title" style={{ color: "white" }}>
            WATER & FLOOD  RESTORATION VANCOUVER
          </h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          Water is one of the most common and also the most destructive elements
          that can cause a wide variety of problems for any home owner. As soon
          as you experience water damage in your home or business, <a href="tel:833-746-8356" style={{textDecoration:"none"}}>call APL
          Restoration</a>. Quick action is necessary for complete water damage
          cleanup and restoration.
        </p>
        <h2 className="fw-bold">What are the causes of water damage?</h2>
        <ul className="page-li">
          <li>Plumbing leaks</li>
          <li>Burst or broken pipes and hoses</li>
          <li>Structure failure</li>
          <li>Severe Weather(storms, floods)</li>
          <li>Foundation cracks</li>
          <li>A clogged toilet</li>
          <li>A leaking roof</li>
          <li>Moisture behind walls</li>
          <li>Extinguishing fires</li>
        </ul>
        <p>
          The causes for water damage can be one or more of the above mentioned
          disasters. But the consequences will be same if action is not taken
          immediately. If you do not take action immediately, the entire house
          can be at risk within minutes from the attack.
        </p>
        <h2 className="fw-bold">
          APL Restoration professional damage restoration services are available
          365 days a year, 24 hours a day to respond to an emergency.
        </h2>
        <p>
          Within just a few hours, the pressed walls may show swelling and
          disintegration, along with bacterial odor, spread throughout your
          home. If you still ignore water damage for a span of a few days, the
          water will cause severe complications to the building and you might
          even experience secondary damages, which will further result in
          excessive costly and disruptive repairs.
        </p>
        <hr className="solid-divider-black" />
        <h2 className="fw-bold">1. Initial assessment of the problem</h2>
        <p>
          After you contact us, we’ll connect with you to gather all information
          about the incident over the phone and to make arrangement to get to
          your site at the earliest.
        </p>
        <h2 className="fw-bold">
          2. Removal of wet or damaged belongings, including furniture
        </h2>
        <p>
          During the preparation process we’ll help to remove valuables and
          furniture from your home. We can assistwith pack-out, moving, and
          storage. We also will secure electrical equipment, systems, and HVAC
          to ensure your home is safe. If the HVAC system is damaged, we will
          remove this as well.
        </p>
        <h2 className="fw-bold">3. Water extraction and dehumidification</h2>
        <p>
          Most properties can be dried in 2-4 days using our Quick Dry System.
          You get our Quick Dry System, which is the most advanced equipment
          available – to dry any areas completely so that the threat of mould
          growth and pathogen spread is minimized or eliminated. APL can reduce
          the time it takes to dry most buildings to two to four days inorder to
          minimize your inconvenience.
        </p>
        <h2 className="fw-bold">4. Reconstruction of the property</h2>
        <p>
          Once it has been confirmed that there is no longer any water hiding
          within cracks, crevices, or floorboards, <a href="https://www.aplrestoration.ca/"><strong>APL Restoration</strong></a> will be able
          to move onto the next part: assessing the damage done and begin
          repairs. Fixing water damage may include removal of drywall and
          flooring, carpets being cleaned, wood floors being repaired or
          replaced, odor control management, the cleaning of air ducts, and the
          removal of any moulds that may have formed.
        </p>
        <hr className="solid-divider-black" />
        <span className="big-title-2">WHY CHOOSE US?</span> <br /><br />
        <ul className="page-li">
          <li>Available 24/7</li>
          <li>We help you claim your insurance</li>
          <li>Fully licensed and insured</li>
          <li>Quick Respond</li>
        </ul>
      </div>
      <GalleryNav />
    </div>
    </Layout>
  );
};

export default WaterFlood;
