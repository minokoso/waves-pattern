const PRESET_RESOLUTIONS = {
    hd: { label: "HD", width: 1280, height: 720 },
    fullhd: { label: "Full HD", width: 1920, height: 1080 },
    qhd: { label: "QHD", width: 2560, height: 1440 },
    uhd4k: { label: "4K", width: 3840, height: 2160 }
};

const SHAPE_OPTIONS = [
    { value: "rectangle", label: "Rectangle" },
    { value: "circle", label: "Circle" }
];

const POSITION_OPTIONS = [
    { value: "relative", label: "Relative" },
    { value: "absolute", label: "Absolute" }
];

const DIMENSION_UNIT_OPTIONS = [
    { value: "px", label: "px" },
    { value: "%", label: "%" }
];

const PATTERN_STORAGE_KEY = "wave-pattern-1-patterns";

const DEFAULT_SETTINGS = {
    resolutionPreset: "fullhd",
    renderWidth: 1920,
    renderHeight: 1080,
    backgroundColor: "#000000",
    containerPosition: "relative",
    containerWidthValue: 1920,
    containerWidthUnit: "px",
    containerHeightValue: 1080,
    containerHeightUnit: "px",
    pointSize: 5.5,
    opacityMin: 0.2,
    opacityMax: 1,
    twinkleSpeed: 3,
    particleColor: "#ffffff",
    particleShape: "rectangle",
    cameraFov: 75,
    cameraX: 0,
    cameraY: 20,
    cameraZ: 70,
    lookAtX: 0,
    lookAtY: -10,
    lookAtZ: 0,
    gridWidth: 250,
    gridDepth: 150,
    spacing: 1.2,
    timeStep: 0.012,
    focusDistance: 72,
    focalRange: 12,
    maxBlurScale: 2.2,
    blurFalloff: 35,
    edgeFadeStart: 0.45,
    edgeFadeAmount: 1,
    waveStart: 2,
    waveDuration: 14,
    waveFromX: -50,
    waveToX: 350,
    waveSpread: 55,
    mountainStart: 14,
    mountainRiseDuration: 4,
    mountainHoldDuration: 6,
    mountainFadeDuration: 6,
    noiseFreq1: 0.03,
    noiseFreq2: 0.1,
    noiseFreq3: 0.25,
    noiseSpeed1: 0.3,
    noiseSpeed2: 0.4,
    noiseSpeed3: 0.6,
    terrainHeight: 12,
    spikeDensity: 1,
    spikeAmplitude: 45,
    spikePower: 6
};

const CONTROL_GROUPS = [
    {
        title: "Preview",
        controls: [
            {
                key: "resolutionPreset",
                type: "select",
                label: "Resolution preset",
                options: [
                    { value: "hd", label: "HD - 1280 x 720" },
                    { value: "fullhd", label: "Full HD - 1920 x 1080" },
                    { value: "qhd", label: "QHD - 2560 x 1440" },
                    { value: "uhd4k", label: "4K - 3840 x 2160" },
                    { value: "custom", label: "Custom" }
                ]
            },
            {
                key: "renderWidth",
                type: "number",
                label: "Custom width",
                min: 320,
                max: 7680,
                step: 1,
                unit: "px"
            },
            {
                key: "renderHeight",
                type: "number",
                label: "Custom height",
                min: 240,
                max: 4320,
                step: 1,
                unit: "px"
            },
            {
                key: "containerPosition",
                type: "select",
                label: "Embed position",
                options: POSITION_OPTIONS
            },
            {
                type: "dimension",
                key: "containerWidthValue",
                unitKey: "containerWidthUnit",
                label: "Embed width",
                min: 1,
                max: 10000,
                step: 1
            },
            {
                type: "dimension",
                key: "containerHeightValue",
                unitKey: "containerHeightUnit",
                label: "Embed height",
                min: 1,
                max: 10000,
                step: 1
            },
            {
                key: "backgroundColor",
                type: "color",
                label: "Background color"
            }
        ]
    },
    {
        title: "Particles",
        controls: [
            {
                key: "pointSize",
                type: "range",
                label: "Particle size",
                min: 1,
                max: 20,
                step: 0.1,
                precision: 1,
                unit: "px"
            },
            {
                key: "opacityMin",
                type: "range",
                label: "Opacity minimum",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "opacityMax",
                type: "range",
                label: "Opacity maximum",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "twinkleSpeed",
                type: "range",
                label: "Twinkle speed",
                min: 0,
                max: 8,
                step: 0.1,
                precision: 1
            },
            {
                key: "particleShape",
                type: "select",
                label: "Particle shape",
                options: SHAPE_OPTIONS
            },
            {
                key: "particleColor",
                type: "color",
                label: "Particle tint"
            }
        ]
    },
    {
        title: "Camera",
        controls: [
            {
                key: "cameraFov",
                type: "range",
                label: "Field of view",
                min: 35,
                max: 110,
                step: 1,
                precision: 0,
                unit: "deg"
            },
            {
                key: "cameraX",
                type: "range",
                label: "Camera X",
                min: -80,
                max: 80,
                step: 0.5,
                precision: 1
            },
            {
                key: "cameraY",
                type: "range",
                label: "Camera height",
                min: -10,
                max: 60,
                step: 0.5,
                precision: 1
            },
            {
                key: "cameraDistance",
                type: "range",
                label: "Camera distance",
                min: 1,
                max: 400,
                step: 0.5,
                precision: 1
            },
            {
                key: "lookAtY",
                type: "range",
                label: "Look-at Y",
                min: -90,
                max: 90,
                step: 0.5,
                precision: 1
            }
        ]
    },
    {
        title: "Grid",
        controls: [
            {
                key: "gridWidth",
                type: "range",
                label: "Grid width",
                min: 40,
                max: 1000,
                step: 1,
                precision: 0
            },
            {
                key: "gridDepth",
                type: "range",
                label: "Grid depth",
                min: 40,
                max: 1000,
                step: 1,
                precision: 0
            },
            {
                key: "spacing",
                type: "range",
                label: "Particle spacing",
                min: 0.4,
                max: 2.5,
                step: 0.05,
                precision: 2
            },
            {
                key: "timeStep",
                type: "range",
                label: "Animation speed",
                min: 0.002,
                max: 0.04,
                step: 0.001,
                precision: 3
            }
        ]
    },
    {
        title: "Depth And Fade",
        controls: [
            {
                key: "focusDistance",
                type: "range",
                label: "Focus distance",
                min: 5,
                max: 180,
                step: 0.5,
                precision: 1
            },
            {
                key: "focalRange",
                type: "range",
                label: "Focal range",
                min: 0,
                max: 60,
                step: 0.5,
                precision: 1
            },
            {
                key: "maxBlurScale",
                type: "range",
                label: "Depth blur scale",
                min: 0,
                max: 6,
                step: 0.1,
                precision: 1
            },
            {
                key: "blurFalloff",
                type: "range",
                label: "Blur falloff",
                min: 1,
                max: 80,
                step: 0.5,
                precision: 1
            },
            {
                key: "edgeFadeStart",
                type: "range",
                label: "Edge fade start",
                min: 0,
                max: 0.95,
                step: 0.01,
                precision: 2
            },
            {
                key: "edgeFadeAmount",
                type: "range",
                label: "Edge fade amount",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            }
        ]
    },
    {
        title: "Wave Sweep",
        controls: [
            {
                key: "waveStart",
                type: "range",
                label: "Wave start",
                min: 0,
                max: 20,
                step: 0.1,
                precision: 1,
                unit: "s"
            },
            {
                key: "waveDuration",
                type: "range",
                label: "Wave duration",
                min: 0.5,
                max: 24,
                step: 0.1,
                precision: 1,
                unit: "s"
            },
            {
                key: "waveFromX",
                type: "range",
                label: "Wave start column",
                min: -200,
                max: 320,
                step: 1,
                precision: 0
            },
            {
                key: "waveToX",
                type: "range",
                label: "Wave end column",
                min: -100,
                max: 1000,
                step: 1,
                precision: 0
            },
            {
                key: "waveSpread",
                type: "range",
                label: "Wave spread",
                min: 1,
                max: 120,
                step: 1,
                precision: 0
            }
        ]
    },
    {
        title: "Terrain",
        controls: [
            {
                key: "terrainHeight",
                type: "range",
                label: "Terrain height",
                min: 0,
                max: 40,
                step: 0.5,
                precision: 1
            },
            {
                key: "spikeDensity",
                type: "range",
                label: "Spike amount",
                min: 1,
                max: 1000,
                step: 1,
                precision: 0
            },
            {
                key: "spikeAmplitude",
                type: "range",
                label: "Spike amplitude",
                min: 0,
                max: 140,
                step: 1,
                precision: 0
            },
            {
                key: "spikePower",
                type: "range",
                label: "Spike sharpness",
                min: 1,
                max: 12,
                step: 0.1,
                precision: 1
            },
            {
                key: "noiseFreq1",
                type: "range",
                label: "Coarse detail",
                min: 0.005,
                max: 0.12,
                step: 0.001,
                precision: 3
            },
            {
                key: "noiseFreq2",
                type: "range",
                label: "Medium detail",
                min: 0.02,
                max: 0.25,
                step: 0.001,
                precision: 3
            },
            {
                key: "noiseFreq3",
                type: "range",
                label: "Fine detail",
                min: 0.04,
                max: 0.4,
                step: 0.001,
                precision: 3
            },
            {
                key: "noiseSpeed1",
                type: "range",
                label: "Coarse motion",
                min: 0,
                max: 2,
                step: 0.01,
                precision: 2
            },
            {
                key: "noiseSpeed2",
                type: "range",
                label: "Medium motion",
                min: 0,
                max: 2.5,
                step: 0.01,
                precision: 2
            },
            {
                key: "noiseSpeed3",
                type: "range",
                label: "Fine motion",
                min: 0,
                max: 3,
                step: 0.01,
                precision: 2
            }
        ]
    },
    {
        title: "Mountains",
        controls: [
            {
                key: "mountainStart",
                type: "range",
                label: "Mountain start",
                min: 0,
                max: 24,
                step: 0.1,
                precision: 1,
                unit: "s"
            },
            {
                key: "mountainRiseDuration",
                type: "range",
                label: "Mountain rise",
                min: 0.5,
                max: 12,
                step: 0.1,
                precision: 1,
                unit: "s"
            },
            {
                key: "mountainHoldDuration",
                type: "range",
                label: "Mountain hold",
                min: 0.5,
                max: 16,
                step: 0.1,
                precision: 1,
                unit: "s"
            },
            {
                key: "mountainFadeDuration",
                type: "range",
                label: "Mountain fade",
                min: 0.5,
                max: 16,
                step: 0.1,
                precision: 1,
                unit: "s"
            }
        ]
    }
];

