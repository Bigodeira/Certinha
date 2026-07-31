import imgReferencia from '../../referencia.png'

// ─── Scientific References ─────────────────────────────────────────────────────

export default function ScientificReferences() {
  return (
    <section aria-label="Scientific references" className="section-pad" style={{ backgroundColor: 'var(--color-ground)' }}>
      <div className="inner">
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(22px, 2.8vw, 28px)',
            fontWeight: 500,
            textAlign: 'center',
            color: 'var(--color-text)',
            margin: '0 0 40px',
          }}
        >
          Scientific References:
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <img
            src={imgReferencia}
            alt="JCAD, Mayo Clinic College of Medicine and Science, ScienceDaily, Frontiers Science News"
            style={{ width: '100%', maxWidth: '820px', height: 'auto', objectFit: 'contain' }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '8px 40px',
            fontSize: 12.5,
            lineHeight: 1.6,
            color: 'var(--color-muted)',
            fontWeight: 300,
          }}
        >
          <ol style={{ margin: 0, paddingLeft: 18 }}>
            <li style={{ marginBottom: 12 }}>Barros S, Ribeiro APD, Offenbacher S, Loewy ZG. Anti-Inflammatory Effects of Vitamin E in Response to Candida albicans. Microorganisms. 2020 May 26;8(6):804. doi:10.3390/microorganisms8060804.</li>
            <li style={{ marginBottom: 12 }}>Basak S, Guha P. A review on antifungal activity and mode of action of essential oils and their delivery as nano-sized oil droplets in food system. Journal of Food Science and Technology. 2018 Dec;55(12):4701-4710. doi:10.1007/s13197-018-3394-5.</li>
            <li style={{ marginBottom: 12 }}>Chee HY, Lee MH. Antifungal activity of clove essential oil and its volatile vapour against dermatophytic fungi. Mycobiology. 2007 Dec 1;35(4):241-243. doi:10.4489/MYCO.2007.35.4.241.</li>
            <li style={{ marginBottom: 12 }}>Cleveland Clinic. Antifungal resistance: What it is, causes, treatment & prevention [Internet]. 2023 [cited 2023 Nov 11].</li>
            <li style={{ marginBottom: 12 }}>Colby J. Organic Flaxseed Oil: The natural remedy for nail fungus [Internet]. 2023 [cited 2023 Nov 11].</li>
            <li style={{ marginBottom: 12 }}>D'Auria FD, Tecca M, Strippoli V, Salvatore G, Battinelli L, Mazzanti G. Antifungal activity of Lavandula angustifolia essential oil against Candida albicans yeast and mycelial form. Medical Mycology. 2005 Aug;43(5):391-396. doi:10.1080/13693780400004810.</li>
            <li style={{ marginBottom: 12 }}>Geng H, Yu X, Lu A, Cao H, Zhou B, Zhou L, Zhao Z. Extraction, Chemical Composition, and Antifungal Activity of Essential Oil of Bitter Almond. International Journal of Molecular Sciences. 2016 Aug 29;17(9):1421. doi:10.3390/ijms17091421.</li>
            <li style={{ marginBottom: 12 }}>Huang P. Scrubbing your house of bacteria could clear the way for fungus [Internet]. NPR; 2019 [cited 2023 Nov 11].</li>
            <li style={{ marginBottom: 12 }}>Pai V, Ganavalli A, Kikkeri NN. Antifungal Resistance in Dermatology. Indian Journal of Dermatology. 2018 Sep-Oct;63(5):361-368. doi:10.4103/ijd.IJD_131_17.</li>
            <li style={{ marginBottom: 12 }}>Xu Y, Hall C 3rd, Wolf-Hall C. Antifungal activity stability of flaxseed protein extract using response surface methodology. Journal of Food Science. 2008 Jan;73(1):M9-14. doi:10.1111/j.1750-3841.2007.00576.x.</li>
            <li style={{ marginBottom: 12 }}>Manuka Research. You need to know about mānuka oil for toenail fungus [Internet]. ManukaRx; 2020 [cited 2023 Nov 11].</li>
          </ol>

          <ol start={12} style={{ margin: 0, paddingLeft: 18 }}>
            <li style={{ marginBottom: 12 }}>Mathew C, Tesfaye W, Rasmussen P, Peterson GM, Bartholomaeus A, Sharma M, Thomas J. Mānuka Oil-A Review of Antimicrobial and Other Medicinal Properties. Pharmaceuticals (Basel). 2020 Oct 26;13(11):343. doi:10.3390/ph13110343.</li>
            <li style={{ marginBottom: 12 }}>Mayo Clinic Staff. Tea tree oil [Internet]. Mayo Foundation for Medical Education and Research; 2023 [cited 2023 Nov 11].</li>
            <li style={{ marginBottom: 12 }}>Muñoz-Tébar N, Carmona M, Ortiz de Elguea-Culebras G, Molina A, Berruga MI. Chia Seed Mucilage Edible Films with Origanum vulgare and Satureja montana Essential Oils: Characterization and Antifungal Properties. Membranes (Basel). 2022 Feb 11;12(2):213. doi:10.3390/membranes12020213.</li>
            <li style={{ marginBottom: 12 }}>Rana IS, Rana AS, Rajok RC. Evaluation of antifungal activity in essential oil of the Syzygium aromaticum (L.) by extraction, purification and analysis of its main component eugenol. Brazilian Journal of Microbiology. 2011 Oct;42(4):1269-1277. doi:10.1590/S1517-83822011000400004.</li>
            <li style={{ marginBottom: 12 }}>Rosca-Casian O, Parvu M, Vlase L, Tamas M. Antifungal activity of Aloe vera leaves. Fitoterapia. 2007 Apr;78(3):219-222. doi:10.1016/j.fitote.2006.11.008.</li>
            <li style={{ marginBottom: 12 }}>Shi D, Zhao Y, Yan H, Fu H, Shen Y, Lu G, Mei H, Qiu Y, Li D, Liu W. Antifungal effects of undecylenic acid on the biofilm formation of Candida albicans. International Journal of Clinical Pharmacology and Therapeutics. 2016 May;54(5):343-353. doi:10.5414/CP202460.</li>
            <li style={{ marginBottom: 12 }}>Saniasiaya J, Salim R, Mohamad I, Harun A. Antifungal Effect of Malaysian Aloe vera Leaf Extract on Selected Fungal Species of Pathogenic Otomycosis Species in In Vitro Culture Medium. Oman Medical Journal. 2017 Jan;32(1):41-46. doi:10.5001/omj.2017.08.</li>
            <li style={{ marginBottom: 12 }}>Society for General Microbiology. Lavender oil has potent antifungal effect [Internet]. ScienceDaily; 2011 [cited 2023 Nov 11].</li>
            <li style={{ marginBottom: 12 }}>Xu H, Wang G, Zhang J, Zhang M, Fu M, Xiang K, Zhang M, Chen X. Identification of phenolic compounds and active antifungal ingredients in walnut in response to anthracnose (Colletotrichum gloeosporioides). Postharvest Biology and Technology. 2022 Oct 1;192:112019. doi:10.1016/j.postharvbio.2022.112019.</li>
            <li style={{ marginBottom: 12 }}>Mahilrajan S, Nandakumar J, Kailayalingam R, Manoharan NA, SriVijeindran S. Screening the antifungal activity of essential oils against decay fungi from palmyrah leaf handicrafts. Biological Research. 2014 Aug 15;47(1):35. doi:10.1186/0717-6287-47-35.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}
