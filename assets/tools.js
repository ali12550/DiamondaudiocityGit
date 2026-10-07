// Pitch Detectors Tools JavaScript
// Brand Identity: Neon Wave Emerald, Amber Gold, Studio Obsidian

// Comprehensive Tool Database (60+ Tools)
const allAudioTools = [
    // DJ & Music Production
    { name: 'BPM Calculator', url: '/dj-music-production-tools/bpm-calculator/', category: 'DJ & Production', icon: 'bi-speedometer2', desc: 'Calculate beats per minute from time intervals' },
    { name: 'BPM Tap Tempo', url: '/dj-music-production-tools/bpm-tap-tempo/', category: 'DJ & Production', icon: 'bi-hand-index', desc: 'Tap along to any song to detect BPM instantly' },
    { name: 'BPM to Milliseconds', url: '/dj-music-production-tools/bpm-to-ms/', category: 'DJ & Production', icon: 'bi-clock', desc: 'Convert tempo into ms delays and reverbs' },
    { name: 'BPM to Speed %', url: '/dj-music-production-tools/bpm-to-speed/', category: 'DJ & Production', icon: 'bi-arrow-repeat', desc: 'Pitch and speed percentage converter' },
    { name: 'Song Length from BPM', url: '/dj-music-production-tools/song-length-from-bpm-calculator.html', category: 'DJ & Production', icon: 'bi-stopwatch', desc: 'Calculate track duration from bars and tempo' },
    { name: 'Song Key Finder', url: '/dj-music-production-tools/song-key-finder/', category: 'DJ & Production', icon: 'bi-key', desc: 'Detect musical key and harmonic scale' },
    { name: 'BPM Pitch Calculator', url: '/BPM-Pitch-Calculator.html', category: 'DJ & Production', icon: 'bi-sliders', desc: 'Calculate pitch shifts and semitone offsets' },
    { name: 'DJ Transition Calculator', url: '/dj-music-production-tools/dj-transition-calculator/', category: 'DJ & Production', icon: 'bi-shuffle', desc: 'Harmonic mixing and tempo transition helper' },
    { name: 'DJ Set Length Calculator', url: '/dj-music-production-tools/dj-set-length-calculator/', category: 'DJ & Production', icon: 'bi-clock-history', desc: 'Plan set timing, tracks, and transitions' },
    { name: 'Mix Compatibility Checker', url: '/dj-music-production-tools/mix-compatibility-checker/', category: 'DJ & Production', icon: 'bi-check2-circle', desc: 'Check Camelot wheel compatibility' },

    // Music Theory
    { name: 'Online Metronome', url: '/music-theory-tools/online-metronome/', category: 'Music Theory', icon: 'bi-stopwatch', desc: 'Visual and audio precision metronome' },
    { name: 'Scale Finder', url: '/music-theory-tools/scale-finder/', category: 'Music Theory', icon: 'bi-grid-3x3', desc: 'Explore modes, pentatonics, and major/minor scales' },
    { name: 'Chord Identifier', url: '/music-theory-tools/chord-identifier/', category: 'Music Theory', icon: 'bi-vinyl', desc: 'Identify chord names and inversions from notes' },
    { name: 'Chord Progression Generator', url: '/music-theory-tools/chord-progression-generator/', category: 'Music Theory', icon: 'bi-diagram-3', desc: 'Generate musical chord sequences in any key' },
    { name: 'Melody Generator', url: '/music-theory-tools/melody-generator/', category: 'Music Theory', icon: 'bi-music-note', desc: 'Generate melodic hooks and motifs' },
    { name: 'Interval Calculator', url: '/music-theory-tools/interval-calculator/', category: 'Music Theory', icon: 'bi-arrow-left-right', desc: 'Calculate musical intervals and semitones' },
    { name: 'Rhythm Pattern Maker', url: '/music-theory-tools/rhythm-pattern-maker/', category: 'Music Theory', icon: 'bi-bar-chart', desc: 'Design drum patterns and polyrhythms' },

    // Pitch Detector & Tuning
    { name: 'Guitar Tuner', url: '/pitch-detector-tools/guitar-tuner-online/', category: 'Pitch Detector', icon: 'bi-music-note-beamed', desc: 'Accurate microphone guitar and instrument tuner' },
    { name: 'Pitch Detector Online', url: '/pitch-detector-tools/pitch-detector/', category: 'Pitch Detector', icon: 'bi-soundwave', desc: 'Live pitch detection and note analysis' },
    { name: 'Vocal Range Finder', url: '/pitch-detector-tools/vocal-range-finder-online/', category: 'Pitch Detector', icon: 'bi-mic', desc: 'Find your lowest and highest singing notes' },
    { name: 'Vocal Range Test', url: '/pitch-detector-tools/vocal-range-test.html', category: 'Pitch Detector', icon: 'bi-mic-fill', desc: 'Interactive voice classification tester' },
    { name: 'Frequency to Note', url: '/pitch-detector-tools/frequency-to-note-online/', category: 'Pitch Detector', icon: 'bi-arrow-left-right', desc: 'Convert Hertz to exact musical pitch & cents' },
    { name: 'Note to Frequency', url: '/pitch-detector-tools/note-to-frequency-online/', category: 'Pitch Detector', icon: 'bi-calculator', desc: 'Calculate standard A4=440Hz Hz frequencies' },
    { name: 'Cents Calculator', url: '/pitch-detector-tools/cents-calculator-online/', category: 'Pitch Detector', icon: 'bi-rulers', desc: 'Microtonal and tuning offset calculator' },
    { name: 'Harmonic Series Calculator', url: '/pitch-detector-tools/harmonic-series-calculator-online/', category: 'Pitch Detector', icon: 'bi-graph-up', desc: 'Explore natural overtone spectrums' },
    { name: 'Pitch Shift Calculator', url: '/pitch-detector-tools/pitch-shift-calculator/', category: 'Pitch Detector', icon: 'bi-arrow-repeat', desc: 'Calculate semitones and playback speed' },
    { name: 'Transpose Calculator', url: '/pitch-detector-tools/transpose-calculator-online/', category: 'Pitch Detector', icon: 'bi-arrow-left-right', desc: 'Transpose keys, chords, and sheet music' },

    // Sound Analysis
    { name: 'Decibel Meter', url: '/sound-analysis-tools/decibel-meter/', category: 'Sound Analysis', icon: 'bi-volume-up', desc: 'Live microphone sound pressure level meter' },
    { name: 'Loudness Meter', url: '/sound-analysis-tools/loudness-meter/', category: 'Sound Analysis', icon: 'bi-speedometer', desc: 'LUFS & RMS loudness measurement' },
    { name: 'Waveform Visualizer', url: '/sound-analysis-tools/audio-to-waveform-visualizer.html', category: 'Sound Analysis', icon: 'bi-activity', desc: 'Convert audio into responsive waveforms' },
    { name: 'Microphone Test', url: '/sound-analysis-tools/microphone-test/', category: 'Sound Analysis', icon: 'bi-mic', desc: 'Test mic clarity, frequency, and distortion' },

    // Audio Editing
    { name: 'Audio Trimmer', url: '/audio-editing-tools/audio-trimmer/', category: 'Audio Editing', icon: 'bi-scissors', desc: 'Cut and trim audio files with millisecond precision' },
    { name: 'Audio Merger', url: '/audio-editing-tools/audio-merger/', category: 'Audio Editing', icon: 'bi-union', desc: 'Combine multiple tracks into one audio file' },
    { name: 'Audio Reverser', url: '/audio-editing-tools/reverse-audio.html', category: 'Audio Editing', icon: 'bi-arrow-counterclockwise', desc: 'Reverse sound files for creative effects' },
    { name: 'Audio Speed Changer', url: '/audio-editing-tools/audio-speed-changer/', category: 'Audio Editing', icon: 'bi-speedometer', desc: 'Speed up or slow down audio with pitch control' },
    { name: 'Audio Normalizer', url: '/audio-editing-tools/audio-normalizer/', category: 'Audio Editing', icon: 'bi-sliders', desc: 'Normalize peak levels to standard broadcast targets' },
    { name: 'Audio Volume Booster', url: '/audio-editing-tools/Audio-Volume-Booster.html', category: 'Audio Editing', icon: 'bi-volume-up', desc: 'Boost quiet sound files without clipping' },
    { name: 'Loop Generator', url: '/audio-editing-tools/loop-generator/', category: 'Audio Editing', icon: 'bi-arrow-repeat', desc: 'Create seamless repeating audio loops' },

    // Speaker Tools
    { name: 'Speaker Load Balancer', url: '/speaker-tools/speaker-load-balancer/', category: 'Speaker Tools', icon: 'bi-diagram-3', desc: 'Series and parallel impedance load balancer' },
    { name: 'Speaker Impedance Calculator', url: '/speaker-tools/speaker-impedance-calculator/', category: 'Speaker Tools', icon: 'bi-lightning', desc: 'Calculate total ohms for multiple drivers' },
    { name: 'Speaker Sensitivity Calculator', url: '/speaker-tools/speaker-sensitivity-calculator/', category: 'Speaker Tools', icon: 'bi-graph-up', desc: 'Calculate sensitivity rating at 1W/1m' },
    { name: 'Sensitivity vs Distance Calculator', url: '/speaker-tools/sensitivity-vs-distance-calculator/', category: 'Speaker Tools', icon: 'bi-rulers', desc: 'SPL drop across listening distances' },
    { name: 'SPL Calculator', url: '/speaker-tools/spl-calculator/', category: 'Speaker Tools', icon: 'bi-volume-up', desc: 'Total acoustic sound pressure level' },
    { name: 'SPL per Watt Calculator', url: '/speaker-tools/spl-per-watt/', category: 'Speaker Tools', icon: 'bi-bar-chart', desc: 'Speaker efficiency and output per watt' },
    { name: 'Crossover Frequency Calculator', url: '/speaker-tools/crossover-frequency-calculator/', category: 'Speaker Tools', icon: 'bi-sliders', desc: 'Calculate 1st to 4th order crossover components' },
    { name: 'Crossover Slope Calculator', url: '/speaker-tools/crossover-slope-calculator/', category: 'Speaker Tools', icon: 'bi-graph-up-arrow', desc: '6dB, 12dB, 18dB, and 24dB octave slopes' },
    { name: 'Passive Crossover Calculator', url: '/speaker-tools/passive-crossover-calculator/', category: 'Speaker Tools', icon: 'bi-filter', desc: 'Capacitor and inductor values for crossovers' },
    { name: 'Room Modes Calculator', url: '/speaker-tools/room-modes-calculator/', category: 'Speaker Tools', icon: 'bi-house', desc: 'Find standing waves and room resonance' },
    { name: 'Room Volume Calculator', url: '/speaker-tools/room-volume-calculator/', category: 'Speaker Tools', icon: 'bi-box', desc: 'Calculate acoustic space and RT60 targets' },
    { name: 'Speaker Placement Calculator', url: '/speaker-tools/speaker-placement-calculator/', category: 'Speaker Tools', icon: 'bi-geo-alt', desc: 'Optimal equilateral triangle speaker placement' },
    { name: 'Speaker Wire Gauge Calculator', url: '/speaker-tools/speaker-wire-gauge-calculator/', category: 'Speaker Tools', icon: 'bi-plug', desc: 'Find minimum wire gauge (AWG) for runs' },
    { name: 'Amplifier Power Calculator', url: '/speaker-tools/amplifier-power-calculator/', category: 'Speaker Tools', icon: 'bi-lightning-charge', desc: 'Match amp RMS wattage to speaker specs' },
    { name: 'Subwoofer Enclosure Calculator', url: '/speaker-tools/subwoofer-enclosure-tuning-calculator/', category: 'Speaker Tools', icon: 'bi-speaker', desc: 'Tune box volume and Fb resonance' },
    { name: 'Ported Box Calculator', url: '/speaker-tools/ported-enclosure-calculator/', category: 'Speaker Tools', icon: 'bi-speaker-fill', desc: 'Vented box tuning and port dimensions' },
    { name: 'Sealed Box Calculator', url: '/speaker-tools/sealed-box-calculator/', category: 'Speaker Tools', icon: 'bi-box', desc: 'Acoustic suspension enclosure design' },
    { name: 'Zobel Network Calculator', url: '/speaker-tools/zobel-network-calculator/', category: 'Speaker Tools', icon: 'bi-diagram-2', desc: 'Impedance equalization RC network' },

    // Audiobook Tools
    { name: 'Audiobook Length Calculator', url: '/Audiobook-Length-Calculator.html', category: 'Audiobook Tools', icon: 'bi-book', desc: 'Calculate listening duration at adjusted speeds' },
    { name: 'Audiobook Speed Calculator', url: '/audiobook-speed-calculator.html', category: 'Audiobook Tools', icon: 'bi-speedometer', desc: 'Determine time saved at 1.25x, 1.5x, 2x' },
    { name: 'Audiobook Price Calculator', url: '/audiobook-price-calculator.html', category: 'Audiobook Tools', icon: 'bi-currency-dollar', desc: 'Evaluate per-hour listening value' },
    { name: 'Audiobook Progress Calculator', url: '/Audiobook-Progress-Calculator.html', category: 'Audiobook Tools', icon: 'bi-bar-chart', desc: 'Track chapters and estimated finish dates' }
];