const GEOMETRY_KEYS = new Set([
    "gridWidth",
    "gridDepth",
    "spacing",
    "opacityMin",
    "opacityMax"
]);

const VERTEX_SHADER = [
    "uniform float uTime;",
    "uniform float uPointSize;",
    "uniform float uFocusDistance;",
    "uniform float uFocalRange;",
    "uniform float uMaxBlurScale;",
    "uniform float uBlurFalloff;",
    "uniform float uMaxHalfX;",
    "uniform float uMaxHalfZ;",
    "uniform float uEdgeFadeStart;",
    "uniform float uEdgeFadeAmount;",
    "attribute float aOffset;",
    "attribute float aBaseOpacity;",
    "varying float vOpacity;",
    "varying float vBlur;",
    "varying float vEdgeFade;",
    "void main() {",
    "    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);",
    "    float distToCamera = max(0.0001, -mvPosition.z);",
    "    gl_Position = projectionMatrix * mvPosition;",
    "    float normX = abs(position.x) / max(uMaxHalfX, 0.0001);",
    "    float normZ = abs(position.z) / max(uMaxHalfZ, 0.0001);",
    "    float fadeStart = clamp(uEdgeFadeStart, 0.0, 0.999);",
    "    float fadeX = 1.0 - smoothstep(fadeStart, 1.0, normX);",
    "    float fadeZ = 1.0 - smoothstep(fadeStart, 1.0, normZ);",
    "    float vignette = fadeX * fadeZ;",
    "    vEdgeFade = mix(1.0, vignette, clamp(uEdgeFadeAmount, 0.0, 1.0));",
    "    float distFromFocus = abs(distToCamera - uFocusDistance);",
    "    float blur = clamp((distFromFocus - uFocalRange) / max(uBlurFalloff, 0.0001), 0.0, 1.0);",
    "    vBlur = blur;",
    "    float bokehScale = 1.0 + (blur * uMaxBlurScale);",
    "    gl_PointSize = uPointSize * (30.0 / distToCamera) * bokehScale;",
    "    float blink = sin(uTime * 3.0 + aOffset) * 0.4 + 0.6;",
    "    vOpacity = aBaseOpacity * blink;",
    "}"
].join("\n");

const FRAGMENT_SHADER = [
    "uniform vec3 uColor;",
    "uniform float uShapeMix;",
    "varying float vOpacity;",
    "varying float vBlur;",
    "varying float vEdgeFade;",
    "void main() {",
    "    if (vEdgeFade <= 0.001) discard;",
    "    vec2 pt = gl_PointCoord - vec2(0.5);",
    "    vec2 absPt = abs(pt);",
    "    float edgeSoftness = mix(0.02, 0.45, vBlur);",
    "    float rectX = 1.0 - smoothstep(0.48 - edgeSoftness, 0.48, absPt.x);",
    "    float rectY = 1.0 - smoothstep(0.48 - edgeSoftness, 0.48, absPt.y);",
    "    float rectMask = rectX * rectY;",
    "    float circleMask = 1.0 - smoothstep(0.5 - edgeSoftness, 0.5, length(pt));",
    "    float alphaMask = mix(rectMask, circleMask, clamp(uShapeMix, 0.0, 1.0));",
    "    if (alphaMask <= 0.0) discard;",
    "    float blurFade = mix(1.0, 0.4, vBlur);",
    "    float finalAlpha = alphaMask * vOpacity * blurFade * vEdgeFade;",
    "    gl_FragColor = vec4(uColor, finalAlpha);",
    "}"
].join("\n");

