const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'music-theory-tools', 'interval-calculator', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update <head>
const headRegex = /<head>[\s\S]*?<\/head>/i;
const newHead = `<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Musical Interval Calculator – Distance in Semitones, Quality & Ratios</title>
  <meta name="description"
    content="Calculate the musical interval between any two notes instantly. Identifies major, minor, perfect, augmented, and diminished intervals with semitones, inversion rules, and song mnemonics." />
  <meta name="keywords"
    content="interval calculator, musical intervals, semitone calculator, note distance, major minor perfect intervals, tritone calculator, ear training intervals" />
  <link rel="canonical" href="https://pitchdetectors.com/music-theory-tools/interval-calculator/" />
  <link rel="icon" href="/assets/imgs/logo.png" type="image/x-icon">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
  <link href="/assets/bootstrap5.css" rel="stylesheet">
  <link rel="stylesheet" href="/assets/style.css">
  <link href="/assets/tools.css" rel="stylesheet">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-NCHP45VYJ2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-NCHP45VYJ2');
  </script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5860966996605385"
    crossorigin="anonymous"></script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a musical interval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A musical interval is the distance in pitch between two notes. If the notes sound simultaneously, it is a harmonic interval; if they sound sequentially in time, it is a melodic interval. Every interval is defined by its numerical generic size (second, third, fourth) and its quality (perfect, major, minor, augmented, or diminished)."
        }
      },
      {
        "@type": "Question",
        "name": "Why are fourths and fifths called 'Perfect' while thirds and sixths are 'Major/Minor'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unisons, octaves, fourths, and fifths are called 'Perfect' because of their high acoustic consonance and simple harmonic ratios (2:1, 3:2, 4:3). When inverted, a perfect interval remains perfect (a perfect 4th inverts to a perfect 5th). In contrast, thirds and sixths exist naturally in two distinct forms (major and minor) and invert between each other."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 'Rule of 9' for interval inversion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Rule of 9 states that when an interval is inverted (moving the lower note up an octave), the original interval size and its inversion always add up to 9: 2nds become 7ths, 3rds become 6ths, 4ths become 5ths, and unisons become octaves. Qualities also invert: Major becomes Minor, Minor becomes Major, Augmented becomes Diminished, and Perfect remains Perfect."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Tritone and why was it called 'Diabolus in Musica'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The tritone is an interval spanning exactly 3 whole tones or 6 semitones (an augmented fourth or diminished fifth). It splits the 12-semitone octave exactly in half. In medieval music theory, it was termed 'the devil in music' due to its intense acoustic dissonance, instability, and strict prohibition in liturgical counterpoint."
        }
      },
      {
        "@type": "Question",
        "name": "What is a compound interval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A compound interval is any interval larger than one octave (greater than 12 semitones). It is calculated by adding 7 to the simple interval: a 9th is a compound 2nd (8 + 2 semitones = 14 st), an 11th is a compound 4th (17 st), and a 13th is a compound 6th (21 st). Compound intervals form the basis of extended jazz chords."
        }
      },
      {
        "@type": "Question",
        "name": "How do memory song mnemonics help in ear training for intervals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Musicians associate intervals with the opening notes of famous songs to recognize pitch distances instantly. For example, a minor 2nd is the 'Jaws' theme, a perfect 4th is 'Here Comes the Bride', a perfect 5th is the 'Star Wars' theme, and an octave is 'Somewhere Over the Rainbow'."
        }
      }
    ]
  }
  </script>
</head>`;

html = html.replace(headRegex, newHead);

// 2. Adjust col-lg-7 col-md-8 to col-lg-9 col-md-8
html = html.replace(/<div class="col-lg-7 col-md-8">/, '<div class="col-lg-9 col-md-8">');

// 3. Locate content starting after </button> / Common Intervals
const contentAreaIdx = html.indexOf('<!-- Content area -->');
const mainColCloseIdx = html.indexOf('</div> <!-- /main col -->');

