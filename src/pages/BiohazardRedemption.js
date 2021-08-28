import React from "react";
import { Accordion } from "react-bootstrap";

const BiohazardRedemption = () => {
  return (
    <div className="page-container">
      <div className="container-fluid page-hero">
        <div className="container">
          <h1 className="page-title">MOULD DAMAGE</h1>
        </div>
      </div>

      <div className="container page-text-container">
        <p>
          Any building that has suffered from water damage or problems with
          excess moisture is at risk of mould growth. There are thousands of
          different types of mould found outdoors and indoors. All present
          potential risks and become problematic when they start actively
          growing. If you find that your home or business has begun to show
          signs of mould damage, it’s important to act as quickly as possible to
          have it treated and remediated to reduce long-term risks to your
          property and improve air quality.
        </p>
        <h1>Get the True Facts</h1>
        <p>
          Without the correct assessment and remediation, mould can become
          dangerous and affect the structural integrity and air quality of your
          property. As mould specialists, we’ve put together some useful guides
          on mould damage to help you understand and identify the risks before
          acting to remove mould.
        </p>
        <p>
          Mould is a non-scientific term for many types of fungi -unwanted,
          unappealing patches of black, brown, yellow, pink, green, smelly,
          fuzzy growths. Countless species of mould are found both indoors and
          outdoors.
        </p>
        <p>
          "Mould" and "fungus" have many connotations, most of them unpleasant:
          musty odors, damp basements, moldy carpets, water leaks, soggy
          drywall, athlete's foot, and poisonous mushrooms, among others.
        </p>
        <p>
          Although mould and its spores are literally everywhere, active mould
          growth requires moisture. Whether on visible surfaces or hiding behind
          drywall, in attics, or under carpets, indoor mould grows in the
          presence of excessive dampness or water.
        </p>
        <p>Also found in damp indoor environments are:</p>
        <ul>
          <li>bacteria;</li>
          <li>dust mites;</li>
          <li>
            break-down products of bacteria and moulds, such as proteins,
            cell-wall particles (glucans) and volatile organic compounds (the
            actual cause of the musty odor associated with mould);
          </li>
          <li>
            airborne chemicals, gasses, and particulate matter caused by
            destruction of materials by growing moulds.
          </li>
        </ul>
        <p>
          Indoor mould may be unsightly and smelly, but the potential problems
          are more serious than that. By definition, actively-growing mould
          damages the material it lives on, thereby impairing structural
          integrity. In addition, mould is associated with some untoward health
          effects in humans, including allergies and infections. (Some health
          effects attributed to mould may in fact be caused by bacteria, dust
          mites, etc., found in mould-colonized environments. So-called "toxic
          mould" has been claimed as the cause of "toxic mould disease"; this
          syndrome remains undefined and "toxic mould" as a cause remains
          unproven. "Toxic mould" is also unproven as a cause of the various
          symptoms associated with "sick building syndrome".)
        </p>
        <p>
          Mould growth in homes, schools, and businesses should be eliminated
          for the sake of human health, structural integrity, and quality of
          life. Cleaning up small amounts of mould can be done by homeowners.
          Eliminating mould from large areas requires expertise and protection
          both for the removal specialists and occupants of the affected space.
        </p>
        <h4>
          When mould damage is discovered in your property, there are many
          questions that may come to mind. For example:
        </h4>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Is mould dangerous?</Accordion.Header>
            <Accordion.Body>
              <p>
                Yes. Exposure to mould can cause health effects in some people.
                Mould spores are always found in the air we breathe, but
                extensive mould contamination may cause health problems.
                Breathing mould can cause allergic and respiratory symptoms.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do moulds affect people?</Accordion.Header>
            <Accordion.Body>
              <p>
                Exposure to damp and moldy environments may cause a variety of
                health effects, or none at all. Some people are sensitive to
                moulds. For these people, exposure to moulds can lead to
                symptoms such as stuffy nose, wheezing, and red or itchy eyes,
                or skin. Some people, such as those with allergies to moulds or
                withasthma, may have more intense reactions. Severe reactions
                may occur Is mould dangerous?How do moulds affect people? among
                workers exposed to large amounts of moulds in occupational
                settings, such as farmers working around moldy hay. Severe
                reactions may include fever and shortness of breath.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What does mould smell like?</Accordion.Header>
            <Accordion.Body>
              <p>
                Mould usually makes itself known through smell before it
                visually appears within your property. There are many words that
                could be used to describe the smell of mould --usually it’s a
                wet, musty and stale odor. If you begin to notice this smell in
                your homeor business, you should immediately look for the signs
                of mould. This odor also often leads to irritation of the nose
                and sneezing.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              When do I need a mould removal specialist?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                For large-scale mould removal, expert knowledge and specialized
                equipment are required to carry out mould remediation work.
                Listed below are several other situations in which a mould
                removal specialist is required in order to guarantee effective
                mould remediation, regardless of the size of the impacted area.
              </p>

              <h4>Specialized Item Cleaning</h4>

              <p>
                Different items require different methods and approaches to
                cleaning and decontamination. Even if you&rsquo;ve thoroughly
                wiped it and used a product described as a &quot;mould removal
                spray,&quot; there is still a chance that mould spores could
                remain within the fibers. Mould removal spray does not actual
                exist; mould must be removed professionally and any spray will
                justform part of a wet wipe after.
              </p>

              <h4>Proper Structural Drying</h4>

              <p>
                In order to reduce the chances of mould reappearing in your home
                or business, or returning after a clean-up, proper structural
                drying should take place. Simply cleaning away the mould without
                thoroughly drying the property out will mean that remaining
                moisture leads to reoccurrence.
              </p>

              <h4>Disaster Recovery</h4>

              <p>
                Any mould that comes as a result of flooding should be removed
                by a professional mould remediation expert. Flood water can be
                contaminated by sewage, chemicals and bacteria, and any
                contaminated water damage must be dealt with by an expert.
                Similarly, contaminated materials must be dealt with
                professionally as they pose serious health risks and can cause
                problems long after the flood.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default BiohazardRedemption;