document.addEventListener("DOMContentLoaded", () => {
    if (!window.THREE || !window.SimplexNoise) {
        window.alert("Three.js or SimplexNoise could not load. Check your internet connection and reload.");
        return;
    }

    const elements = {
        patternSelect: document.getElementById("pattern-select"),
        patternNameInput: document.getElementById("pattern-name"),
        newPatternButton: document.getElementById("new-pattern-button"),
        savePatternButton: document.getElementById("save-pattern-button"),
        deletePatternButton: document.getElementById("delete-pattern-button"),
        patternStatus: document.getElementById("pattern-status"),
        controlsRoot: document.getElementById("controls-root"),
        previewFrame: document.getElementById("preview-frame"),
        previewMount: document.getElementById("preview-mount"),
        resolutionLabel: document.getElementById("resolution-label"),
        loopLabel: document.getElementById("loop-label"),
        codeOutput: document.getElementById("code-output"),
        copyButton: document.getElementById("copy-button"),
        resetButton: document.getElementById("reset-button"),
        copyStatus: document.getElementById("copy-status")
    };

    const controlRefs = new Map();
    const savedPatterns = loadSavedPatterns();
    const initialPattern = savedPatterns[0];
    const state = {
        patterns: savedPatterns,
        selectedPatternId: initialPattern.id,
        patternNameDraft: initialPattern.name,
        settings: sanitizeSettings({ ...DEFAULT_SETTINGS, ...initialPattern.settings }),
        isDirty: false
    };

    buildControls(elements.controlsRoot, state.settings, controlRefs, handleSettingChange);

    const preview = new WavePatternPreview(elements.previewMount);
    preview.applySettings(state.settings, { forceGeometry: true });

    syncUI();
    updateCodeOutput();
    syncPatternLibraryUI();

    elements.copyButton.addEventListener("click", async () => {
        const text = elements.codeOutput.value;

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
            } else {
                fallbackCopy(elements.codeOutput);
            }

            setCopyStatus("Embed code copied");
        } catch (error) {
            setCopyStatus("Copy failed. Use Ctrl+C instead.", true);
        }
    });

    elements.resetButton.addEventListener("click", () => {
        state.settings = sanitizeSettings({ ...DEFAULT_SETTINGS });
        applyCurrentStateToView({ forceGeometry: true });
        updateDirtyState();
        refreshPatternStatus();
        setCopyStatus("Defaults restored");
    });

    elements.patternSelect.addEventListener("change", () => {
        loadPattern(elements.patternSelect.value);
    });

    elements.patternNameInput.addEventListener("input", () => {
        state.patternNameDraft = elements.patternNameInput.value;
        updateDirtyState();
        refreshPatternStatus();
    });

    elements.newPatternButton.addEventListener("click", () => {
        state.selectedPatternId = null;
        state.patternNameDraft = generatePatternDraftName(state.patterns);
        state.isDirty = true;
        syncPatternLibraryUI();
        refreshPatternStatus();
    });

    elements.savePatternButton.addEventListener("click", () => {
        const name = sanitizePatternName(state.patternNameDraft);
        const selectedPattern = getSelectedPattern();

        if (selectedPattern) {
            selectedPattern.name = name;
            selectedPattern.settings = sanitizeSettings({ ...state.settings });
        } else {
            const newPattern = createPatternRecord(name, state.settings);
            state.patterns = [newPattern, ...state.patterns];
            state.selectedPatternId = newPattern.id;
        }

        state.patternNameDraft = name;
        state.isDirty = false;
        syncPatternLibraryUI();

        if (persistPatterns(state.patterns)) {
            setPatternStatus(`Saved "${name}"`);
        } else {
            setPatternStatus("Save failed on this device", true);
        }
    });

    elements.deletePatternButton.addEventListener("click", () => {
        const selectedPattern = getSelectedPattern();

        if (!selectedPattern) {
            state.patternNameDraft = generatePatternDraftName(state.patterns);
            state.isDirty = true;
            syncPatternLibraryUI();
            refreshPatternStatus();
            return;
        }

        const removedName = selectedPattern.name;
        state.patterns = state.patterns.filter((pattern) => pattern.id !== selectedPattern.id);

        if (state.patterns.length === 0) {
            state.patterns = [createPatternRecord("Default", DEFAULT_SETTINGS)];
        }

        const nextPattern = state.patterns[0];
        state.selectedPatternId = nextPattern.id;
        state.patternNameDraft = nextPattern.name;
        state.settings = sanitizeSettings({ ...DEFAULT_SETTINGS, ...nextPattern.settings });
        state.isDirty = false;

        applyCurrentStateToView({ forceGeometry: true });
        syncPatternLibraryUI();

        if (persistPatterns(state.patterns)) {
            setPatternStatus(`Deleted "${removedName}"`);
        } else {
            setPatternStatus("Delete failed on this device", true);
        }
    });

    window.addEventListener("beforeunload", () => {
        preview.destroy();
    });

    function handleSettingChange(key, rawValue) {
        const previous = state.settings;
        const next = { ...previous };

        if (key === "cameraDistance") {
            Object.assign(next, setCameraDistance(previous, rawValue));
        } else {
            next[key] = rawValue;
        }

        if (key === "resolutionPreset" && rawValue !== "custom") {
            const preset = PRESET_RESOLUTIONS[rawValue];
            next.renderWidth = preset.width;
            next.renderHeight = preset.height;
        }

        if (key === "renderWidth" || key === "renderHeight") {
            next.resolutionPreset = findMatchingPreset(
                key === "renderWidth" ? rawValue : next.renderWidth,
                key === "renderHeight" ? rawValue : next.renderHeight
            );
        }

        if (
            (key === "resolutionPreset" || key === "renderWidth") &&
            previous.containerWidthUnit === "px" &&
            Math.round(previous.containerWidthValue) === Math.round(previous.renderWidth)
        ) {
            next.containerWidthValue = next.renderWidth;
        }

        if (
            (key === "resolutionPreset" || key === "renderHeight") &&
            previous.containerHeightUnit === "px" &&
            Math.round(previous.containerHeightValue) === Math.round(previous.renderHeight)
        ) {
            next.containerHeightValue = next.renderHeight;
        }

        if (key === "containerWidthUnit") {
            if (
                rawValue === "%" &&
                previous.containerWidthUnit === "px" &&
                Math.round(previous.containerWidthValue) === Math.round(previous.renderWidth)
            ) {
                next.containerWidthValue = 100;
            }

            if (
                rawValue === "px" &&
                previous.containerWidthUnit === "%" &&
                Math.round(previous.containerWidthValue) === 100
            ) {
                next.containerWidthValue = previous.renderWidth;
            }
        }

        if (key === "containerHeightUnit") {
            if (
                rawValue === "%" &&
                previous.containerHeightUnit === "px" &&
                Math.round(previous.containerHeightValue) === Math.round(previous.renderHeight)
            ) {
                next.containerHeightValue = 100;
            }

            if (
                rawValue === "px" &&
                previous.containerHeightUnit === "%" &&
                Math.round(previous.containerHeightValue) === 100
            ) {
                next.containerHeightValue = previous.renderHeight;
            }
        }

        state.settings = sanitizeSettings(next);
        applyCurrentStateToView();
        updateDirtyState();
        refreshPatternStatus();
    }

    function syncUI() {
        const { renderWidth, renderHeight } = state.settings;
        elements.previewFrame.style.aspectRatio = `${renderWidth} / ${renderHeight}`;
        elements.resolutionLabel.textContent = `${renderWidth} x ${renderHeight}`;
        elements.loopLabel.textContent = `${formatNumber(getLoopDuration(state.settings), 1)}s loop`;
    }

    function updateCodeOutput() {
        elements.codeOutput.value = generateEmbedCode(state.settings);
    }

    function applyCurrentStateToView(options = {}) {
        syncControls(controlRefs, state.settings);
        preview.applySettings(state.settings, options);
        syncUI();
        updateCodeOutput();
    }

    function getSelectedPattern() {
        return state.patterns.find((pattern) => pattern.id === state.selectedPatternId) || null;
    }

    function loadPattern(patternId) {
        const pattern = state.patterns.find((entry) => entry.id === patternId);

        if (!pattern) {
            return;
        }

        state.selectedPatternId = pattern.id;
        state.patternNameDraft = pattern.name;
        state.settings = sanitizeSettings({ ...DEFAULT_SETTINGS, ...pattern.settings });
        state.isDirty = false;
        applyCurrentStateToView({ forceGeometry: true });
        syncPatternLibraryUI();
        setPatternStatus(`Loaded "${pattern.name}"`);
    }

    function updateDirtyState() {
        const selectedPattern = getSelectedPattern();

        if (!selectedPattern) {
            state.isDirty = true;
            return;
        }

        const storedSettings = sanitizeSettings({
            ...DEFAULT_SETTINGS,
            ...selectedPattern.settings
        });

        state.isDirty =
            JSON.stringify(state.settings) !== JSON.stringify(storedSettings) ||
            state.patternNameDraft.trim() !== selectedPattern.name;
    }

    function syncPatternLibraryUI() {
        elements.patternSelect.innerHTML = "";

        if (!state.selectedPatternId) {
            const draftOption = document.createElement("option");
            draftOption.value = "";
            draftOption.textContent = "Unsaved pattern";
            elements.patternSelect.appendChild(draftOption);
        }

        for (const pattern of state.patterns) {
            const option = document.createElement("option");
            option.value = pattern.id;
            option.textContent = pattern.name;
            elements.patternSelect.appendChild(option);
        }

        elements.patternSelect.value = state.selectedPatternId || "";
        elements.patternNameInput.value = state.patternNameDraft;
        elements.deletePatternButton.disabled = !state.selectedPatternId;
        refreshPatternStatus();
    }

    function refreshPatternStatus() {
        if (state.isDirty) {
            if (state.selectedPatternId) {
                elements.patternStatus.textContent = "Unsaved changes in current pattern";
            } else {
                elements.patternStatus.textContent = "Ready to save as a new pattern";
            }
            elements.patternStatus.style.color = "#ffcf91";
            return;
        }

        elements.patternStatus.textContent = "Patterns are saved on this device";
        elements.patternStatus.style.color = "";
    }

    function setPatternStatus(message, isError = false) {
        elements.patternStatus.textContent = message;
        elements.patternStatus.style.color = isError ? "#ff9b9b" : "";

        window.clearTimeout(setPatternStatus.timeoutId);
        setPatternStatus.timeoutId = window.setTimeout(() => {
            refreshPatternStatus();
        }, 2400);
    }

    function setCopyStatus(message, isError = false) {
        elements.copyStatus.textContent = message;
        elements.copyStatus.style.color = isError ? "#ff9b9b" : "";

        window.clearTimeout(setCopyStatus.timeoutId);
        setCopyStatus.timeoutId = window.setTimeout(() => {
            elements.copyStatus.textContent = "Ready to copy";
            elements.copyStatus.style.color = "";
        }, 2400);
    }
});

class WavePatternPreview {
    constructor(mount) {
        this.mount = mount;
        this.simplex = new SimplexNoise();
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
        this.cameraTarget = new THREE.Vector3();
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.domElement.style.width = "100%";
        this.renderer.domElement.style.height = "100%";
        this.renderer.domElement.style.display = "block";
        this.mount.appendChild(this.renderer.domElement);

        this.material = this.createMaterial();
        this.settings = { ...DEFAULT_SETTINGS };
        this.time = 0;
        this.twinkleTime = 0;
        this.lastFrameTime = 0;
        this.animationFrameId = 0;

        this.animate = this.animate.bind(this);
        this.animate();
    }