// Active modal filter category
let currentModalCategory = 'all';
let currentSelectedIndex = -1;

// Open Global Search Modal
function openGlobalSearch(defaultQuery = '') {
    let modal = document.getElementById('globalSearchModal');
    if (!modal) {
        createModalDynamically();
        modal = document.getElementById('globalSearchModal');
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const input = document.getElementById('modalSearchInput');
    if (input) {
        if (defaultQuery) input.value = defaultQuery;
        renderModalResults(input.value.trim(), currentModalCategory);
        setTimeout(() => input.focus(), 50);
    }
}

// Close Global Search Modal
function closeGlobalSearch(e) {
    if (e && e.target && e.target.classList.contains('search-modal-card')) {
        return;
    }
    const modal = document.getElementById('globalSearchModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    currentSelectedIndex = -1;
}

// Render Modal Live Results
function renderModalResults(query = '', category = 'all') {
    const resultsContainer = document.getElementById('modalSearchResults');
    if (!resultsContainer) return;

    const lowerQuery = query.toLowerCase().trim();
    let filtered = allAudioTools;

    if (category !== 'all') {
        filtered = filtered.filter(tool => tool.category === category);
    }

    if (lowerQuery.length > 0) {
        filtered = filtered.filter(tool =>
            tool.name.toLowerCase().includes(lowerQuery) ||
            tool.category.toLowerCase().includes(lowerQuery) ||
            (tool.desc && tool.desc.toLowerCase().includes(lowerQuery))
        );
    }

    if (filtered.length === 0) {
        resultsContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-search text-muted" style="font-size: 2.5rem; opacity: 0.4;"></i>
                <p class="text-muted mt-3 mb-1">No audio tools found for "<strong>${escapeHtml(query)}</strong>"</p>
                <small class="text-muted">Try searching for BPM, Tuner, Speaker, Metronome, or Decibel.</small>
            </div>
        `;
        currentSelectedIndex = -1;
        return;
    }

    // Render list (cap at 15 for lightning fast rendering)
    const displayList = filtered.slice(0, 16);
    resultsContainer.innerHTML = displayList.map((tool, idx) => `
        <a href="${tool.url}" class="modal-result-item ${idx === 0 ? 'selected' : ''}" data-index="${idx}">
            <i class="bi ${tool.icon}"></i>
            <div class="tool-info">
                <span class="tool-name">${highlightMatch(tool.name, lowerQuery)}</span>
                <span class="tool-cat">${tool.category} ${tool.desc ? '— ' + escapeHtml(tool.desc) : ''}</span>
            </div>
            <i class="bi bi-arrow-right modal-result-arrow"></i>
        </a>
    `).join('');

    currentSelectedIndex = 0;
}

// Category Pill Filter
function filterModalCat(button, category) {
    currentModalCategory = category;
    document.querySelectorAll('.search-modal-tags .search-tag').forEach(btn => {
        btn.classList.remove('active');
    });
    if (button) button.classList.add('active');

    const input = document.getElementById('modalSearchInput');
    const query = input ? input.value.trim() : '';
    renderModalResults(query, currentModalCategory);
}

// Helper: Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Helper: Highlight matching text
function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const escaped = escapeHtml(text);
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escaped.replace(regex, '<span class="text-teal fw-bold">$1</span>');
}

// Dynamically create modal if missing from DOM
function createModalDynamically() {
    if (document.getElementById('globalSearchModal')) return;
    const modalHtml = `
    <div id="globalSearchModal" class="search-modal-backdrop" onclick="closeGlobalSearch(event)">
        <div class="search-modal-card" onclick="event.stopPropagation()">
            <div class="search-modal-header">
                <i class="bi bi-search search-modal-icon"></i>
                <input type="text" id="modalSearchInput" class="search-modal-input" placeholder="Search 60+ audio calculators & tools..." autocomplete="off">
                <button type="button" class="search-modal-close" onclick="closeGlobalSearch()" aria-label="Close search">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="search-modal-tags">
                <button type="button" class="search-tag active" data-cat="all" onclick="filterModalCat(this, 'all')">All</button>
                <button type="button" class="search-tag" data-cat="DJ & Production" onclick="filterModalCat(this, 'DJ & Production')">DJ & Production</button>
                <button type="button" class="search-tag" data-cat="Speaker Tools" onclick="filterModalCat(this, 'Speaker Tools')">Speakers</button>
                <button type="button" class="search-tag" data-cat="Pitch Detector" onclick="filterModalCat(this, 'Pitch Detector')">Pitch & Tuning</button>
                <button type="button" class="search-tag" data-cat="Music Theory" onclick="filterModalCat(this, 'Music Theory')">Music Theory</button>
                <button type="button" class="search-tag" data-cat="Sound Analysis" onclick="filterModalCat(this, 'Sound Analysis')">Analysis</button>
                <button type="button" class="search-tag" data-cat="Audio Editing" onclick="filterModalCat(this, 'Audio Editing')">Editing</button>
            </div>
            <div id="modalSearchResults" class="search-modal-results"></div>
            <div class="search-modal-footer">
                <span class="d-none d-sm-inline"><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
                <span class="d-none d-sm-inline ms-3"><kbd>ENTER</kbd> to open</span>
                <span class="d-none d-sm-inline ms-3"><kbd>ESC</kbd> to close</span>
                <span class="ms-auto"><i class="bi bi-soundwave text-teal me-1"></i>Pitch Detectors Tools</span>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

// Global Keyboard Shortcuts (Ctrl+K, Cmd+K, Arrow navigation)
document.addEventListener('keydown', function (e) {
    // Open on Ctrl+K, Cmd+K, or pressing '/' outside inputs
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openGlobalSearch();
        return;
    }

    const modal = document.getElementById('globalSearchModal');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
        e.preventDefault();
        closeGlobalSearch();
        return;
    }

    const results = modal.querySelectorAll('.modal-result-item');
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentSelectedIndex = (currentSelectedIndex + 1) % results.length;
        updateSelectedResult(results);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentSelectedIndex = (currentSelectedIndex - 1 + results.length) % results.length;
        updateSelectedResult(results);
    } else if (e.key === 'Enter') {
        if (currentSelectedIndex >= 0 && currentSelectedIndex < results.length) {
            e.preventDefault();
            results[currentSelectedIndex].click();
        }
    }
});

function updateSelectedResult(results) {
    results.forEach((el, idx) => {
        if (idx === currentSelectedIndex) {
            el.classList.add('selected');
            el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } else {
            el.classList.remove('selected');
        }
    });
}

// Setup input listeners on search input
document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'modalSearchInput') {
        renderModalResults(e.target.value, currentModalCategory);
    }
});