if (contentAreaIdx === -1 || mainColCloseIdx === -1) {
  console.error("Could not find contentAreaIdx or mainColCloseIdx in interval calculator");
  process.exit(1);
}

const newArticleContent = `<!-- Educational & Technical Content -->
          <article class="tool-container mt-4">
            <section class="mb-4">
              <h1 class="mb-3">Musical Interval Calculator: Pitch Distance & Harmonic Ratio Analysis</h1>
              <p class="lead text-muted">
                Calculate the precise musical interval between any two pitches. Explore semitone counts, diatonic and chromatic classifications, the Rule of 9 interval inversion, and acoustic frequency ratios.
              </p>
              <p>
                In music theory, an <strong>interval</strong> is the fundamental building block of all melody and harmony. When two notes sound successively, they create a <em>melodic interval</em> that guides linear phrasing. When two notes sound simultaneously, they produce a <em>harmonic interval</em> that dictates acoustic consonance or dissonance. From the physical physics of vibrating strings to the emotional color of cinematic film scores, understanding intervals allows musicians to construct chords, transpose melodies, and develop keen ear training skills.
              </p>
            </section>

            <!-- Anatomy of an Interval -->
            <section class="mb-4">
              <h2 class="text-teal mb-3"><i class="bi bi-rulers me-2"></i>The Anatomy of a Musical Interval</h2>
              <p>
                Every musical interval possesses two distinct descriptors: <strong>Numerical Size</strong> (generic distance) and <strong>Quality</strong> (tonal character).
              </p>
              <div class="row g-3 my-2">
                <div class="col-md-6">
                  <div class="card h-100 border-0 shadow-sm p-3 bg-light">
                    <h5 class="fw-bold text-dark"><i class="bi bi-123 text-teal me-2"></i>1. Numerical Size (Scale Distance)</h5>
                    <p class="small text-muted mb-0">
                      Calculated by counting the total number of letter names from the first note to the second note, inclusive of both. For example, the distance from $C$ to $E$ is a <strong>third</strong> ($C-1, D-2, E-3$), regardless of whether accidentals (sharps or flats) are present.
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card h-100 border-0 shadow-sm p-3 bg-light">
                    <h5 class="fw-bold text-dark"><i class="bi bi-sliders text-teal me-2"></i>2. Interval Quality (Semitone Count)</h5>
                    <p class="small text-muted mb-0">
                      Determined by the exact number of chromatic semitones (half-steps) separating the two pitches. Unisons, 4ths, 5ths, and octaves are categorized as <strong>Perfect</strong>, while 2nds, 3rds, 6ths, and 7ths are categorized as <strong>Major</strong> or <strong>Minor</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Complete 12-Semitone Master Reference Table -->
            <section class="mb-4">
              <h2 class="text-teal mb-3"><i class="bi bi-table me-2"></i>Master Interval Reference Table (0 to 12 Semitones)</h2>
              <div class="table-responsive">
                <table class="table table-hover table-bordered align-middle">
                  <thead class="table-dark">
                    <tr>
                      <th>Semitones</th>
                      <th>Interval Name</th>
                      <th>Short Symbol</th>
                      <th>Just Ratio</th>
                      <th>12-TET Cents</th>
                      <th>Acoustic Quality</th>
                      <th>Ear Training Song Mnemonic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fw-bold">0</td>
                      <td>Perfect Unison</td>
                      <td>P1</td>
                      <td><code>1:1</code></td>
                      <td>0¢</td>
                      <td>Complete consonance</td>
                      <td>Same note repetition</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">1</td>
                      <td>Minor Second</td>
                      <td>m2</td>
                      <td><code>16:15</code></td>
                      <td>100¢</td>
                      <td>Sharp dissonance</td>
                      <td><em>Jaws</em> Theme / "Pink Panther"</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">2</td>
                      <td>Major Second</td>
                      <td>M2</td>
                      <td><code>9:8</code></td>
                      <td>200¢</td>
                      <td>Mild dissonance</td>
                      <td>"Happy Birthday" (first two notes)</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">3</td>
                      <td>Minor Third</td>
                      <td>m3</td>
                      <td><code>6:5</code></td>
                      <td>300¢</td>
                      <td>Imperfect consonance</td>
                      <td>"Greensleeves" / "Smoke on the Water"</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">4</td>
                      <td>Major Third</td>
                      <td>M3</td>
                      <td><code>5:4</code></td>
                      <td>400¢</td>
                      <td>Imperfect consonance</td>
                      <td>"When the Saints Go Marching In"</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">5</td>
                      <td>Perfect Fourth</td>
                      <td>P4</td>
                      <td><code>4:3</code></td>
                      <td>500¢</td>
                      <td>Open consonance</td>
                      <td>"Here Comes the Bride" / "Amazing Grace"</td>
                    </tr>
                    <tr>
                      <td class="fw-bold text-danger">6</td>
                      <td>Tritone (Dim 5th / Aug 4th)</td>
                      <td>TT / d5</td>
                      <td><code>45:32</code></td>
                      <td>600¢</td>
                      <td>Maximum dissonance</td>
                      <td><em>The Simpsons</em> Theme / "Maria" (West Side Story)</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">7</td>
                      <td>Perfect Fifth</td>
                      <td>P5</td>
                      <td><code>3:2</code></td>
                      <td>700¢</td>
                      <td>Pure acoustic consonance</td>
                      <td><em>Star Wars</em> Theme / "Twinkle Twinkle Little Star"</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">8</td>
                      <td>Minor Sixth</td>
                      <td>m6</td>
                      <td><code>8:5</code></td>
                      <td>800¢</td>
                      <td>Imperfect consonance</td>
                      <td>"The Entertainer" (Scott Joplin)</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">9</td>
                      <td>Major Sixth</td>
                      <td>M6</td>
                      <td><code>5:3</code></td>
                      <td>900¢</td>
                      <td>Imperfect consonance</td>
                      <td>"NBC Chime" / "My Bonnie Lies Over the Ocean"</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">10</td>
                      <td>Minor Seventh</td>
                      <td>m7</td>
                      <td><code>9:5</code> / <code>16:9</code></td>
                      <td>1000¢</td>
                      <td>Mild dissonance (Bluesy)</td>
                      <td><em>Star Trek</em> Original Theme / "Somewhere"</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">11</td>
                      <td>Major Seventh</td>
                      <td>M7</td>
                      <td><code>15:8</code></td>
                      <td>1100¢</td>
                      <td>Sharp leading dissonance</td>
                      <td>"Take On Me" (chorus jump) / "Pure Imagination"</td>
                    </tr>
                    <tr>
                      <td class="fw-bold">12</td>
                      <td>Perfect Octave</td>
                      <td>P8</td>
                      <td><code>2:1</code></td>
                      <td>1200¢</td>
                      <td>Harmonic identity</td>
                      <td>"Somewhere Over the Rainbow"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- The Rule of 9 and Interval Inversions -->
            <section class="mb-4">
              <h2 class="text-teal mb-3"><i class="bi bi-arrow-repeat me-2"></i>The Rule of 9: Inversion Relationships</h2>
              <p>
                Inverting an interval means shifting the lower note up an octave so it becomes the higher note. Interval inversions follow mathematical laws:
              </p>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="p-3 border rounded h-100 bg-light">
                    <h6 class="fw-bold text-dark"><i class="bi bi-calculator-fill text-teal me-2"></i>Numerical Rule: Sum = 9</h6>
                    <ul class="small mb-0">
                      <li>Unison ($1$) inverts to an Octave ($8$): $1 + 8 = 9$</li>
                      <li>Second ($2$) inverts to a Seventh ($7$): $2 + 7 = 9$</li>
                      <li>Third ($3$) inverts to a Sixth ($6$): $3 + 6 = 9$</li>
                      <li>Fourth ($4$) inverts to a Fifth ($5$): $4 + 5 = 9$</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="p-3 border rounded h-100 bg-light">
                    <h6 class="fw-bold text-dark"><i class="bi bi-symmetry-horizontal text-teal me-2"></i>Quality Inversion Rule</h6>
                    <ul class="small mb-0">
                      <li><strong>Major</strong> inverts to <strong>Minor</strong> (and vice versa)</li>
                      <li><strong>Augmented</strong> inverts to <strong>Diminished</strong> (and vice versa)</li>
                      <li><strong>Perfect</strong> remains <strong>Perfect</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- Consonance and Acoustic Physics -->
            <section class="mb-4">
              <h2 class="text-teal mb-3"><i class="bi bi-soundwave me-2"></i>Acoustic Physics: Why Do Certain Intervals Sound Consonant?</h2>
              <p>
                The human sensation of musical consonance vs. dissonance is physically rooted in the <strong>overlap of harmonic overtones</strong>. When two pitches share simple small-integer frequency ratios, their respective harmonic series align without physical interference:
              </p>
              <div class="p-3 rounded-3 border-start border-4 border-info bg-light">
                <p class="small text-muted mb-2">
                  <strong>The Perfect 5th ($3:2$ Ratio):</strong> Every second harmonic of the upper note aligns precisely with every third harmonic of the lower note. The waveforms reinforce each other smoothly, producing zero acoustic beating.
                </p>
                <p class="small text-muted mb-0">
                  <strong>The Minor 2nd ($16:15$ Ratio):</strong> The fundamental frequencies are so close ($f_2 - f_1 \\approx 10\\text{--}30\\text{ Hz}$) that they fall within the same <em>critical band</em> of the human cochlea. This generates rapid amplitude modulation (acoustic beating) perceived as harsh friction and dissonance.
                </p>
              </div>
            </section>

            <!-- Frequently Asked Questions -->
            <section class="mb-4">
              <h2 class="text-teal mb-4"><i class="bi bi-question-circle me-2"></i>Frequently Asked Questions</h2>
              <div class="accordion" id="intervalFaqAccordion">
                <div class="accordion-item">
                  <h3 class="accordion-header" id="iFaqHead1">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#iFaqCol1" aria-expanded="true" aria-controls="iFaqCol1">
                      What is a musical interval?
                    </button>
                  </h3>
                  <div id="iFaqCol1" class="accordion-collapse collapse show" aria-labelledby="iFaqHead1" data-bs-parent="#intervalFaqAccordion">
                    <div class="accordion-body">
                      A musical interval is the distance in pitch between two notes. If the notes sound simultaneously, it is a harmonic interval; if they sound sequentially in time, it is a melodic interval. Every interval is defined by its numerical generic size (second, third, fourth) and its quality (perfect, major, minor, augmented, or diminished).
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header" id="iFaqHead2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#iFaqCol2" aria-expanded="false" aria-controls="iFaqCol2">
                      Why are fourths and fifths called 'Perfect' while thirds and sixths are 'Major/Minor'?
                    </button>
                  </h3>
                  <div id="iFaqCol2" class="accordion-collapse collapse" aria-labelledby="iFaqHead2" data-bs-parent="#intervalFaqAccordion">
                    <div class="accordion-body">
                      Unisons, octaves, fourths, and fifths are called 'Perfect' because of their high acoustic consonance and simple harmonic ratios (2:1, 3:2, 4:3). When inverted, a perfect interval remains perfect (a perfect 4th inverts to a perfect 5th). In contrast, thirds and sixths exist naturally in two distinct forms (major and minor) and invert between each other.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header" id="iFaqHead3">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#iFaqCol3" aria-expanded="false" aria-controls="iFaqCol3">
                      What is the 'Rule of 9' for interval inversion?
                    </button>
                  </h3>
                  <div id="iFaqCol3" class="accordion-collapse collapse" aria-labelledby="iFaqHead3" data-bs-parent="#intervalFaqAccordion">
                    <div class="accordion-body">
                      The Rule of 9 states that when an interval is inverted (moving the lower note up an octave), the original interval size and its inversion always add up to 9: 2nds become 7ths, 3rds become 6ths, 4ths become 5ths, and unisons become octaves. Qualities also invert: Major becomes Minor, Minor becomes Major, Augmented becomes Diminished, and Perfect remains Perfect.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header" id="iFaqHead4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#iFaqCol4" aria-expanded="false" aria-controls="iFaqCol4">
                      What is the Tritone and why was it called 'Diabolus in Musica'?
                    </button>
                  </h3>
                  <div id="iFaqCol4" class="accordion-collapse collapse" aria-labelledby="iFaqHead4" data-bs-parent="#intervalFaqAccordion">
                    <div class="accordion-body">
                      The tritone is an interval spanning exactly 3 whole tones or 6 semitones (an augmented fourth or diminished fifth). It splits the 12-semitone octave exactly in half. In medieval music theory, it was termed 'the devil in music' due to its intense acoustic dissonance, instability, and strict prohibition in liturgical counterpoint.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header" id="iFaqHead5">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#iFaqCol5" aria-expanded="false" aria-controls="iFaqCol5">
                      What is a compound interval?
                    </button>
                  </h3>
                  <div id="iFaqCol5" class="accordion-collapse collapse" aria-labelledby="iFaqHead5" data-bs-parent="#intervalFaqAccordion">
                    <div class="accordion-body">
                      A compound interval is any interval larger than one octave (greater than 12 semitones). It is calculated by adding 7 to the simple interval: a 9th is a compound 2nd (8 + 2 semitones = 14 st), an 11th is a compound 4th (17 st), and a 13th is a compound 6th (21 st). Compound intervals form the basis of extended jazz chords.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header" id="iFaqHead6">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#iFaqCol6" aria-expanded="false" aria-controls="iFaqCol6">
                      How do memory song mnemonics help in ear training for intervals?
                    </button>
                  </h3>
                  <div id="iFaqCol6" class="accordion-collapse collapse" aria-labelledby="iFaqHead6" data-bs-parent="#intervalFaqAccordion">
                    <div class="accordion-body">
                      Musicians associate intervals with the opening notes of famous songs to recognize pitch distances instantly. For example, a minor 2nd is the 'Jaws' theme, a perfect 4th is 'Here Comes the Bride', a perfect 5th is the 'Star Wars' theme, and an octave is 'Somewhere Over the Rainbow'.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Related Tools -->
            <div class="card my-4 shadow-sm border-0 bg-light">
              <div class="card-body p-4">
                <h5 class="fw-bold mb-3"><i class="bi bi-link-45deg text-teal me-2"></i>Explore Related Music Theory Tools</h5>
                <div class="row g-2">
                  <div class="col-sm-6 col-md-3">
                    <a class="btn btn-outline-primary w-100 text-start" href="/music-theory-tools/chord-identifier/">
                      <i class="bi bi-vinyl me-1"></i> Chord Identifier
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <a class="btn btn-outline-primary w-100 text-start" href="/music-theory-tools/scale-finder/">
                      <i class="bi bi-grid-3x3 me-1"></i> Scale Finder
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <a class="btn btn-outline-primary w-100 text-start" href="/music-theory-tools/chord-progression-generator/">
                      <i class="bi bi-diagram-3 me-1"></i> Chord Progression
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-3">
                    <a class="btn btn-outline-primary w-100 text-start" href="/pitch-detector-tools/cents-calculator-online/">
                      <i class="bi bi-rulers me-1"></i> Cents Calc
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div> <!-- /main col -->`;

html = html.substring(0, contentAreaIdx) + newArticleContent + html.substring(mainColCloseIdx + '</div> <!-- /main col -->'.length);

fs.writeFileSync(filePath, html, 'utf8');
console.log("Successfully updated Interval Calculator HTML");