    createMaterial() {
        return new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uPointSize: { value: DEFAULT_SETTINGS.pointSize },
                uColor: { value: new THREE.Color(DEFAULT_SETTINGS.particleColor) },
                uShapeMix: { value: 0 },
                uFocusDistance: { value: DEFAULT_SETTINGS.focusDistance },
                uFocalRange: { value: DEFAULT_SETTINGS.focalRange },
                uMaxBlurScale: { value: DEFAULT_SETTINGS.maxBlurScale },
                uBlurFalloff: { value: DEFAULT_SETTINGS.blurFalloff },
                uMaxHalfX: { value: getMaxHalfX(DEFAULT_SETTINGS) },
                uMaxHalfZ: { value: getMaxHalfZ(DEFAULT_SETTINGS) },
                uEdgeFadeStart: { value: DEFAULT_SETTINGS.edgeFadeStart },
                uEdgeFadeAmount: { value: DEFAULT_SETTINGS.edgeFadeAmount }
            },
            vertexShader: VERTEX_SHADER,
            fragmentShader: FRAGMENT_SHADER,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
    }

    applySettings(nextSettings, options = {}) {
        const previous = this.settings;
        const geometryChanged =
            options.forceGeometry ||
            Array.from(GEOMETRY_KEYS).some((key) => previous[key] !== nextSettings[key]);

        this.settings = { ...nextSettings };

        if (geometryChanged || !this.particles) {
            this.rebuildGeometry();
        }

        this.applyCamera();
        this.applyRenderer();
        this.applyMaterial();
        this.updateLandscapeFrame();
    }

    rebuildGeometry() {
        if (this.particles) {
            this.scene.remove(this.particles);
            this.geometry.dispose();
        }

        const particleCount = this.settings.gridWidth * this.settings.gridDepth;
        const positions = new Float32Array(particleCount * 3);
        const randomOffsets = new Float32Array(particleCount);
        const baseOpacities = new Float32Array(particleCount);

        let index = 0;

        for (let x = 0; x < this.settings.gridWidth; x += 1) {
            for (let z = 0; z < this.settings.gridDepth; z += 1) {
                positions[index * 3] = (x - this.settings.gridWidth / 2) * this.settings.spacing;
                positions[index * 3 + 1] = 0;
                positions[index * 3 + 2] = (z - this.settings.gridDepth / 2) * this.settings.spacing;
                randomOffsets[index] = Math.random() * 100;
                baseOpacities[index] = randomBetween(
                    this.settings.opacityMin,
                    this.settings.opacityMax
                );
                index += 1;
            }
        }

        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        this.geometry.setAttribute("aOffset", new THREE.BufferAttribute(randomOffsets, 1));
        this.geometry.setAttribute("aBaseOpacity", new THREE.BufferAttribute(baseOpacities, 1));

        this.particles = new THREE.Points(this.geometry, this.material);
        this.scene.add(this.particles);
    }

    applyCamera() {
        this.camera.fov = this.settings.cameraFov;
        this.camera.position.set(
            this.settings.cameraX,
            this.settings.cameraY,
            this.settings.cameraZ
        );
        this.cameraTarget.set(
            this.settings.lookAtX,
            this.settings.lookAtY,
            this.settings.lookAtZ
        );
        this.camera.lookAt(this.cameraTarget);
        this.camera.updateProjectionMatrix();
    }

    applyRenderer() {
        this.camera.aspect = this.settings.renderWidth / this.settings.renderHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setClearColor(this.settings.backgroundColor, 1);
        this.renderer.setPixelRatio(1);
        this.renderer.setSize(this.settings.renderWidth, this.settings.renderHeight, false);
        this.mount.style.backgroundColor = this.settings.backgroundColor;
    }

    applyMaterial() {
        this.material.uniforms.uPointSize.value =
            this.settings.pointSize * Math.min(window.devicePixelRatio || 1, 2);
        this.material.uniforms.uColor.value.set(this.settings.particleColor);
        this.material.uniforms.uShapeMix.value =
            this.settings.particleShape === "circle" ? 1 : 0;
        this.material.uniforms.uFocusDistance.value = this.settings.focusDistance;
        this.material.uniforms.uFocalRange.value = this.settings.focalRange;
        this.material.uniforms.uMaxBlurScale.value = this.settings.maxBlurScale;
        this.material.uniforms.uBlurFalloff.value = this.settings.blurFalloff;
        this.material.uniforms.uMaxHalfX.value = getMaxHalfX(this.settings);
        this.material.uniforms.uMaxHalfZ.value = getMaxHalfZ(this.settings);
        this.material.uniforms.uEdgeFadeStart.value = this.settings.edgeFadeStart;
        this.material.uniforms.uEdgeFadeAmount.value = this.settings.edgeFadeAmount;
    }

    animate() {
        this.animationFrameId = window.requestAnimationFrame(this.animate);

        if (!this.particles) {
            return;
        }

        const now = performance.now();
        const deltaSeconds = this.lastFrameTime
            ? Math.min(0.1, (now - this.lastFrameTime) / 1000)
            : 1 / 60;
        this.lastFrameTime = now;

        this.time += this.settings.timeStep;
        this.twinkleTime += deltaSeconds * this.settings.twinkleSpeed;
        this.material.uniforms.uTime.value = this.twinkleTime;
        this.updateLandscapeFrame();
        this.renderer.render(this.scene, this.camera);
    }

    updateLandscapeFrame() {
        if (!this.particles) {
            return;
        }

        const posAttr = this.particles.geometry.attributes.position;
        const posArray = posAttr.array;
        const cycleTime = this.time % getLoopDuration(this.settings);
        const landscapeState = getLandscapeState(this.settings, cycleTime);
        const spikeLayout = getSpikeLayout(this.settings);

        let index = 0;

        for (let x = 0; x < this.settings.gridWidth; x += 1) {
            for (let z = 0; z < this.settings.gridDepth; z += 1) {
                posArray[index * 3 + 1] = computeLandscapeHeight(
                    this.settings,
                    x,
                    z,
                    this.time,
                    landscapeState,
                    this.simplex,
                    spikeLayout
                );
                index += 1;
            }
        }

        posAttr.needsUpdate = true;
    }

    destroy() {
        window.cancelAnimationFrame(this.animationFrameId);

        if (this.particles) {
            this.scene.remove(this.particles);
            this.geometry.dispose();
        }

        this.material.dispose();
        this.renderer.dispose();
    }
}