// Tool Search in Sidebar / Page Cards
function searchTools() {
    const searchInput = document.getElementById('toolSearch');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase().trim();
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');
    const toolCards = document.querySelectorAll('.tool-card');

    sidebarLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (searchTerm === '' || text.includes(searchTerm)) {
            link.parentElement.classList.remove('hidden');
        } else {
            link.parentElement.classList.add('hidden');
        }
    });

    toolCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
        if (searchTerm === '' || title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    document.querySelectorAll('.sidebar-category').forEach(category => {
        const visibleLinks = category.querySelectorAll('.sidebar-links li:not(.hidden)');
        if (visibleLinks.length === 0 && searchTerm !== '') {
            category.classList.add('hidden');
        } else {
            category.classList.remove('hidden');
        }
    });
}

// Collapsible Sidebar Categories
function initSidebarCategories() {
    document.querySelectorAll('.sidebar-category h5').forEach(header => {
        header.addEventListener('click', function () {
            const category = this.parentElement;
            const links = category.querySelector('.sidebar-links');
            if (links) {
                links.classList.toggle('collapsed');
                category.classList.toggle('collapsed');
            }
        });
    });
}

// Active Link Highlighting
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            const category = link.closest('.sidebar-category');
            if (category) {
                category.classList.add('active');
            }
        }
    });
}