function buildControls(root, settings, controlRefs, onChange) {
    root.innerHTML = "";

    for (const group of CONTROL_GROUPS) {
        const groupElement = document.createElement("section");
        groupElement.className = "control-group";

        const heading = document.createElement("h3");
        heading.textContent = group.title;
        groupElement.appendChild(heading);

        for (const control of group.controls) {
            const controlElement = document.createElement("div");
            controlElement.className = "control";

            const header = document.createElement("div");
            header.className = "control-header";

            const label = document.createElement("label");
            label.className = "control-label";
            label.textContent = control.label;
            header.appendChild(label);

            const value = document.createElement("span");
            value.className = "control-value";
            header.appendChild(value);

            controlElement.appendChild(header);

            if (control.type === "range") {
                const row = document.createElement("div");
                row.className = "range-row";

                const rangeInput = document.createElement("input");
                rangeInput.type = "range";
                rangeInput.min = String(control.min);
                rangeInput.max = String(control.max);
                rangeInput.step = String(control.step);
                rangeInput.value = String(getControlValue(control, settings));

                const numberInput = document.createElement("input");
                numberInput.type = "number";
                numberInput.min = String(control.min);
                numberInput.max = String(control.max);
                numberInput.step = String(control.step);
                numberInput.value = String(getControlValue(control, settings));

                const commitValue = (rawValue) => {
                    onChange(control.key, Number(rawValue));
                };

                rangeInput.addEventListener("input", () => {
                    numberInput.value = rangeInput.value;
                    commitValue(rangeInput.value);
                });

                numberInput.addEventListener("input", () => {
                    rangeInput.value = numberInput.value;
                    commitValue(numberInput.value);
                });

                row.appendChild(rangeInput);
                row.appendChild(numberInput);
                controlElement.appendChild(row);

                controlRefs.set(control.key, {
                    control,
                    value,
                    rangeInput,
                    numberInput
                });
            } else if (control.type === "dimension") {
                const row = document.createElement("div");
                row.className = "range-row";

                const numberInput = document.createElement("input");
                numberInput.type = "number";
                numberInput.min = String(control.min);
                numberInput.max = String(control.max);
                numberInput.step = String(control.step);
                numberInput.value = String(settings[control.key]);

                const unitSelect = document.createElement("select");

                for (const option of DIMENSION_UNIT_OPTIONS) {
                    const optionElement = document.createElement("option");
                    optionElement.value = option.value;
                    optionElement.textContent = option.label;
                    unitSelect.appendChild(optionElement);
                }

                unitSelect.value = settings[control.unitKey];

                numberInput.addEventListener("input", () => {
                    onChange(control.key, Number(numberInput.value));
                });

                unitSelect.addEventListener("change", () => {
                    onChange(control.unitKey, unitSelect.value);
                });

                row.appendChild(numberInput);
                row.appendChild(unitSelect);
                controlElement.appendChild(row);

                controlRefs.set(control.key, {
                    control,
                    value,
                    numberInput,
                    unitSelect
                });
            } else if (control.type === "number") {
                const numberInput = document.createElement("input");
                numberInput.type = "number";
                numberInput.min = String(control.min);
                numberInput.max = String(control.max);
                numberInput.step = String(control.step);
                numberInput.value = String(settings[control.key]);
                numberInput.addEventListener("input", () => {
                    onChange(control.key, Number(numberInput.value));
                });

                controlElement.appendChild(numberInput);

                controlRefs.set(control.key, {
                    control,
                    value,
                    numberInput
                });
            } else if (control.type === "select") {
                const select = document.createElement("select");

                for (const option of control.options) {
                    const optionElement = document.createElement("option");
                    optionElement.value = option.value;
                    optionElement.textContent = option.label;
                    select.appendChild(optionElement);
                }

                select.value = settings[control.key];
                select.addEventListener("change", () => {
                    onChange(control.key, select.value);
                });

                controlElement.appendChild(select);

                controlRefs.set(control.key, {
                    control,
                    value,
                    select
                });
            } else if (control.type === "color") {
                const colorInput = document.createElement("input");
                colorInput.type = "color";
                colorInput.value = settings[control.key];
                colorInput.addEventListener("input", () => {
                    onChange(control.key, colorInput.value);
                });

                controlElement.appendChild(colorInput);

                controlRefs.set(control.key, {
                    control,
                    value,
                    colorInput
                });
            }

            groupElement.appendChild(controlElement);
        }

        root.appendChild(groupElement);
    }

    syncControls(controlRefs, settings);
}

function syncControls(controlRefs, settings) {
    for (const [key, refs] of controlRefs.entries()) {
        const control = refs.control;
        const currentValue = getControlValue(control, settings);

        if (refs.rangeInput) {
            refs.rangeInput.value = String(currentValue);
        }

        if (refs.numberInput) {
            refs.numberInput.value = String(currentValue);
        }

        if (refs.select) {
            refs.select.value = String(currentValue);
        }

        if (refs.unitSelect) {
            refs.unitSelect.value = String(settings[refs.control.unitKey]);
        }

        if (refs.colorInput) {
            refs.colorInput.value = String(currentValue);
        }

        refs.value.textContent = formatControlValue(control, currentValue, settings);
    }
}

function sanitizeSettings(input) {
    const settings = { ...input };

    settings.resolutionPreset =
        settings.resolutionPreset in PRESET_RESOLUTIONS || settings.resolutionPreset === "custom"
            ? settings.resolutionPreset
            : "custom";

    settings.renderWidth = clampInt(settings.renderWidth, 320, 7680);
    settings.renderHeight = clampInt(settings.renderHeight, 240, 4320);
    settings.containerPosition = POSITION_OPTIONS.some(
        (option) => option.value === settings.containerPosition
    )
        ? settings.containerPosition
        : "relative";
    settings.containerWidthValue = clampInt(settings.containerWidthValue, 1, 10000);
    settings.containerHeightValue = clampInt(settings.containerHeightValue, 1, 10000);
    settings.containerWidthUnit =
        settings.containerWidthUnit === "%" || settings.containerWidthUnit === "px"
            ? settings.containerWidthUnit
            : "px";
    settings.containerHeightUnit =
        settings.containerHeightUnit === "%" || settings.containerHeightUnit === "px"
            ? settings.containerHeightUnit
            : "px";
    settings.backgroundColor = normalizeHexColor(settings.backgroundColor);

    settings.pointSize = clamp(settings.pointSize, 1, 20);
    settings.opacityMin = clamp(settings.opacityMin, 0, 1);
    settings.opacityMax = clamp(settings.opacityMax, settings.opacityMin, 1);
    settings.twinkleSpeed = clamp(settings.twinkleSpeed, 0, 8);
    settings.particleColor = normalizeHexColor(settings.particleColor);
    settings.particleShape =
        SHAPE_OPTIONS.some((option) => option.value === settings.particleShape)
            ? settings.particleShape
            : "rectangle";

    settings.cameraFov = clamp(settings.cameraFov, 35, 110);
    settings.cameraX = clamp(settings.cameraX, -80, 80);
    settings.cameraY = clamp(settings.cameraY, -10, 60);
    settings.cameraZ = clamp(settings.cameraZ, -20, 220);
    settings.lookAtX = clamp(settings.lookAtX, -60, 60);
    settings.lookAtY = clamp(settings.lookAtY, -90, 90);
    settings.lookAtZ = clamp(settings.lookAtZ, -60, 60);

    settings.gridWidth = clampInt(settings.gridWidth, 40, 1000);
    settings.gridDepth = clampInt(settings.gridDepth, 40, 1000);
    settings.spacing = clamp(settings.spacing, 0.4, 2.5);
    settings.timeStep = clamp(settings.timeStep, 0.002, 0.04);

    settings.focusDistance = clamp(settings.focusDistance, 5, 180);
    settings.focalRange = clamp(settings.focalRange, 0, 60);
    settings.maxBlurScale = clamp(settings.maxBlurScale, 0, 6);
    settings.blurFalloff = clamp(settings.blurFalloff, 1, 80);
    settings.edgeFadeStart = clamp(settings.edgeFadeStart, 0, 0.95);
    settings.edgeFadeAmount = clamp(settings.edgeFadeAmount, 0, 1);

    settings.waveStart = clamp(settings.waveStart, 0, 20);
    settings.waveDuration = clamp(settings.waveDuration, 0.5, 24);
    settings.waveFromX = clamp(settings.waveFromX, -200, 320);
    settings.waveToX = clamp(settings.waveToX, -100, 1000);
    settings.waveSpread = clamp(settings.waveSpread, 1, 120);

    settings.mountainStart = clamp(settings.mountainStart, 0, 24);
    settings.mountainRiseDuration = clamp(settings.mountainRiseDuration, 0.5, 12);
    settings.mountainHoldDuration = clamp(settings.mountainHoldDuration, 0.5, 16);
    settings.mountainFadeDuration = clamp(settings.mountainFadeDuration, 0.5, 16);

    settings.noiseFreq1 = clamp(settings.noiseFreq1, 0.005, 0.12);
    settings.noiseFreq2 = clamp(settings.noiseFreq2, 0.02, 0.25);
    settings.noiseFreq3 = clamp(settings.noiseFreq3, 0.04, 0.4);
    settings.noiseSpeed1 = clamp(settings.noiseSpeed1, 0, 2);
    settings.noiseSpeed2 = clamp(settings.noiseSpeed2, 0, 2.5);
    settings.noiseSpeed3 = clamp(settings.noiseSpeed3, 0, 3);
    settings.terrainHeight = clamp(settings.terrainHeight, 0, 40);
    settings.spikeDensity = clampInt(settings.spikeDensity, 1, 1000);
    settings.spikeAmplitude = clamp(settings.spikeAmplitude, 0, 140);
    settings.spikePower = clamp(settings.spikePower, 1, 12);

    return settings;
}

function getControlValue(control, settings) {
    if (control.key === "cameraDistance") {
        return getCameraDistance(settings);
    }

    return settings[control.key];
}

function getCameraDistance(settings) {
    const offsetX = settings.cameraX - settings.lookAtX;
    const offsetZ = settings.cameraZ - settings.lookAtZ;
    return Math.hypot(offsetX, offsetZ);
}

function setCameraDistance(settings, rawDistance) {
    const distance = clamp(rawDistance, 1, 400);
    let offsetX = settings.cameraX - settings.lookAtX;
    let offsetZ = settings.cameraZ - settings.lookAtZ;
    let offsetLength = Math.hypot(offsetX, offsetZ);

    if (offsetLength < 0.0001) {
        offsetX = DEFAULT_SETTINGS.cameraX - DEFAULT_SETTINGS.lookAtX;
        offsetZ = DEFAULT_SETTINGS.cameraZ - DEFAULT_SETTINGS.lookAtZ;
        offsetLength = Math.hypot(offsetX, offsetZ) || 1;
    }

    const scale = distance / offsetLength;

    return {
        cameraX: settings.lookAtX + offsetX * scale,
        cameraY: settings.cameraY,
        cameraZ: settings.lookAtZ + offsetZ * scale
    };
}

function generateEmbedCode(settings) {
    const color = normalizeHexColor(settings.particleColor);
    const backgroundColor = normalizeHexColor(settings.backgroundColor);
    const containerStyle = getEmbedContainerStyle(settings);

    return [
        "<!-- ============================================================ -->",
        "<!-- WEBFLOW EMBED: WAVE PATTERN 1 LANDSCAPE                      -->",
        "<!-- Paste inside a Webflow Embed element.                       -->",
        "<!-- Parent container should be set to Position: Relative.       -->",
        "<!-- ============================================================ -->",
        "",
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>',
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"></script>',
        "",
        `<div id="particle-landscape-container" style="${containerStyle}"></div>`,
        "",
        "<script>",
        "(function () {",
        "    const config = {",
        `        gridWidth: ${formatNumber(settings.gridWidth)},`,
        `        gridDepth: ${formatNumber(settings.gridDepth)},`,
        `        spacing: ${formatNumber(settings.spacing, 2)},`,
        `        pointSize: ${formatNumber(settings.pointSize, 1)},`,
        `        opacityMin: ${formatNumber(settings.opacityMin, 2)},`,
        `        opacityMax: ${formatNumber(settings.opacityMax, 2)},`,
        `        twinkleSpeed: ${formatNumber(settings.twinkleSpeed, 1)},`,
        `        particleShape: ${JSON.stringify(settings.particleShape)},`,
        `        particleColor: ${JSON.stringify(color)},`,
        `        backgroundColor: ${JSON.stringify(backgroundColor)},`,
        `        cameraFov: ${formatNumber(settings.cameraFov)},`,
        `        cameraX: ${formatNumber(settings.cameraX, 1)},`,
        `        cameraY: ${formatNumber(settings.cameraY, 1)},`,
        `        cameraZ: ${formatNumber(settings.cameraZ, 1)},`,
        `        lookAtX: ${formatNumber(settings.lookAtX, 1)},`,
        `        lookAtY: ${formatNumber(settings.lookAtY, 1)},`,
        `        lookAtZ: ${formatNumber(settings.lookAtZ, 1)},`,
        `        timeStep: ${formatNumber(settings.timeStep, 3)},`,
        `        focusDistance: ${formatNumber(settings.focusDistance, 1)},`,
        `        focalRange: ${formatNumber(settings.focalRange, 1)},`,
        `        maxBlurScale: ${formatNumber(settings.maxBlurScale, 1)},`,
        `        blurFalloff: ${formatNumber(settings.blurFalloff, 1)},`,
        `        edgeFadeStart: ${formatNumber(settings.edgeFadeStart, 2)},`,
        `        edgeFadeAmount: ${formatNumber(settings.edgeFadeAmount, 2)},`,
        `        waveStart: ${formatNumber(settings.waveStart, 1)},`,
        `        waveDuration: ${formatNumber(settings.waveDuration, 1)},`,
        `        waveFromX: ${formatNumber(settings.waveFromX)},`,
        `        waveToX: ${formatNumber(settings.waveToX)},`,
        `        waveSpread: ${formatNumber(settings.waveSpread)},`,
        `        mountainStart: ${formatNumber(settings.mountainStart, 1)},`,
        `        mountainRiseDuration: ${formatNumber(settings.mountainRiseDuration, 1)},`,
        `        mountainHoldDuration: ${formatNumber(settings.mountainHoldDuration, 1)},`,
        `        mountainFadeDuration: ${formatNumber(settings.mountainFadeDuration, 1)},`,
        `        noiseFreq1: ${formatNumber(settings.noiseFreq1, 3)},`,
        `        noiseFreq2: ${formatNumber(settings.noiseFreq2, 3)},`,
        `        noiseFreq3: ${formatNumber(settings.noiseFreq3, 3)},`,
        `        noiseSpeed1: ${formatNumber(settings.noiseSpeed1, 2)},`,
        `        noiseSpeed2: ${formatNumber(settings.noiseSpeed2, 2)},`,
        `        noiseSpeed3: ${formatNumber(settings.noiseSpeed3, 2)},`,
        `        terrainHeight: ${formatNumber(settings.terrainHeight, 1)},`,
        `        spikeDensity: ${formatNumber(settings.spikeDensity, 1)},`,
        `        spikeAmplitude: ${formatNumber(settings.spikeAmplitude, 1)},`,
        `        spikePower: ${formatNumber(settings.spikePower, 1)}`,
        "    };",
        "",
        "    const simplex = new SimplexNoise();",
        "    const container = document.getElementById('particle-landscape-container');",
        "    if (!container) return;",
        "",
        "    let width = container.clientWidth || window.innerWidth;",
        "    let height = container.clientHeight || window.innerHeight;",
        "",
        "    const scene = new THREE.Scene();",
        "    const camera = new THREE.PerspectiveCamera(config.cameraFov, width / height, 0.1, 1000);",
        "    camera.position.set(config.cameraX, config.cameraY, config.cameraZ);",
        "    camera.lookAt(config.lookAtX, config.lookAtY, config.lookAtZ);",
        "",
        "    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });",
        "    renderer.setClearColor(config.backgroundColor, 1);",
        "    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));",
        "    renderer.setSize(width, height, false);",
        "    renderer.domElement.style.width = '100%';",
        "    renderer.domElement.style.height = '100%';",
        "    renderer.domElement.style.display = 'block';",
        "    container.appendChild(renderer.domElement);",
        "",
        "    const geometry = new THREE.BufferGeometry();",
        "    const particleCount = config.gridWidth * config.gridDepth;",
        "    const positions = new Float32Array(particleCount * 3);",
        "    const randomOffsets = new Float32Array(particleCount);",
        "    const baseOpacities = new Float32Array(particleCount);",
        "    const maxHalfX = (config.gridWidth * config.spacing) / 2;",
        "    const maxHalfZ = (config.gridDepth * config.spacing) / 2;",
        "",
        "    let index = 0;",
        "    for (let x = 0; x < config.gridWidth; x += 1) {",
        "        for (let z = 0; z < config.gridDepth; z += 1) {",
        "            positions[index * 3] = (x - config.gridWidth / 2) * config.spacing;",
        "            positions[index * 3 + 1] = 0;",
        "            positions[index * 3 + 2] = (z - config.gridDepth / 2) * config.spacing;",
        "            randomOffsets[index] = Math.random() * 100;",
        "            baseOpacities[index] = config.opacityMin + Math.random() * (config.opacityMax - config.opacityMin);",
        "            index += 1;",
        "        }",
        "    }",
        "",
        "    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));",
        "    geometry.setAttribute('aOffset', new THREE.BufferAttribute(randomOffsets, 1));",
        "    geometry.setAttribute('aBaseOpacity', new THREE.BufferAttribute(baseOpacities, 1));",
        "",
        "    const material = new THREE.ShaderMaterial({",
        "        uniforms: {",
        "            uTime: { value: 0 },",
        "            uPointSize: { value: config.pointSize * Math.min(window.devicePixelRatio || 1, 2) },",
        "            uColor: { value: new THREE.Color(config.particleColor) },",
        "            uShapeMix: { value: config.particleShape === 'circle' ? 1 : 0 },",
        "            uFocusDistance: { value: config.focusDistance },",
        "            uFocalRange: { value: config.focalRange },",
        "            uMaxBlurScale: { value: config.maxBlurScale },",
        "            uBlurFalloff: { value: config.blurFalloff },",
        "            uMaxHalfX: { value: maxHalfX },",
        "            uMaxHalfZ: { value: maxHalfZ },",
        "            uEdgeFadeStart: { value: config.edgeFadeStart },",
        "            uEdgeFadeAmount: { value: config.edgeFadeAmount }",
        "        },",
        `        vertexShader: ${JSON.stringify(VERTEX_SHADER)},`,
        `        fragmentShader: ${JSON.stringify(FRAGMENT_SHADER)},`,
        "        transparent: true,",
        "        depthWrite: false,",
        "        blending: THREE.AdditiveBlending",
        "    });",
        "",
        "    const particles = new THREE.Points(geometry, material);",
        "    scene.add(particles);",
        "",
        "    const spikeAspect = Math.max(0.0001, config.gridWidth / Math.max(config.gridDepth, 1));",
        "    const spikeColumns = Math.max(1, Math.round(Math.sqrt(config.spikeDensity * spikeAspect)));",
        "    const spikeRows = Math.max(1, Math.round(config.spikeDensity / spikeColumns));",
        "",
        "    function easeInOut(t) {",
        "        return t * t * (3 - 2 * t);",
        "    }",
        "",
        "    function getLoopDuration() {",
        "        return Math.max(",
        "            1,",
        "            config.waveStart + config.waveDuration,",
        "            config.mountainStart + config.mountainRiseDuration + config.mountainHoldDuration + config.mountainFadeDuration",
        "        );",
        "    }",
        "",
        "    function getLandscapeState(cycleTime) {",
        "        const waveEnd = config.waveStart + config.waveDuration;",
        "        const mountainRiseEnd = config.mountainStart + config.mountainRiseDuration;",
        "        const mountainHoldEnd = mountainRiseEnd + config.mountainHoldDuration;",
        "        const mountainFadeEnd = mountainHoldEnd + config.mountainFadeDuration;",
        "",
        "        let waveCenter = config.waveFromX - config.waveSpread - 1;",
        "        let rawMountainIntensity = 0;",
        "",
        "        if (cycleTime >= config.waveStart && cycleTime <= waveEnd) {",
        "            const progress = (cycleTime - config.waveStart) / Math.max(config.waveDuration, 0.0001);",
        "            waveCenter = config.waveFromX + (config.waveToX - config.waveFromX) * progress;",
        "        }",
        "",
        "        if (cycleTime > config.mountainStart && cycleTime <= mountainRiseEnd) {",
        "            rawMountainIntensity = (cycleTime - config.mountainStart) / Math.max(config.mountainRiseDuration, 0.0001);",
        "        } else if (cycleTime > mountainRiseEnd && cycleTime <= mountainHoldEnd) {",
        "            rawMountainIntensity = 1;",
        "        } else if (cycleTime > mountainHoldEnd && cycleTime < mountainFadeEnd) {",
        "            rawMountainIntensity = 1 - ((cycleTime - mountainHoldEnd) / Math.max(config.mountainFadeDuration, 0.0001));",
        "        }",
        "",
        "        return {",
        "            waveCenter,",
        "            mountainIntensity: easeInOut(Math.max(0, Math.min(1, rawMountainIntensity)))",
        "        };",
        "    }",
        "",
        "    function computeLandscapeHeight(x, z, time, state) {",
        "        let waveEnvelope = 0;",
        "        const distToWave = Math.abs(x - state.waveCenter);",
        "",
        "        if (distToWave < config.waveSpread) {",
        "            waveEnvelope = (Math.cos((distToWave * Math.PI) / config.waveSpread) + 1) * 0.5;",
        "        }",
        "",
        "        const totalEnvelope = Math.max(waveEnvelope, state.mountainIntensity);",
        "",
        "        if (totalEnvelope <= 0.001) {",
        "            return 0;",
        "        }",
        "",
        "        const n1 = simplex.noise3D(x * config.noiseFreq1, z * config.noiseFreq1, time * config.noiseSpeed1) * 0.5;",
        "        const n2 = simplex.noise3D(x * config.noiseFreq2, z * config.noiseFreq2, time * config.noiseSpeed2) * 0.3;",
        "        const n3 = simplex.noise3D(x * config.noiseFreq3, z * config.noiseFreq3, time * config.noiseSpeed3) * 0.2;",
        "",
        "        let noise = n1 + n2 + n3;",
        "        noise = (noise * 0.5) + 0.5;",
        "",
        "        const normX = config.gridWidth > 1 ? x / (config.gridWidth - 1) : 0.5;",
        "        const normZ = config.gridDepth > 1 ? z / (config.gridDepth - 1) : 0.5;",
        "        const warpX = simplex.noise3D(normX * 3.1, normZ * 3.1, 17.13) * 0.08;",
        "        const warpZ = simplex.noise3D(normX * 3.1, normZ * 3.1, 41.27) * 0.08;",
        "        const sampleX = Math.max(0, Math.min(1, normX + warpX));",
        "        const sampleZ = Math.max(0, Math.min(1, normZ + warpZ));",
        "        const spikeWaveX = Math.sin(Math.PI * spikeColumns * sampleX);",
        "        const spikeWaveZ = Math.sin(Math.PI * spikeRows * sampleZ);",
        "        const spikePattern = (spikeWaveX * spikeWaveX) * (spikeWaveZ * spikeWaveZ);",
        "        const spikeVariationRaw = simplex.noise3D(",
        "            x * config.noiseFreq3 + 13.1,",
        "            z * config.noiseFreq3 + 7.9,",
        "            2.7",
        "        );",
        "        const spikeVariation = (spikeVariationRaw * 0.35) + 0.65;",
        "        const spikeField = spikePattern * spikeVariation;",
        "",
        "        const baseHeight = noise * config.terrainHeight;",
        "        const spikes = Math.pow(Math.max(spikeField, 0), config.spikePower) * config.spikeAmplitude;",
        "",
        "        return (baseHeight + spikes) * totalEnvelope;",
        "    }",
        "",
        "    let time = 0;",
        "    let twinkleTime = 0;",
        "    let lastFrameTime = 0;",
        "",
        "    function animate(frameTime) {",
        "        requestAnimationFrame(animate);",
        "        const deltaSeconds = lastFrameTime ? Math.min(0.1, (frameTime - lastFrameTime) / 1000) : (1 / 60);",
        "        lastFrameTime = frameTime;",
        "        time += config.timeStep;",
        "        twinkleTime += deltaSeconds * config.twinkleSpeed;",
        "        material.uniforms.uTime.value = twinkleTime;",
        "",
        "        const posAttr = particles.geometry.attributes.position;",
        "        const posArray = posAttr.array;",
        "        const cycleTime = time % getLoopDuration();",
        "        const landscapeState = getLandscapeState(cycleTime);",
        "",
        "        let particleIndex = 0;",
        "        for (let x = 0; x < config.gridWidth; x += 1) {",
        "            for (let z = 0; z < config.gridDepth; z += 1) {",
        "                posArray[particleIndex * 3 + 1] = computeLandscapeHeight(x, z, time, landscapeState);",
        "                particleIndex += 1;",
        "            }",
        "        }",
        "",
        "        posAttr.needsUpdate = true;",
        "        renderer.render(scene, camera);",
        "    }",
        "",
        "    requestAnimationFrame(animate);",
        "",
        "    function resizeRenderer() {",
        "        width = Math.max(1, container.clientWidth || window.innerWidth || 1);",
        "        height = Math.max(1, container.clientHeight || window.innerHeight || 1);",
        "        camera.aspect = width / height;",
        "        camera.updateProjectionMatrix();",
        "        renderer.setSize(width, height, false);",
        "    }",
        "",
        "    if (typeof ResizeObserver !== 'undefined') {",
        "        const resizeObserver = new ResizeObserver(resizeRenderer);",
        "        resizeObserver.observe(container);",
        "    }",
        "",
        "    window.addEventListener('resize', resizeRenderer);",
        "    requestAnimationFrame(resizeRenderer);",
        "    setTimeout(resizeRenderer, 120);",
        "    setTimeout(resizeRenderer, 600);",
        "})();",
        "</script>"
    ].join("\n");
}