// Mobile Sidebar Toggle
function initMobileSidebar() {
    const sidebar = document.querySelector('.tools-sidebar');
    if (!sidebar) return;

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'sidebar-toggle d-md-none d-sm-none btn btn-primary mb-3';
    toggleBtn.innerHTML = '<i class="bi bi-list"></i> Show Tools Menu';
    toggleBtn.onclick = function () {
        sidebar.classList.toggle('mobile-open');
        this.innerHTML = sidebar.classList.contains('mobile-open')
            ? '<i class="bi bi-x"></i> Hide Tools Menu'
            : '<i class="bi bi-list"></i> Show Tools Menu';
    };

    sidebar.parentElement.insertBefore(toggleBtn, sidebar);
}

// Audio Context Helper
let globalAudioContext = null;
function getAudioContext() {
    if (!globalAudioContext) {
        globalAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return globalAudioContext;
}

// Tone Generator Helper
function playTone(frequency, duration = 1, type = 'sine') {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
}

// Musical Constants
const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const A4_FREQ = 440;

function frequencyToNote(freq) {
    const semitonesFromA4 = 12 * Math.log2(freq / A4_FREQ);
    const noteIndex = Math.round(semitonesFromA4) + 69;
    const noteName = NOTE_NAMES[noteIndex % 12];
    const octave = Math.floor(noteIndex / 12) - 1;
    const cents = Math.round((semitonesFromA4 - Math.round(semitonesFromA4)) * 100);

    return {
        name: noteName,
        octave: octave,
        fullName: noteName + octave,
        cents: cents,
        deviation: cents > 0 ? `+${cents}` : `${cents}`
    };
}

function noteToFrequency(note, octave) {
    const noteIndex = NOTE_NAMES.indexOf(note);
    if (noteIndex === -1) return null;
    const midiNumber = (octave + 1) * 12 + noteIndex;
    return A4_FREQ * Math.pow(2, (midiNumber - 69) / 12);
}

function autoCorrelate(buffer, sampleRate) {
    let SIZE = buffer.length;
    let sumOfSquares = 0;
    for (let i = 0; i < SIZE; i++) {
        let val = buffer[i];
        sumOfSquares += val * val;
    }
    let rootMeanSquare = Math.sqrt(sumOfSquares / SIZE);
    if (rootMeanSquare < 0.01) return -1;

    let r1 = 0, r2 = SIZE - 1, thres = 0.2;
    for (let i = 0; i < SIZE / 2; i++) {
        if (Math.abs(buffer[i]) < thres) { r1 = i; break; }
    }
    for (let i = 1; i < SIZE / 2; i++) {
        if (Math.abs(buffer[SIZE - i]) < thres) { r2 = SIZE - i; break; }
    }

    buffer = buffer.slice(r1, r2);
    SIZE = buffer.length;

    let c = new Array(SIZE).fill(0);
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE - i; j++) {
            c[i] = c[i] + buffer[j] * buffer[j + i];
        }
    }

    let d = 0;
    while (c[d] > c[d + 1]) d++;
    let maxval = -1, maxpos = -1;
    for (let i = d; i < SIZE; i++) {
        if (c[i] > maxval) {
            maxval = c[i];
            maxpos = i;
        }
    }
    let T0 = maxpos;
    return sampleRate / T0;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function () {
    initSidebarCategories();
    highlightActiveLink();
    initMobileSidebar();
});

// Export globally
window.PitchDetectors = {
    allAudioTools,
    openGlobalSearch,
    closeGlobalSearch,
    filterModalCat,
    searchTools,
    playTone,
    frequencyToNote,
    noteToFrequency,
    autoCorrelate,
    formatTime,
    debounce,
    NOTE_NAMES,
    A4_FREQ,
    getAudioContext
};
window.DiamondAudio = window.PitchDetectors;
window.openGlobalSearch = openGlobalSearch;
window.closeGlobalSearch = closeGlobalSearch;
window.filterModalCat = filterModalCat;