function loadSavedPatterns() {
    try {
        const raw = window.localStorage.getItem(PATTERN_STORAGE_KEY);

        if (!raw) {
            return [createPatternRecord("Default", DEFAULT_SETTINGS)];
        }

        const parsed = JSON.parse(raw);

        if (!Array.isArray(parsed)) {
            return [createPatternRecord("Default", DEFAULT_SETTINGS)];
        }

        const patterns = parsed
            .map((pattern, index) => sanitizePatternRecord(pattern, index))
            .filter(Boolean);

        return patterns.length ? patterns : [createPatternRecord("Default", DEFAULT_SETTINGS)];
    } catch (error) {
        return [createPatternRecord("Default", DEFAULT_SETTINGS)];
    }
}

function persistPatterns(patterns) {
    try {
        window.localStorage.setItem(PATTERN_STORAGE_KEY, JSON.stringify(patterns));
        return true;
    } catch (error) {
        return false;
    }
}

function sanitizePatternRecord(pattern, index) {
    if (!pattern || typeof pattern !== "object") {
        return null;
    }

    return {
        id:
            typeof pattern.id === "string" && pattern.id.trim()
                ? pattern.id
                : createPatternId(index),
        name: sanitizePatternName(pattern.name),
        settings: sanitizeSettings({
            ...DEFAULT_SETTINGS,
            ...(pattern.settings && typeof pattern.settings === "object" ? pattern.settings : {})
        })
    };
}

function createPatternRecord(name, settings) {
    return {
        id: createPatternId(),
        name: sanitizePatternName(name),
        settings: sanitizeSettings({ ...DEFAULT_SETTINGS, ...settings })
    };
}

function createPatternId(seed = "") {
    return `pattern-${Date.now()}-${Math.random().toString(36).slice(2, 8)}${seed}`;
}

function sanitizePatternName(name) {
    const trimmed = String(name || "").trim();
    return trimmed || "Untitled Pattern";
}

function generatePatternDraftName(patterns) {
    const existingNames = new Set(patterns.map((pattern) => pattern.name));
    let index = 1;

    while (existingNames.has(`Pattern ${index}`)) {
        index += 1;
    }

    return `Pattern ${index}`;
}

function fallbackCopy(textarea) {
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
}

function findMatchingPreset(width, height) {
    for (const [key, preset] of Object.entries(PRESET_RESOLUTIONS)) {
        if (preset.width === width && preset.height === height) {
            return key;
        }
    }

    return "custom";
}

function getEmbedDimensionValue(value, unit) {
    return `${Math.max(1, Math.round(value))}${unit}`;
}

function getEmbedContainerStyle(settings) {
    const widthValue = getEmbedDimensionValue(
        settings.containerWidthValue,
        settings.containerWidthUnit
    );
    const heightValue = getEmbedDimensionValue(
        settings.containerHeightValue,
        settings.containerHeightUnit
    );

    return [
        `width: ${widthValue}`,
        `height: ${heightValue}`,
        `position: ${settings.containerPosition}`,
        "top: 0",
        "left: 0",
        "overflow: hidden",
        `background-color: ${normalizeHexColor(settings.backgroundColor)}`,
        "z-index: 0",
        "pointer-events: none",
        "display: block"
    ].join("; ") + ";";
}

function getLoopDuration(settings) {
    return Math.max(
        1,
        settings.waveStart + settings.waveDuration,
        settings.mountainStart +
            settings.mountainRiseDuration +
            settings.mountainHoldDuration +
            settings.mountainFadeDuration
    );
}

function getLandscapeState(settings, cycleTime) {
    const waveEnd = settings.waveStart + settings.waveDuration;
    const mountainRiseEnd = settings.mountainStart + settings.mountainRiseDuration;
    const mountainHoldEnd = mountainRiseEnd + settings.mountainHoldDuration;
    const mountainFadeEnd = mountainHoldEnd + settings.mountainFadeDuration;

    let waveCenter = settings.waveFromX - settings.waveSpread - 1;
    let rawMountainIntensity = 0;

    if (cycleTime >= settings.waveStart && cycleTime <= waveEnd) {
        const progress =
            (cycleTime - settings.waveStart) / Math.max(settings.waveDuration, 0.0001);
        waveCenter = lerp(settings.waveFromX, settings.waveToX, progress);
    }

    if (cycleTime > settings.mountainStart && cycleTime <= mountainRiseEnd) {
        rawMountainIntensity =
            (cycleTime - settings.mountainStart) /
            Math.max(settings.mountainRiseDuration, 0.0001);
    } else if (cycleTime > mountainRiseEnd && cycleTime <= mountainHoldEnd) {
        rawMountainIntensity = 1;
    } else if (cycleTime > mountainHoldEnd && cycleTime < mountainFadeEnd) {
        rawMountainIntensity =
            1 -
            (cycleTime - mountainHoldEnd) /
                Math.max(settings.mountainFadeDuration, 0.0001);
    }

    return {
        waveCenter,
        mountainIntensity: easeInOut(clamp(rawMountainIntensity, 0, 1))
    };
}

function getSpikeLayout(settings) {
    const safeDepth = Math.max(1, settings.gridDepth);
    const aspect = Math.max(0.0001, settings.gridWidth / safeDepth);
    const spikeColumns = Math.max(1, Math.round(Math.sqrt(settings.spikeDensity * aspect)));
    const spikeRows = Math.max(1, Math.round(settings.spikeDensity / spikeColumns));

    return {
        spikeColumns,
        spikeRows
    };
}

function computeLandscapeHeight(settings, x, z, time, landscapeState, simplex, spikeLayout) {
    let waveEnvelope = 0;
    const distToWave = Math.abs(x - landscapeState.waveCenter);

    if (distToWave < settings.waveSpread) {
        waveEnvelope = (Math.cos((distToWave * Math.PI) / settings.waveSpread) + 1) * 0.5;
    }

    const totalEnvelope = Math.max(waveEnvelope, landscapeState.mountainIntensity);

    if (totalEnvelope <= 0.001) {
        return 0;
    }

    const n1 =
        simplex.noise3D(
            x * settings.noiseFreq1,
            z * settings.noiseFreq1,
            time * settings.noiseSpeed1
        ) * 0.5;
    const n2 =
        simplex.noise3D(
            x * settings.noiseFreq2,
            z * settings.noiseFreq2,
            time * settings.noiseSpeed2
        ) * 0.3;
    const n3 =
        simplex.noise3D(
            x * settings.noiseFreq3,
            z * settings.noiseFreq3,
            time * settings.noiseSpeed3
        ) * 0.2;

    let noise = n1 + n2 + n3;
    noise = noise * 0.5 + 0.5;

    const normX = settings.gridWidth > 1 ? x / (settings.gridWidth - 1) : 0.5;
    const normZ = settings.gridDepth > 1 ? z / (settings.gridDepth - 1) : 0.5;
    const warpX = simplex.noise3D(normX * 3.1, normZ * 3.1, 17.13) * 0.08;
    const warpZ = simplex.noise3D(normX * 3.1, normZ * 3.1, 41.27) * 0.08;
    const sampleX = clamp(normX + warpX, 0, 1);
    const sampleZ = clamp(normZ + warpZ, 0, 1);
    const spikeWaveX = Math.sin(Math.PI * spikeLayout.spikeColumns * sampleX);
    const spikeWaveZ = Math.sin(Math.PI * spikeLayout.spikeRows * sampleZ);
    const spikePattern = spikeWaveX * spikeWaveX * spikeWaveZ * spikeWaveZ;
    const spikeVariationRaw = simplex.noise3D(
        x * settings.noiseFreq3 + 13.1,
        z * settings.noiseFreq3 + 7.9,
        2.7
    );
    const spikeVariation = spikeVariationRaw * 0.35 + 0.65;
    const spikeField = spikePattern * spikeVariation;

    const baseHeight = noise * settings.terrainHeight;
    const spikes =
        Math.pow(Math.max(spikeField, 0), settings.spikePower) * settings.spikeAmplitude;

    return (baseHeight + spikes) * totalEnvelope;
}

function getMaxHalfX(settings) {
    return (settings.gridWidth * settings.spacing) / 2;
}

function getMaxHalfZ(settings) {
    return (settings.gridDepth * settings.spacing) / 2;
}

function formatControlValue(control, value, settings) {
    if (control.type === "color") {
        return String(value).toUpperCase();
    }

    if (control.type === "select") {
        const selected = control.options.find((option) => option.value === value);
        return selected ? selected.label : String(value);
    }

    if (control.type === "dimension") {
        return getEmbedDimensionValue(
            value,
            settings[control.unitKey]
        );
    }

    const precision = typeof control.precision === "number" ? control.precision : 0;
    const unit = control.unit ? ` ${control.unit}` : "";
    return `${formatNumber(value, precision)}${unit}`;
}

function formatNumber(value, precision = 0) {
    const numeric = Number(value);

    if (precision <= 0) {
        return String(Math.round(numeric));
    }

    return numeric
        .toFixed(precision)
        .replace(/(\.\d*?[1-9])0+$/, "$1")
        .replace(/\.0+$/, "")
        .replace(/\.$/, "");
}

function normalizeHexColor(value) {
    const match = String(value || "").trim().match(/^#([0-9a-fA-F]{6})$/);
    return match ? `#${match[1].toLowerCase()}` : "#ffffff";
}

function randomBetween(min, max) {
    return min + Math.random() * (max - min);
}

function easeInOut(t) {
    return t * t * (3 - 2 * t);
}

function lerp(start, end, t) {
    return start + (end - start) * t;
}

function clamp(value, min, max) {
    const numeric = Number.isFinite(Number(value)) ? Number(value) : min;
    return Math.min(max, Math.max(min, numeric));
}

function clampInt(value, min, max) {
    return Math.round(clamp(value, min, max));
}
