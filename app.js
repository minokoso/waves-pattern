const PRESET_RESOLUTIONS = {
    hd: { label: "HD", width: 1280, height: 720 },
    fullhd: { label: "Full HD", width: 1920, height: 1080 },
    qhd: { label: "QHD", width: 2560, height: 1440 },
    uhd4k: { label: "4K", width: 3840, height: 2160 }
};

const HERO_ANIMATION = "heroInteraction";
const FOOTER_ANIMATION = "footerInteraction";

const ANIMATION_OPTIONS = [
    { value: HERO_ANIMATION, label: "Hero interaction" },
    { value: FOOTER_ANIMATION, label: "Footer interaction" }
];

const SHAPE_OPTIONS = [
    { value: "rectangle", label: "Rectangle" },
    { value: "circle", label: "Circle" }
];

const PULSE_VARIANT_OPTIONS = [
    { value: "fill", label: "Fill" },
    { value: "none", label: "No pulse" },
    { value: "border", label: "Border pulse" }
];

const TOGGLE_OPTIONS = [
    { value: "off", label: "Off" },
    { value: "on", label: "On" }
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

const FOOTER_DEFAULT_SETTINGS = {
    resolutionPreset: "custom",
    renderWidth: 3840,
    renderHeight: 2160,
    backgroundColor: "#000000",
    containerPosition: "relative",
    containerWidthValue: 100,
    containerWidthUnit: "%",
    containerHeightValue: 100,
    containerHeightUnit: "%",
    particleColor: "#ffffff",
    pulseColor: "#ffffff",
    particleShape: "rectangle",
    twinkleSpeed: 0.6,
    minimumSpacing: 2,
    spacingDivider: 209,
    minimumParticleSize: 0.32,
    maximumParticleSize: 1.01,
    minimumAlpha: 0,
    maximumAlpha: 0.2,
    pointerRadiusRatio: 0.15,
    minimumPointerRadius: 90,
    repulsionStrength: 1.45,
    springStrength: 0.011,
    friction: 0.88,
    jitterAmount: 0.03,
    logoPaddingPercent: 10,
    pulseVariant: "fill",
    pulseBorderThickness: 6,
    maskEnabled: "off",
    maskSizePercent: 36,
    baseVisibility: 0.35,
    maskSoftness: 0.5,
    maskFadeSpeed: 0.11,
    pulseRevealWidth: 130,
    pulseRevealStrength: 0.85,
    pulseRevealTrail: 0.2,
    logoSizePercent: 100,
    pulseDuration: 1270,
    pulseRepeatDelay: 5000,
    pulseWidth: 70,
    pulseBrightness: 0.72,
    pulseSizeBoost: 1.25,
    pulseTrailStrength: 1
};

const LOGO_WIDTH = 1274;
const LOGO_HEIGHT = 847;
const LOGO_PATH_DATA = `
      M411.951 0
      C416.69 3.25502e-07 421.412 0.0751651 426.115 0.225586
      V0.00195312
      H838.065
      C1078.34 0.00216697 1273.11 194.779 1273.11 435.049
      C1273.11 662.563 1088.68 847 861.162 847
      C856.423 847 851.701 846.924 846.998 846.773
      V846.998
      H435.048
      C194.778 846.998 0 652.221 0 411.951
      C0.000189675 184.437 184.437 0.000181523 411.951 0
      Z

      M723.125 131.015
      C799.764 209.443 846.998 316.729 846.998 435.048
      V715.661
      C851.692 715.876 856.415 715.986 861.162 715.986
      C1016.32 715.986 1142.1 590.206 1142.1 435.049
      C1142.1 267.136 1005.98 131.015 838.065 131.015
      H723.125
      Z

      M411.951 131.014
      C256.794 131.014 131.014 256.794 131.014 411.951
      C131.014 579.864 267.135 715.985 435.048 715.985
      H549.987
      C473.348 637.557 426.115 530.271 426.115 411.952
      V131.339
      C421.421 131.124 416.699 131.014 411.951 131.014
      Z

      M557.128 411.952
      C557.128 527.288 621.351 627.624 715.985 679.15
      V435.048
      C715.985 319.711 651.763 219.375 557.128 167.849
      V411.952
      Z
`;

// Hardcode deployment presets here so they ship with static hosts like Vercel.
const BUILT_IN_PATTERNS = [
    {
        id: "builtin-1",
        name: "1",
        settings: {
            resolutionPreset: "fullhd",
            renderWidth: 1920,
            renderHeight: 1080,
            backgroundColor: "#000000",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            pointSize: 3.3,
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
            gridWidth: 398,
            gridDepth: 224,
            spacing: 0.75,
            timeStep: 0.04,
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
            spikeDensity: 700,
            spikeAmplitude: 45,
            spikePower: 6
        }
    },
    {
        id: "builtin-2",
        name: "2",
        settings: {
            resolutionPreset: "fullhd",
            renderWidth: 1920,
            renderHeight: 1080,
            backgroundColor: "#000000",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            pointSize: 4,
            opacityMin: 0.2,
            opacityMax: 1,
            twinkleSpeed: 1.9,
            particleColor: "#ffffff",
            particleShape: "rectangle",
            cameraFov: 103,
            cameraX: 0,
            cameraY: 60,
            cameraZ: 25,
            lookAtX: 0,
            lookAtY: -90,
            lookAtZ: 0,
            gridWidth: 398,
            gridDepth: 224,
            spacing: 0.75,
            timeStep: 0.015,
            focusDistance: 72,
            focalRange: 12,
            maxBlurScale: 2.2,
            blurFalloff: 35,
            edgeFadeStart: 0.45,
            edgeFadeAmount: 1,
            waveStart: 2,
            waveDuration: 14,
            waveFromX: -50,
            waveToX: 450,
            waveSpread: 45,
            mountainStart: 14,
            mountainRiseDuration: 4,
            mountainHoldDuration: 6,
            mountainFadeDuration: 6,
            noiseFreq1: 0.065,
            noiseFreq2: 0.165,
            noiseFreq3: 0.325,
            noiseSpeed1: 1.5,
            noiseSpeed2: 1.74,
            noiseSpeed3: 1.65,
            terrainHeight: 11,
            spikeDensity: 218,
            spikeAmplitude: 91,
            spikePower: 5
        }
    },
    {
        id: "builtin-3",
        name: "3",
        settings: {
            resolutionPreset: "fullhd",
            renderWidth: 1920,
            renderHeight: 1080,
            backgroundColor: "#000000",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            pointSize: 4,
            opacityMin: 0.2,
            opacityMax: 1,
            twinkleSpeed: 5.4,
            particleColor: "#ffffff",
            particleShape: "rectangle",
            cameraFov: 103,
            cameraX: 0,
            cameraY: 60,
            cameraZ: 25,
            lookAtX: 0,
            lookAtY: -90,
            lookAtZ: 0,
            gridWidth: 458,
            gridDepth: 234,
            spacing: 0.75,
            timeStep: 0.026,
            focusDistance: 72,
            focalRange: 12,
            maxBlurScale: 2.2,
            blurFalloff: 35,
            edgeFadeStart: 0.45,
            edgeFadeAmount: 1,
            waveStart: 2,
            waveDuration: 14,
            waveFromX: -50,
            waveToX: 721,
            waveSpread: 67,
            mountainStart: 14,
            mountainRiseDuration: 4,
            mountainHoldDuration: 6,
            mountainFadeDuration: 6,
            noiseFreq1: 0.065,
            noiseFreq2: 0.165,
            noiseFreq3: 0.325,
            noiseSpeed1: 1.71,
            noiseSpeed2: 0.4,
            noiseSpeed3: 0.6,
            terrainHeight: 10.5,
            spikeDensity: 534,
            spikeAmplitude: 133,
            spikePower: 5
        }
    },
    {
        id: "builtin-4",
        name: "4",
        settings: {
            resolutionPreset: "fullhd",
            renderWidth: 1920,
            renderHeight: 1080,
            backgroundColor: "#000000",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            pointSize: 4,
            opacityMin: 0.2,
            opacityMax: 1,
            twinkleSpeed: 0.8,
            particleColor: "#ffffff",
            particleShape: "rectangle",
            cameraFov: 105,
            cameraX: 0,
            cameraY: 60,
            cameraZ: 25,
            lookAtX: 0,
            lookAtY: -90,
            lookAtZ: 0,
            gridWidth: 378,
            gridDepth: 179,
            spacing: 1,
            timeStep: 0.026,
            focusDistance: 72,
            focalRange: 12,
            maxBlurScale: 2.2,
            blurFalloff: 35,
            edgeFadeStart: 0.45,
            edgeFadeAmount: 1,
            waveStart: 2,
            waveDuration: 14,
            waveFromX: -50,
            waveToX: 498,
            waveSpread: 44,
            mountainStart: 14,
            mountainRiseDuration: 4,
            mountainHoldDuration: 6,
            mountainFadeDuration: 6,
            noiseFreq1: 0.065,
            noiseFreq2: 0.165,
            noiseFreq3: 0.325,
            noiseSpeed1: 1.17,
            noiseSpeed2: 0.4,
            noiseSpeed3: 0.6,
            terrainHeight: 11,
            spikeDensity: 488,
            spikeAmplitude: 140,
            spikePower: 5
        }
    },
    {
        id: "builtin-footer-1",
        name: "1",
        animationType: FOOTER_ANIMATION,
        settings: {
            resolutionPreset: "custom",
            renderWidth: 3840,
            renderHeight: 2160,
            backgroundColor: "#000000",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#ffffff",
            pulseColor: "#ffffff",
            particleShape: "rectangle",
            twinkleSpeed: 0.6,
            minimumSpacing: 2,
            spacingDivider: 209,
            minimumParticleSize: 0.32,
            maximumParticleSize: 1.01,
            minimumAlpha: 0.31,
            maximumAlpha: 0.36,
            pointerRadiusRatio: 0.15,
            minimumPointerRadius: 90,
            repulsionStrength: 1.45,
            springStrength: 0.011,
            friction: 0.88,
            jitterAmount: 0.03,
            logoPaddingPercent: 10,
            pulseVariant: "fill",
            pulseBorderThickness: 6,
            maskEnabled: "off",
            maskSizePercent: 36,
            baseVisibility: 0.35,
            maskSoftness: 0.5,
            maskFadeSpeed: 0.11,
            pulseRevealWidth: 130,
            pulseRevealStrength: 0.85,
            pulseRevealTrail: 0.2,
            logoSizePercent: 100,
            pulseDuration: 1270,
            pulseRepeatDelay: 5000,
            pulseWidth: 70,
            pulseBrightness: 0.72,
            pulseSizeBoost: 1.25,
            pulseTrailStrength: 1
        }
    },
    {
        id: "builtin-footer-2",
        name: "2",
        animationType: FOOTER_ANIMATION,
        settings: {
            resolutionPreset: "custom",
            renderWidth: 3840,
            renderHeight: 2160,
            backgroundColor: "#000000",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#ffffff",
            pulseColor: "#ffffff",
            particleShape: "rectangle",
            twinkleSpeed: 0.6,
            minimumSpacing: 2,
            spacingDivider: 260,
            minimumParticleSize: 0.41,
            maximumParticleSize: 0.5,
            minimumAlpha: 0.35,
            maximumAlpha: 0.35,
            pointerRadiusRatio: 0.15,
            minimumPointerRadius: 90,
            repulsionStrength: 1.45,
            springStrength: 0.011,
            friction: 0.88,
            jitterAmount: 0.03,
            logoPaddingPercent: 10,
            pulseVariant: "fill",
            pulseBorderThickness: 6,
            maskEnabled: "on",
            maskSizePercent: 30,
            baseVisibility: 0.2,
            maskSoftness: 0.5,
            maskFadeSpeed: 0.11,
            pulseRevealWidth: 130,
            pulseRevealStrength: 0.85,
            pulseRevealTrail: 0.2,
            logoSizePercent: 100,
            pulseDuration: 1270,
            pulseRepeatDelay: 5000,
            pulseWidth: 70,
            pulseBrightness: 0.72,
            pulseSizeBoost: 1.25,
            pulseTrailStrength: 1
        }
    },
    {
        id: "builtin-footer-3",
        name: "3",
        animationType: FOOTER_ANIMATION,
        settings: {
            resolutionPreset: "custom",
            renderWidth: 3840,
            renderHeight: 2160,
            backgroundColor: "#000000",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#ffffff",
            pulseColor: "#ffffff",
            particleShape: "rectangle",
            twinkleSpeed: 0.6,
            minimumSpacing: 2,
            spacingDivider: 260,
            minimumParticleSize: 0.22,
            maximumParticleSize: 0.5,
            minimumAlpha: 0.35,
            maximumAlpha: 0.35,
            pointerRadiusRatio: 0.15,
            minimumPointerRadius: 90,
            repulsionStrength: 1.04,
            springStrength: 0.011,
            friction: 0.85,
            jitterAmount: 0.03,
            logoPaddingPercent: 10,
            pulseVariant: "border",
            pulseBorderThickness: 9.4,
            maskEnabled: "on",
            maskSizePercent: 30,
            baseVisibility: 0.35,
            maskSoftness: 0.5,
            maskFadeSpeed: 0.11,
            pulseRevealWidth: 130,
            pulseRevealStrength: 0.85,
            pulseRevealTrail: 0.2,
            logoSizePercent: 100,
            pulseDuration: 1270,
            pulseRepeatDelay: 5000,
            pulseWidth: 300,
            pulseBrightness: 1.34,
            pulseSizeBoost: 1.25,
            pulseTrailStrength: 1
        }
    },
    {
        id: "builtin-footer-4",
        name: "4",
        animationType: FOOTER_ANIMATION,
        settings: {
            resolutionPreset: "custom",
            renderWidth: 3840,
            renderHeight: 2160,
            backgroundColor: "#000000",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#ffffff",
            pulseColor: "#ffffff",
            particleShape: "rectangle",
            twinkleSpeed: 0.6,
            minimumSpacing: 2,
            spacingDivider: 260,
            minimumParticleSize: 0.15,
            maximumParticleSize: 0.25,
            minimumAlpha: 1,
            maximumAlpha: 1,
            pointerRadiusRatio: 0.23,
            minimumPointerRadius: 90,
            repulsionStrength: 1.04,
            springStrength: 0.072,
            friction: 0.94,
            jitterAmount: 0.03,
            logoPaddingPercent: 10,
            pulseVariant: "fill",
            pulseBorderThickness: 0.5,
            maskEnabled: "on",
            maskSizePercent: 40,
            baseVisibility: 0.35,
            maskSoftness: 0.5,
            maskFadeSpeed: 0.11,
            pulseRevealWidth: 130,
            pulseRevealStrength: 0.85,
            pulseRevealTrail: 0.2,
            logoSizePercent: 100,
            pulseDuration: 990,
            pulseRepeatDelay: 5000,
            pulseWidth: 300,
            pulseBrightness: 2,
            pulseSizeBoost: 0.5,
            pulseTrailStrength: 1
        }
    }
];

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
            },
            {
                key: "logoSizePercent",
                type: "range",
                label: "Logo size",
                min: 40,
                max: 140,
                step: 1,
                precision: 0,
                unit: "%"
            },
            {
                key: "logoPaddingPercent",
                type: "range",
                label: "Logo padding",
                min: 0,
                max: 30,
                step: 0.5,
                precision: 1,
                unit: "%"
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

const FOOTER_CONTROL_GROUPS = [
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
            },
            {
                key: "logoSizePercent",
                type: "range",
                label: "Logo size",
                min: 40,
                max: 140,
                step: 1,
                precision: 0,
                unit: "%"
            }
        ]
    },
    {
        title: "Particles",
        controls: [
            {
                key: "minimumSpacing",
                type: "range",
                label: "Minimum spacing",
                min: 2,
                max: 24,
                step: 1,
                precision: 0,
                unit: "px"
            },
            {
                key: "spacingDivider",
                type: "range",
                label: "Density divider",
                min: 20,
                max: 260,
                step: 1,
                precision: 0
            },
            {
                key: "minimumParticleSize",
                type: "range",
                label: "Min particle size",
                min: 0.05,
                max: 2.5,
                step: 0.01,
                precision: 2
            },
            {
                key: "maximumParticleSize",
                type: "range",
                label: "Max particle size",
                min: 0.05,
                max: 4,
                step: 0.01,
                precision: 2
            },
            {
                key: "minimumAlpha",
                type: "range",
                label: "Min opacity",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "maximumAlpha",
                type: "range",
                label: "Max opacity",
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
                max: 6,
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
                label: "Particle color"
            },
            {
                key: "maskEnabled",
                type: "select",
                label: "Mask",
                options: TOGGLE_OPTIONS
            },
            {
                key: "maskSizePercent",
                type: "range",
                label: "Mask size",
                min: 8,
                max: 80,
                step: 1,
                precision: 0,
                unit: "%"
            },
            {
                key: "baseVisibility",
                type: "range",
                label: "Base visibility",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            }
        ]
    },
    {
        title: "Pointer",
        controls: [
            {
                key: "pointerRadiusRatio",
                type: "range",
                label: "Radius ratio",
                min: 0.02,
                max: 0.5,
                step: 0.01,
                precision: 2
            },
            {
                key: "minimumPointerRadius",
                type: "range",
                label: "Min radius",
                min: 10,
                max: 500,
                step: 1,
                precision: 0,
                unit: "px"
            },
            {
                key: "repulsionStrength",
                type: "range",
                label: "Repulsion",
                min: 0,
                max: 8,
                step: 0.01,
                precision: 2
            },
            {
                key: "springStrength",
                type: "range",
                label: "Spring",
                min: 0.001,
                max: 0.2,
                step: 0.001,
                precision: 3
            },
            {
                key: "friction",
                type: "range",
                label: "Friction",
                min: 0.6,
                max: 0.99,
                step: 0.01,
                precision: 2
            },
            {
                key: "jitterAmount",
                type: "range",
                label: "Jitter",
                min: 0,
                max: 0.6,
                step: 0.01,
                precision: 2
            }
        ]
    },
    {
        title: "Pulse",
        controls: [
            {
                key: "pulseVariant",
                type: "select",
                label: "Pulse variant",
                options: PULSE_VARIANT_OPTIONS
            },
            {
                key: "pulseColor",
                type: "color",
                label: "Pulse color"
            },
            {
                key: "pulseDuration",
                type: "range",
                label: "Pulse duration",
                min: 100,
                max: 4000,
                step: 10,
                precision: 0,
                unit: "ms"
            },
            {
                key: "pulseRepeatDelay",
                type: "range",
                label: "Pulse repeat",
                min: 100,
                max: 5000,
                step: 10,
                precision: 0,
                unit: "ms"
            },
            {
                key: "pulseWidth",
                type: "range",
                label: "Pulse width",
                min: 10,
                max: 300,
                step: 1,
                precision: 0,
                unit: "px"
            },
            {
                key: "pulseBorderThickness",
                type: "range",
                label: "Border thickness",
                min: 0.5,
                max: 24,
                step: 0.1,
                precision: 1,
                unit: "px"
            },
            {
                key: "pulseBrightness",
                type: "range",
                label: "Pulse brightness",
                min: 0,
                max: 2,
                step: 0.01,
                precision: 2
            },
            {
                key: "pulseSizeBoost",
                type: "range",
                label: "Pulse size boost",
                min: 0,
                max: 4,
                step: 0.01,
                precision: 2
            },
            {
                key: "pulseTrailStrength",
                type: "range",
                label: "Pulse trail",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            }
        ]
    }
];

const FOOTER_GEOMETRY_KEYS = new Set([
    "minimumSpacing",
    "spacingDivider",
    "minimumParticleSize",
    "maximumParticleSize",
    "minimumAlpha",
    "maximumAlpha",
    "jitterAmount",
    "logoPaddingPercent",
    "logoSizePercent",
    "pulseBorderThickness"
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
        animationSelect: document.getElementById("animation-select"),
        patternSelect: document.getElementById("pattern-select"),
        patternNameInput: document.getElementById("pattern-name"),
        newPatternButton: document.getElementById("new-pattern-button"),
        savePatternButton: document.getElementById("save-pattern-button"),
        copyPatternSourceButton: document.getElementById("copy-pattern-source-button"),
        deletePatternButton: document.getElementById("delete-pattern-button"),
        builtinPatternsRoot: document.getElementById("builtin-patterns"),
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
    const availablePatterns = loadSavedPatterns();
    const initialAnimationType = HERO_ANIMATION;
    const initialPattern = getFirstPatternForAnimation(availablePatterns, initialAnimationType);
    const state = {
        patterns: availablePatterns,
        animationType: initialAnimationType,
        selectedPatternId: initialPattern ? initialPattern.id : null,
        patternNameDraft: initialPattern
            ? initialPattern.name
            : generatePatternDraftName(availablePatterns, initialAnimationType),
        settings: initialPattern
            ? sanitizeSettings(
                  { ...getDefaultSettings(initialAnimationType), ...initialPattern.settings },
                  initialAnimationType
              )
            : sanitizeSettings(getDefaultSettings(initialAnimationType), initialAnimationType),
        isDirty: false
    };

    let preview = null;

    populateAnimationOptions();
    rebuildControls();
    recreatePreview();
    applyCurrentStateToView({ forceGeometry: true });
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
        state.settings = sanitizeSettings(
            { ...getDefaultSettings(state.animationType) },
            state.animationType
        );
        applyCurrentStateToView({ forceGeometry: true });
        updateDirtyState();
        refreshPatternStatus();
        setCopyStatus("Defaults restored");
    });

    elements.animationSelect.addEventListener("change", () => {
        switchAnimation(elements.animationSelect.value);
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
        state.patternNameDraft = generatePatternDraftName(state.patterns, state.animationType);
        state.isDirty = true;
        syncPatternLibraryUI();
        refreshPatternStatus();
    });

    elements.savePatternButton.addEventListener("click", () => {
        const name = sanitizePatternName(state.patternNameDraft);
        const selectedPattern = getSelectedPattern();

        if (selectedPattern && selectedPattern.source !== "builtin") {
            selectedPattern.name = name;
            selectedPattern.animationType = state.animationType;
            selectedPattern.settings = sanitizeSettings({ ...state.settings }, state.animationType);
        } else {
            const newPattern = createPatternRecord(name, state.settings, state.animationType);
            state.patterns = [newPattern, ...state.patterns];
            state.selectedPatternId = newPattern.id;
        }

        state.patternNameDraft = name;
        state.isDirty = false;
        syncPatternLibraryUI();

        if (persistPatterns(state.patterns)) {
            setPatternStatus(
                selectedPattern && selectedPattern.source === "builtin"
                    ? `Saved "${name}" as a custom pattern`
                    : `Saved "${name}"`
            );
        } else {
            setPatternStatus("Save failed on this device", true);
        }
    });

    elements.copyPatternSourceButton.addEventListener("click", async () => {
        const selectedPattern = getSelectedPattern();
        const presetSource = generateBuiltInPatternSource({
            id:
                selectedPattern && selectedPattern.source === "builtin"
                    ? selectedPattern.id
                    : createBuiltInPatternId(state.patternNameDraft),
            name: sanitizePatternName(state.patternNameDraft),
            animationType: state.animationType,
            settings: state.settings
        });

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(presetSource);
            } else {
                copyTextFallback(presetSource);
            }

            setPatternStatus("Preset source copied. Paste it into BUILT_IN_PATTERNS.");
        } catch (error) {
            setPatternStatus("Copy failed. Select and copy the source manually.", true);
        }
    });

    elements.deletePatternButton.addEventListener("click", () => {
        const selectedPattern = getSelectedPattern();

        if (!selectedPattern) {
            state.patternNameDraft = generatePatternDraftName(
                state.patterns,
                state.animationType
            );
            state.isDirty = true;
            syncPatternLibraryUI();
            refreshPatternStatus();
            return;
        }

        if (selectedPattern.source === "builtin") {
            setPatternStatus("Built-in presets are hardcoded. Save a copy to customize one.", true);
            return;
        }

        const removedName = selectedPattern.name;
        state.patterns = state.patterns.filter((pattern) => pattern.id !== selectedPattern.id);

        const nextPattern = getFirstPatternForAnimation(state.patterns, state.animationType);
        applyStateFromPattern(nextPattern);

        applyCurrentStateToView({ forceGeometry: true });
        syncPatternLibraryUI();

        if (persistPatterns(state.patterns)) {
            setPatternStatus(`Deleted "${removedName}"`);
        } else {
            setPatternStatus("Delete failed on this device", true);
        }
    });

    window.addEventListener("beforeunload", () => {
        if (preview) {
            preview.destroy();
        }
    });

    function handleSettingChange(key, rawValue) {
        const previous = state.settings;
        const next = { ...previous };

        if (state.animationType === HERO_ANIMATION && key === "cameraDistance") {
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

        state.settings = sanitizeSettings(next, state.animationType);
        applyCurrentStateToView();
        updateDirtyState();
        refreshPatternStatus();
    }

    function syncUI() {
        const { renderWidth, renderHeight } = state.settings;
        elements.previewFrame.style.aspectRatio = `${renderWidth} / ${renderHeight}`;
        elements.resolutionLabel.textContent = `${renderWidth} x ${renderHeight}`;
        elements.loopLabel.textContent = getAnimationSummaryLabel(
            state.animationType,
            state.settings
        );
    }

    function updateCodeOutput() {
        elements.codeOutput.value = generateEmbedCode(state.settings, state.animationType);
    }

    function applyCurrentStateToView(options = {}) {
        syncControls(controlRefs, state.settings);
        if (preview) {
            preview.applySettings(state.settings, options);
        }
        syncUI();
        updateCodeOutput();
    }

    function getSelectedPattern() {
        const pattern =
            state.patterns.find((entry) => entry.id === state.selectedPatternId) || null;
        return pattern && pattern.animationType === state.animationType ? pattern : null;
    }

    function loadPattern(patternId) {
        const pattern = state.patterns.find((entry) => entry.id === patternId);

        if (!pattern || pattern.animationType !== state.animationType) {
            return;
        }

        applyStateFromPattern(pattern);
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

        const storedSettings = sanitizeSettings(
            {
                ...getDefaultSettings(state.animationType),
                ...selectedPattern.settings
            },
            state.animationType
        );

        state.isDirty =
            JSON.stringify(state.settings) !== JSON.stringify(storedSettings) ||
            state.patternNameDraft.trim() !== selectedPattern.name;
    }

    function syncPatternLibraryUI() {
        const visiblePatterns = getPatternsForAnimation(state.patterns, state.animationType);
        elements.patternSelect.innerHTML = "";
        elements.builtinPatternsRoot.innerHTML = "";
        elements.animationSelect.value = state.animationType;

        if (!state.selectedPatternId) {
            const draftOption = document.createElement("option");
            draftOption.value = "";
            draftOption.textContent = "Unsaved pattern";
            elements.patternSelect.appendChild(draftOption);
        }

        for (const pattern of visiblePatterns) {
            const option = document.createElement("option");
            option.value = pattern.id;
            option.textContent =
                pattern.source === "builtin" ? `${pattern.name} (Built-in)` : pattern.name;
            elements.patternSelect.appendChild(option);
        }

        for (const pattern of visiblePatterns.filter((entry) => entry.source === "builtin")) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "pattern-chip-button";
            button.textContent = pattern.name;

            if (pattern.id === state.selectedPatternId) {
                button.classList.add("is-active");
            }

            button.addEventListener("click", () => {
                loadPattern(pattern.id);
            });

            elements.builtinPatternsRoot.appendChild(button);
        }

        const selectedPattern = getSelectedPattern();
        elements.patternSelect.value = state.selectedPatternId || "";
        elements.patternNameInput.value = state.patternNameDraft;
        elements.deletePatternButton.disabled =
            !state.selectedPatternId || (selectedPattern && selectedPattern.source === "builtin");
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

        elements.patternStatus.textContent =
            `${getAnimationLabel(state.animationType)} presets are hardcoded in app.js. Custom patterns save on this device.`;
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

    function populateAnimationOptions() {
        elements.animationSelect.innerHTML = "";

        for (const option of ANIMATION_OPTIONS) {
            const optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.textContent = option.label;
            elements.animationSelect.appendChild(optionElement);
        }
    }

    function rebuildControls() {
        controlRefs.clear();
        buildControls(
            elements.controlsRoot,
            state.settings,
            controlRefs,
            handleSettingChange,
            getControlGroups(state.animationType)
        );
    }

    function recreatePreview() {
        if (preview) {
            preview.destroy();
        }

        elements.previewMount.innerHTML = "";
        preview = createPreviewInstance(elements.previewMount, state.animationType);
    }

    function applyStateFromPattern(pattern) {
        if (!pattern) {
            state.selectedPatternId = null;
            state.patternNameDraft = generatePatternDraftName(state.patterns, state.animationType);
            state.settings = sanitizeSettings(
                { ...getDefaultSettings(state.animationType) },
                state.animationType
            );
            state.isDirty = false;
            return;
        }

        state.selectedPatternId = pattern.id;
        state.patternNameDraft = pattern.name;
        state.settings = sanitizeSettings(
            { ...getDefaultSettings(state.animationType), ...pattern.settings },
            state.animationType
        );
        state.isDirty = false;
    }

    function switchAnimation(nextAnimationType) {
        const normalized = sanitizeAnimationType(nextAnimationType);

        if (normalized === state.animationType) {
            elements.animationSelect.value = normalized;
            return;
        }

        state.animationType = normalized;
        const nextPattern = getFirstPatternForAnimation(state.patterns, state.animationType);

        applyStateFromPattern(nextPattern);
        rebuildControls();
        recreatePreview();
        applyCurrentStateToView({ forceGeometry: true });
        syncPatternLibraryUI();
        setPatternStatus(`Switched to ${getAnimationLabel(state.animationType)}`);
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

class FooterInteractionPreview {
    constructor(mount) {
        this.mount = mount;
        this.wrap = document.createElement("div");
        this.wrap.style.position = "relative";
        this.wrap.style.width = "100%";
        this.wrap.style.height = "100%";
        this.wrap.style.overflow = "hidden";
        this.wrap.style.cursor = "crosshair";
        this.wrap.style.userSelect = "none";

        this.canvas = document.createElement("canvas");
        this.canvas.style.display = "block";
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.wrap.appendChild(this.canvas);
        this.mount.appendChild(this.wrap);

        this.ctx = this.canvas.getContext("2d");
        this.hitCanvas = document.createElement("canvas");
        this.hitCtx = this.hitCanvas.getContext("2d");
        this.originalLogoPath = new Path2D(LOGO_PATH_DATA);
        this.scaledLogoPath = null;
        this.settings = sanitizeSettings({ ...FOOTER_DEFAULT_SETTINGS }, FOOTER_ANIMATION);
        this.particles = [];
        this.canvasWidth = 0;
        this.canvasHeight = 0;
        this.devicePixelRatio = 1;
        this.pointerX = 0;
        this.pointerY = 0;
        this.pointerActive = false;
        this.logoHoverActive = false;
        this.maskOpacity = 0;
        this.targetMaskOpacity = 0;
        this.lastFrameTime = performance.now();
        this.animationFrameId = 0;
        this.activePulses = [];
        this.nextPulseTime = Infinity;

        this.animate = this.animate.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handlePointerEnter = this.handlePointerEnter.bind(this);
        this.handlePointerMove = this.handlePointerMove.bind(this);
        this.handlePointerLeave = this.handlePointerLeave.bind(this);

        this.wrap.addEventListener("pointerenter", this.handlePointerEnter);
        this.wrap.addEventListener("pointermove", this.handlePointerMove);
        this.wrap.addEventListener("pointerleave", this.handlePointerLeave);

        if (typeof ResizeObserver !== "undefined") {
            this.resizeObserver = new ResizeObserver(this.handleResize);
            this.resizeObserver.observe(this.mount);
        } else {
            window.addEventListener("resize", this.handleResize);
        }

        this.resizeCanvas();
        this.animationFrameId = window.requestAnimationFrame(this.animate);
    }

    applySettings(nextSettings, options = {}) {
        const previous = this.settings;
        const transformChanged =
            previous.logoPaddingPercent !== nextSettings.logoPaddingPercent ||
            previous.logoSizePercent !== nextSettings.logoSizePercent;
        const geometryChanged =
            options.forceGeometry ||
            Array.from(FOOTER_GEOMETRY_KEYS).some((key) => previous[key] !== nextSettings[key]);

        this.settings = { ...nextSettings };
        this.wrap.style.backgroundColor = this.settings.backgroundColor;
        this.targetMaskOpacity =
            this.settings.maskEnabled === "on" && this.logoHoverActive ? 1 : 0;

        if (this.settings.pulseVariant === "none") {
            this.activePulses = [];
            this.nextPulseTime = Infinity;
        }

        if (transformChanged) {
            this.resizeCanvas();
            return;
        }

        if (geometryChanged || !this.particles.length) {
            this.buildParticles();
        }
    }

    getLogoTransform(width, height) {
        const padding = (Math.min(width, height) * this.settings.logoPaddingPercent) / 100;
        const availableWidth = Math.max(1, width - padding * 2);
        const availableHeight = Math.max(1, height - padding * 2);
        const fitScale = Math.min(availableWidth / LOGO_WIDTH, availableHeight / LOGO_HEIGHT);
        const scale = fitScale * (this.settings.logoSizePercent / 100);
        const renderedWidth = LOGO_WIDTH * scale;
        const renderedHeight = LOGO_HEIGHT * scale;

        return {
            scale,
            offsetX: (width - renderedWidth) / 2,
            offsetY: (height - renderedHeight) / 2
        };
    }

    handleResize() {
        this.resizeCanvas();
    }

    resizeCanvas() {
        const rect = this.mount.getBoundingClientRect();
        this.canvasWidth = Math.max(1, rect.width || 1);
        this.canvasHeight = Math.max(1, rect.height || 1);
        this.devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
        this.canvas.width = Math.round(this.canvasWidth * this.devicePixelRatio);
        this.canvas.height = Math.round(this.canvasHeight * this.devicePixelRatio);
        this.ctx.setTransform(this.devicePixelRatio, 0, 0, this.devicePixelRatio, 0, 0);
        this.hitCanvas.width = Math.max(1, Math.round(this.canvasWidth));
        this.hitCanvas.height = Math.max(1, Math.round(this.canvasHeight));
        this.hitCtx.setTransform(1, 0, 0, 1, 0, 0);
        this.hitCtx.lineWidth = this.settings.pulseBorderThickness;
        this.hitCtx.lineJoin = "round";
        this.hitCtx.lineCap = "round";

        const transform = this.getLogoTransform(this.canvasWidth, this.canvasHeight);
        const matrix = new DOMMatrix()
            .translate(transform.offsetX, transform.offsetY)
            .scale(transform.scale);

        this.scaledLogoPath = new Path2D();
        this.scaledLogoPath.addPath(this.originalLogoPath, matrix);
        this.buildParticles();

        if (this.pointerActive) {
            this.syncLogoHoverState(performance.now(), { triggerPulseOnEnter: false });
        }
    }

    isInsideLogo(x, y) {
        return this.hitCtx.isPointInPath(this.scaledLogoPath, x, y, "evenodd");
    }

    isOnLogoBorder(x, y) {
        return this.hitCtx.isPointInStroke(this.scaledLogoPath, x, y);
    }

    buildParticles() {
        if (!this.scaledLogoPath || this.canvasWidth <= 0 || this.canvasHeight <= 0) {
            return;
        }

        this.particles = [];
        this.hitCtx.lineWidth = this.settings.pulseBorderThickness;

        const spacing = Math.max(
            this.settings.minimumSpacing,
            Math.round(this.canvasWidth / Math.max(this.settings.spacingDivider, 1))
        );
        const jitter = spacing * this.settings.jitterAmount;

        for (let y = spacing / 2; y < this.canvasHeight; y += spacing) {
            for (let x = spacing / 2; x < this.canvasWidth; x += spacing) {
                if (!this.isInsideLogo(x, y)) {
                    continue;
                }

                const baseX = x + (Math.random() - 0.5) * jitter;
                const baseY = y + (Math.random() - 0.5) * jitter;

                this.particles.push({
                    baseX,
                    baseY,
                    x: baseX,
                    y: baseY,
                    velocityX: 0,
                    velocityY: 0,
                    size: randomBetween(
                        this.settings.minimumParticleSize,
                        this.settings.maximumParticleSize
                    ),
                    baseAlpha: randomBetween(
                        this.settings.minimumAlpha,
                        this.settings.maximumAlpha
                    ),
                    flickerPhase: Math.random() * Math.PI * 2,
                    flickerSpeed: 0.7 + Math.random() * 1.6,
                    flickerDepth: 0.12 + Math.random() * 0.2,
                    blinkPhase: Math.random() * Math.PI * 2,
                    blinkSpeed: 0.6 + Math.random() * 1.4,
                    blinkStrength: 0.08 + Math.random() * 0.16,
                    isBorder: this.isOnLogoBorder(baseX, baseY),
                    pulseDistance: 0
                });
            }
        }
    }

    updatePointer(event) {
        const rect = this.wrap.getBoundingClientRect();
        this.pointerX = event.clientX - rect.left;
        this.pointerY = event.clientY - rect.top;
    }

    syncLogoHoverState(currentTime = performance.now(), options = {}) {
        const { triggerPulseOnEnter = true } = options;
        const insideLogo =
            this.pointerActive &&
            Boolean(this.scaledLogoPath) &&
            this.isInsideLogo(this.pointerX, this.pointerY);

        if (insideLogo === this.logoHoverActive) {
            this.targetMaskOpacity = this.settings.maskEnabled === "on" && insideLogo ? 1 : 0;
            return;
        }

        this.logoHoverActive = insideLogo;
        this.targetMaskOpacity = this.settings.maskEnabled === "on" && insideLogo ? 1 : 0;

        if (insideLogo && triggerPulseOnEnter) {
            this.triggerPulse(currentTime);
            return;
        }

        this.nextPulseTime = Infinity;
    }

    handlePointerEnter(event) {
        this.updatePointer(event);
        this.pointerActive = true;
        this.syncLogoHoverState(performance.now());
    }

    handlePointerMove(event) {
        this.updatePointer(event);
        this.pointerActive = true;
        this.syncLogoHoverState(performance.now());
    }

    handlePointerLeave() {
        this.pointerActive = false;
        this.logoHoverActive = false;
        this.targetMaskOpacity = 0;
        this.nextPulseTime = Infinity;
    }

    calculateMaximumPulseDistance(originX = this.pointerX, originY = this.pointerY) {
        const corners = [
            [0, 0],
            [this.canvasWidth, 0],
            [0, this.canvasHeight],
            [this.canvasWidth, this.canvasHeight]
        ];

        let maximumDistance = 0;

        for (const [cornerX, cornerY] of corners) {
            const deltaX = cornerX - originX;
            const deltaY = cornerY - originY;
            maximumDistance = Math.max(maximumDistance, Math.hypot(deltaX, deltaY));
        }

        return maximumDistance;
    }

    triggerPulse(currentTime) {
        if (this.settings.pulseVariant === "none") {
            return;
        }

        this.activePulses.push({
            startTime: currentTime,
            originX: this.pointerX,
            originY: this.pointerY,
            maximumDistance: this.calculateMaximumPulseDistance(this.pointerX, this.pointerY)
        });
        this.nextPulseTime = currentTime + this.settings.pulseRepeatDelay;
    }

    updateParticles(deltaMultiplier) {
        const pointerRadius = Math.max(
            this.settings.minimumPointerRadius,
            this.canvasWidth * this.settings.pointerRadiusRatio
        );
        const pointerRadiusSquared = pointerRadius * pointerRadius;

        for (const particle of this.particles) {
            if (this.logoHoverActive) {
                const deltaX = particle.x - this.pointerX;
                const deltaY = particle.y - this.pointerY;
                const distanceSquared = deltaX * deltaX + deltaY * deltaY;

                if (distanceSquared > 0 && distanceSquared < pointerRadiusSquared) {
                    const distance = Math.sqrt(distanceSquared);
                    const influence = 1 - distance / pointerRadius;
                    const normalizedX = deltaX / distance;
                    const normalizedY = deltaY / distance;
                    const force =
                        influence * influence * this.settings.repulsionStrength * deltaMultiplier;

                    particle.velocityX += normalizedX * force;
                    particle.velocityY += normalizedY * force;
                }
            }

            particle.velocityX +=
                (particle.baseX - particle.x) *
                this.settings.springStrength *
                deltaMultiplier;
            particle.velocityY +=
                (particle.baseY - particle.y) *
                this.settings.springStrength *
                deltaMultiplier;

            const frameFriction = Math.pow(this.settings.friction, deltaMultiplier);
            particle.velocityX *= frameFriction;
            particle.velocityY *= frameFriction;
            particle.x += particle.velocityX * deltaMultiplier;
            particle.y += particle.velocityY * deltaMultiplier;
        }
    }

    getCursorMask(particle) {
        if (this.settings.maskEnabled !== "on" || this.maskOpacity <= 0.001) {
            return 0;
        }

        const maskRadius = Math.max(
            230,
            this.canvasWidth * (this.settings.maskSizePercent / 100)
        );
        const innerRadius = maskRadius * (1 - this.settings.maskSoftness);
        const deltaX = particle.x - this.pointerX;
        const deltaY = particle.y - this.pointerY;
        const distanceSquared = deltaX * deltaX + deltaY * deltaY;

        if (distanceSquared <= innerRadius * innerRadius) {
            return this.maskOpacity;
        }

        if (distanceSquared >= maskRadius * maskRadius) {
            return 0;
        }

        const distance = Math.sqrt(distanceSquared);
        const normalized = 1 - (distance - innerRadius) / Math.max(maskRadius - innerRadius, 0.0001);
        return easeInOut(clamp(normalized, 0, 1)) * this.maskOpacity;
    }

    getPulseStates(currentTime) {
        if (this.settings.pulseVariant === "none" || !this.activePulses.length) {
            return [];
        }

        const nextPulses = [];
        const pulseStates = [];

        for (const pulse of this.activePulses) {
            const progress =
                (currentTime - pulse.startTime) / Math.max(this.settings.pulseDuration, 1);

            if (progress >= 1) {
                continue;
            }

            nextPulses.push(pulse);

            const easedProgress = 1 - Math.pow(1 - progress, 2);
            const fadeProgress = clamp((progress - 0.72) / 0.28, 0, 1);
            const lifeFade = 1 - easeInOut(fadeProgress);
            pulseStates.push({
                originX: pulse.originX,
                originY: pulse.originY,
                radius:
                    easedProgress *
                    (pulse.maximumDistance + this.settings.pulseRevealWidth),
                lifeFade
            });
        }

        this.activePulses = nextPulses;
        return pulseStates;
    }

    getPulseReveal(particle, pulseStates) {
        if (this.settings.maskEnabled !== "on" || !pulseStates.length) {
            return 0;
        }

        let strongestReveal = 0;

        for (const pulseState of pulseStates) {
            const pulseDistance = Math.hypot(
                particle.baseX - pulseState.originX,
                particle.baseY - pulseState.originY
            );
            const distanceFromWave = Math.abs(pulseDistance - pulseState.radius);
            let waveStrength = Math.max(
                0,
                1 - distanceFromWave / Math.max(this.settings.pulseRevealWidth, 0.0001)
            );
            waveStrength = easeInOut(waveStrength);

            let trail = 0;

            if (pulseDistance < pulseState.radius) {
                const trailDistance = pulseState.radius - pulseDistance;
                trail = Math.max(
                    0,
                    1 -
                        trailDistance /
                            Math.max(this.settings.pulseRevealWidth * 2.5, 0.0001)
                );
                trail *= this.settings.pulseRevealTrail;
            }

            strongestReveal = Math.max(
                strongestReveal,
                clamp(
                    (waveStrength * this.settings.pulseRevealStrength + trail) *
                        pulseState.lifeFade,
                    0,
                    1
                )
            );
        }

        return strongestReveal;
    }

    getPulseValues(particle, pulseStates) {
        if (!pulseStates.length || this.settings.pulseVariant === "none") {
            return { brightness: 0, sizeBoost: 0 };
        }

        if (this.settings.pulseVariant === "border" && !particle.isBorder) {
            return { brightness: 0, sizeBoost: 0 };
        }

        let brightness = 0;
        let sizeBoost = 0;

        for (const pulseState of pulseStates) {
            const pulseDistance = Math.hypot(
                particle.baseX - pulseState.originX,
                particle.baseY - pulseState.originY
            );
            const distanceFromWave = Math.abs(pulseDistance - pulseState.radius);
            const waveStrength = Math.max(0, 1 - distanceFromWave / this.settings.pulseWidth);
            const easedWave = waveStrength * waveStrength * (3 - 2 * waveStrength);
            const behindWave =
                pulseDistance < pulseState.radius
                    ? Math.max(
                          0,
                          1 -
                              (pulseState.radius - pulseDistance) /
                                  Math.max(this.settings.pulseWidth * 3, 0.0001)
                      )
                    : 0;
            const trail =
                behindWave *
                this.settings.pulseTrailStrength *
                pulseState.lifeFade;

            brightness +=
                easedWave * this.settings.pulseBrightness * pulseState.lifeFade + trail;
            sizeBoost += easedWave * this.settings.pulseSizeBoost * pulseState.lifeFade;
        }

        return { brightness, sizeBoost };
    }

    drawParticle(particle, alpha, size, rgb) {
        this.ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

        if (this.settings.particleShape === "circle") {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
            this.ctx.fill();
            return;
        }

        this.ctx.fillRect(particle.x - size, particle.y - size, size * 2, size * 2);
    }

    drawParticles(currentTime) {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.maskOpacity +=
            (this.targetMaskOpacity - this.maskOpacity) * this.settings.maskFadeSpeed;
        const seconds = currentTime * 0.001 * this.settings.twinkleSpeed;
        const pulseStates = this.getPulseStates(currentTime);
        const particleRgb = hexToRgb(this.settings.particleColor);
        const pulseRgb = hexToRgb(this.settings.pulseColor);

        for (const particle of this.particles) {
            const cursorReveal = this.getCursorMask(particle);
            const pulseReveal = this.getPulseReveal(particle, pulseStates);
            const reveal = Math.max(cursorReveal, pulseReveal);
            const visibility =
                this.settings.maskEnabled === "on"
                    ? this.settings.baseVisibility +
                      (1 - this.settings.baseVisibility) * reveal
                    : 1;
            const flickerWave =
                (Math.sin(seconds * particle.flickerSpeed + particle.flickerPhase) + 1) * 0.5;
            const flickerMultiplier =
                1 - particle.flickerDepth + flickerWave * particle.flickerDepth * 2;
            const blinkWave = Math.max(
                0,
                Math.sin(seconds * particle.blinkSpeed + particle.blinkPhase)
            );
            const sharpBlink = Math.pow(blinkWave, 22) * particle.blinkStrength;
            const pulse = this.getPulseValues(particle, pulseStates);
            const baseContribution =
                (particle.baseAlpha * flickerMultiplier + sharpBlink) * visibility;
            const pulseContribution = pulse.brightness * visibility;
            const alpha = Math.min(
                1,
                baseContribution + pulseContribution
            );
            const blinkSizeMultiplier = 1 + Math.pow(blinkWave, 22) * 0.7;
            const pulseSizeMultiplier = 1 + pulse.sizeBoost;
            const finalSize = particle.size * blinkSizeMultiplier * pulseSizeMultiplier;
            const pulseMix = alpha > 0 ? clamp(pulseContribution / alpha, 0, 1) : 0;
            const rgb = {
                r: Math.round(lerp(particleRgb.r, pulseRgb.r, pulseMix)),
                g: Math.round(lerp(particleRgb.g, pulseRgb.g, pulseMix)),
                b: Math.round(lerp(particleRgb.b, pulseRgb.b, pulseMix))
            };

            this.drawParticle(particle, alpha, finalSize, rgb);
        }
    }

    animate(currentTime) {
        this.animationFrameId = window.requestAnimationFrame(this.animate);
        const elapsed = currentTime - this.lastFrameTime;
        this.lastFrameTime = currentTime;
        const deltaMultiplier = Math.min(elapsed / 16.667 || 1, 2);

        if (
            this.settings.pulseVariant !== "none" &&
            this.logoHoverActive &&
            currentTime >= this.nextPulseTime
        ) {
            this.triggerPulse(currentTime);
        }

        this.updateParticles(deltaMultiplier);
        this.drawParticles(currentTime);
    }

    destroy() {
        window.cancelAnimationFrame(this.animationFrameId);
        this.wrap.removeEventListener("pointerenter", this.handlePointerEnter);
        this.wrap.removeEventListener("pointermove", this.handlePointerMove);
        this.wrap.removeEventListener("pointerleave", this.handlePointerLeave);

        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        } else {
            window.removeEventListener("resize", this.handleResize);
        }
    }
}

function createPreviewInstance(mount, animationType) {
    return sanitizeAnimationType(animationType) === FOOTER_ANIMATION
        ? new FooterInteractionPreview(mount)
        : new WavePatternPreview(mount);
}

function getControlGroups(animationType) {
    return sanitizeAnimationType(animationType) === FOOTER_ANIMATION
        ? FOOTER_CONTROL_GROUPS
        : CONTROL_GROUPS;
}

function getDefaultSettings(animationType) {
    return sanitizeAnimationType(animationType) === FOOTER_ANIMATION
        ? { ...FOOTER_DEFAULT_SETTINGS }
        : { ...DEFAULT_SETTINGS };
}

function getAnimationLabel(animationType) {
    const animation = ANIMATION_OPTIONS.find(
        (option) => option.value === sanitizeAnimationType(animationType)
    );
    return animation ? animation.label : ANIMATION_OPTIONS[0].label;
}

function getAnimationSummaryLabel(animationType, settings) {
    if (sanitizeAnimationType(animationType) === FOOTER_ANIMATION) {
        return `${formatNumber(settings.pulseDuration)}ms pulse`;
    }

    return `${formatNumber(getLoopDuration(settings), 1)}s loop`;
}

function getPatternsForAnimation(patterns, animationType) {
    const normalized = sanitizeAnimationType(animationType);
    return patterns.filter((pattern) => pattern.animationType === normalized);
}

function getFirstPatternForAnimation(patterns, animationType) {
    return getPatternsForAnimation(patterns, animationType)[0] || null;
}

function buildControls(root, settings, controlRefs, onChange, groups = CONTROL_GROUPS) {
    root.innerHTML = "";

    for (const group of groups) {
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

function sanitizeAnimationType(value) {
    return value === FOOTER_ANIMATION ? FOOTER_ANIMATION : HERO_ANIMATION;
}

function sanitizeCommonSettings(input) {
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
    settings.particleColor = normalizeHexColor(settings.particleColor);
    settings.particleShape =
        SHAPE_OPTIONS.some((option) => option.value === settings.particleShape)
            ? settings.particleShape
            : "rectangle";

    return settings;
}

function sanitizeHeroSettings(input) {
    const settings = sanitizeCommonSettings(input);

    settings.pointSize = clamp(settings.pointSize, 1, 20);
    settings.opacityMin = clamp(settings.opacityMin, 0, 1);
    settings.opacityMax = clamp(settings.opacityMax, settings.opacityMin, 1);
    settings.twinkleSpeed = clamp(settings.twinkleSpeed, 0, 8);
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

function sanitizeFooterSettings(input) {
    const settings = sanitizeCommonSettings(input);

    settings.twinkleSpeed = clamp(settings.twinkleSpeed, 0, 6);
    settings.pulseColor = normalizeHexColor(settings.pulseColor);
    settings.minimumSpacing = clampInt(settings.minimumSpacing, 2, 24);
    settings.spacingDivider = clampInt(settings.spacingDivider, 20, 260);
    settings.minimumParticleSize = clamp(settings.minimumParticleSize, 0.05, 2.5);
    settings.maximumParticleSize = clamp(
        settings.maximumParticleSize,
        settings.minimumParticleSize,
        4
    );
    settings.minimumAlpha = clamp(settings.minimumAlpha, 0, 1);
    settings.maximumAlpha = clamp(settings.maximumAlpha, settings.minimumAlpha, 1);
    settings.pointerRadiusRatio = clamp(settings.pointerRadiusRatio, 0.02, 0.5);
    settings.minimumPointerRadius = clamp(settings.minimumPointerRadius, 10, 500);
    settings.repulsionStrength = clamp(settings.repulsionStrength, 0, 8);
    settings.springStrength = clamp(settings.springStrength, 0.001, 0.2);
    settings.friction = clamp(settings.friction, 0.6, 0.99);
    settings.jitterAmount = clamp(settings.jitterAmount, 0, 0.6);
    settings.logoPaddingPercent = clamp(settings.logoPaddingPercent, 0, 30);
    settings.pulseVariant = PULSE_VARIANT_OPTIONS.some(
        (option) => option.value === settings.pulseVariant
    )
        ? settings.pulseVariant
        : "fill";
    settings.maskEnabled = TOGGLE_OPTIONS.some((option) => option.value === settings.maskEnabled)
        ? settings.maskEnabled
        : "off";
    settings.maskSizePercent = clamp(settings.maskSizePercent, 8, 80);
    settings.baseVisibility = clamp(settings.baseVisibility, 0, 1);
    settings.maskSoftness = clamp(settings.maskSoftness, 0.05, 0.95);
    settings.maskFadeSpeed = clamp(settings.maskFadeSpeed, 0.01, 0.5);
    settings.pulseRevealWidth = clamp(settings.pulseRevealWidth, 20, 320);
    settings.pulseRevealStrength = clamp(settings.pulseRevealStrength, 0, 1);
    settings.pulseRevealTrail = clamp(settings.pulseRevealTrail, 0, 1);
    settings.logoSizePercent = clamp(settings.logoSizePercent, 40, 140);
    settings.pulseBorderThickness = clamp(settings.pulseBorderThickness, 0.5, 24);
    settings.pulseDuration = clampInt(settings.pulseDuration, 100, 4000);
    settings.pulseRepeatDelay = clampInt(settings.pulseRepeatDelay, 100, 5000);
    settings.pulseWidth = clamp(settings.pulseWidth, 10, 300);
    settings.pulseBrightness = clamp(settings.pulseBrightness, 0, 2);
    settings.pulseSizeBoost = clamp(settings.pulseSizeBoost, 0, 4);
    settings.pulseTrailStrength = clamp(settings.pulseTrailStrength, 0, 1);

    return settings;
}

function sanitizeSettings(input, animationType = HERO_ANIMATION) {
    const normalizedAnimationType = sanitizeAnimationType(animationType);
    const merged = {
        ...getDefaultSettings(normalizedAnimationType),
        ...(input && typeof input === "object" ? input : {})
    };

    return normalizedAnimationType === FOOTER_ANIMATION
        ? sanitizeFooterSettings(merged)
        : sanitizeHeroSettings(merged);
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

function generateEmbedCode(settings, animationType = HERO_ANIMATION) {
    return sanitizeAnimationType(animationType) === FOOTER_ANIMATION
        ? generateFooterEmbedCode(settings)
        : generateHeroEmbedCode(settings);
}

function generateHeroEmbedCode(settings) {
    const color = normalizeHexColor(settings.particleColor);
    const backgroundColor = normalizeHexColor(settings.backgroundColor);
    const containerStyle = getEmbedContainerStyle(settings, "none");

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

function generateFooterEmbedCode(settings) {
    const color = normalizeHexColor(settings.particleColor);
    const pulseColor = normalizeHexColor(settings.pulseColor);
    const backgroundColor = normalizeHexColor(settings.backgroundColor);
    const containerStyle = getEmbedContainerStyle(settings, "auto");

    return [
        "<!-- ============================================================ -->",
        "<!-- WEBFLOW EMBED: WAVE PATTERN 1 FOOTER INTERACTION             -->",
        "<!-- Paste inside a Webflow Embed element.                       -->",
        "<!-- ============================================================ -->",
        "",
        `<div id="footer-interaction-wrap" style="${containerStyle}">`,
        '    <canvas id="footer-interaction-canvas" style="display:block; width:100%; height:100%;"></canvas>',
        "</div>",
        "",
        "<script>",
        "(function () {",
        "    const wrap = document.getElementById('footer-interaction-wrap');",
        "    const canvas = document.getElementById('footer-interaction-canvas');",
        "    if (!wrap || !canvas || typeof Path2D === 'undefined') return;",
        "",
        "    const ctx = canvas.getContext('2d');",
        "    const hitCanvas = document.createElement('canvas');",
        "    const hitCtx = hitCanvas.getContext('2d');",
        "    const LOGO_WIDTH = 1274;",
        "    const LOGO_HEIGHT = 847;",
        `    const logoPathData = ${JSON.stringify(LOGO_PATH_DATA)};`,
        "    const originalLogoPath = new Path2D(logoPathData);",
        "    const config = {",
        `        renderWidth: ${formatNumber(settings.renderWidth)},`,
        `        renderHeight: ${formatNumber(settings.renderHeight)},`,
        `        backgroundColor: ${JSON.stringify(backgroundColor)},`,
        `        particleColor: ${JSON.stringify(color)},`,
        `        pulseColor: ${JSON.stringify(pulseColor)},`,
        `        particleShape: ${JSON.stringify(settings.particleShape)},`,
        `        twinkleSpeed: ${formatNumber(settings.twinkleSpeed, 1)},`,
        `        minimumSpacing: ${formatNumber(settings.minimumSpacing)},`,
        `        spacingDivider: ${formatNumber(settings.spacingDivider)},`,
        `        minimumParticleSize: ${formatNumber(settings.minimumParticleSize, 2)},`,
        `        maximumParticleSize: ${formatNumber(settings.maximumParticleSize, 2)},`,
        `        minimumAlpha: ${formatNumber(settings.minimumAlpha, 2)},`,
        `        maximumAlpha: ${formatNumber(settings.maximumAlpha, 2)},`,
        `        pointerRadiusRatio: ${formatNumber(settings.pointerRadiusRatio, 2)},`,
        `        minimumPointerRadius: ${formatNumber(settings.minimumPointerRadius)},`,
        `        repulsionStrength: ${formatNumber(settings.repulsionStrength, 2)},`,
        `        springStrength: ${formatNumber(settings.springStrength, 3)},`,
        `        friction: ${formatNumber(settings.friction, 2)},`,
        `        jitterAmount: ${formatNumber(settings.jitterAmount, 2)},`,
        `        logoPaddingPercent: ${formatNumber(settings.logoPaddingPercent, 1)},`,
        `        logoSizePercent: ${formatNumber(settings.logoSizePercent, 0)},`,
        `        pulseVariant: ${JSON.stringify(settings.pulseVariant)},`,
        `        pulseBorderThickness: ${formatNumber(settings.pulseBorderThickness, 1)},`,
        `        maskEnabled: ${JSON.stringify(settings.maskEnabled)},`,
        `        maskSizePercent: ${formatNumber(settings.maskSizePercent, 0)},`,
        `        baseVisibility: ${formatNumber(settings.baseVisibility, 2)},`,
        `        maskSoftness: ${formatNumber(settings.maskSoftness, 2)},`,
        `        maskFadeSpeed: ${formatNumber(settings.maskFadeSpeed, 2)},`,
        `        pulseRevealWidth: ${formatNumber(settings.pulseRevealWidth)},`,
        `        pulseRevealStrength: ${formatNumber(settings.pulseRevealStrength, 2)},`,
        `        pulseRevealTrail: ${formatNumber(settings.pulseRevealTrail, 2)},`,
        `        pulseDuration: ${formatNumber(settings.pulseDuration)},`,
        `        pulseRepeatDelay: ${formatNumber(settings.pulseRepeatDelay)},`,
        `        pulseWidth: ${formatNumber(settings.pulseWidth)},`,
        `        pulseBrightness: ${formatNumber(settings.pulseBrightness, 2)},`,
        `        pulseSizeBoost: ${formatNumber(settings.pulseSizeBoost, 2)},`,
        `        pulseTrailStrength: ${formatNumber(settings.pulseTrailStrength, 2)}`,
        "    };",
        "",
        "    wrap.style.backgroundColor = config.backgroundColor;",
        "    wrap.style.overflow = 'hidden';",
        "    wrap.style.cursor = 'crosshair';",
        "    wrap.style.userSelect = 'none';",
        "",
        "    let canvasWidth = 0;",
        "    let canvasHeight = 0;",
        "    let devicePixelRatio = 1;",
        "    let scaledLogoPath = null;",
        "    let particles = [];",
        "    let pointerX = 0;",
        "    let pointerY = 0;",
        "    let pointerActive = false;",
        "    let logoHoverActive = false;",
        "    let maskOpacity = 0;",
        "    let targetMaskOpacity = 0;",
        "    let lastFrameTime = performance.now();",
        "    let animationFrameId = 0;",
        "    let activePulses = [];",
        "    let nextPulseTime = Infinity;",
        "",
        "    function hexToRgb(hex) {",
        "        const normalized = String(hex || '#ffffff').replace('#', '');",
        "        return {",
        "            r: parseInt(normalized.slice(0, 2), 16),",
        "            g: parseInt(normalized.slice(2, 4), 16),",
        "            b: parseInt(normalized.slice(4, 6), 16)",
        "        };",
        "    }",
        "",
        "    function randomBetween(min, max) {",
        "        return min + Math.random() * (max - min);",
        "    }",
        "",
        "    function getLogoTransform(width, height) {",
        "        const padding = (Math.min(width, height) * config.logoPaddingPercent) / 100;",
        "        const availableWidth = Math.max(1, width - padding * 2);",
        "        const availableHeight = Math.max(1, height - padding * 2);",
        "        const fitScale = Math.min(availableWidth / LOGO_WIDTH, availableHeight / LOGO_HEIGHT);",
        "        const scale = fitScale * (config.logoSizePercent / 100);",
        "        const renderedWidth = LOGO_WIDTH * scale;",
        "        const renderedHeight = LOGO_HEIGHT * scale;",
        "        return {",
        "            scale,",
        "            offsetX: (width - renderedWidth) / 2,",
        "            offsetY: (height - renderedHeight) / 2",
        "        };",
        "    }",
        "",
        "    function resizeCanvas() {",
        "        const rect = wrap.getBoundingClientRect();",
        "        canvasWidth = Math.max(1, rect.width || 1);",
        "        canvasHeight = Math.max(1, rect.height || 1);",
        "        devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);",
        "        canvas.width = Math.round(canvasWidth * devicePixelRatio);",
        "        canvas.height = Math.round(canvasHeight * devicePixelRatio);",
        "        ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);",
        "        hitCanvas.width = Math.max(1, Math.round(canvasWidth));",
        "        hitCanvas.height = Math.max(1, Math.round(canvasHeight));",
        "        hitCtx.setTransform(1, 0, 0, 1, 0, 0);",
        "        hitCtx.lineWidth = config.pulseBorderThickness;",
        "        hitCtx.lineJoin = 'round';",
        "        hitCtx.lineCap = 'round';",
        "",
        "        const transform = getLogoTransform(canvasWidth, canvasHeight);",
        "        const matrix = new DOMMatrix()",
        "            .translate(transform.offsetX, transform.offsetY)",
        "            .scale(transform.scale);",
        "",
        "        scaledLogoPath = new Path2D();",
        "        scaledLogoPath.addPath(originalLogoPath, matrix);",
        "        buildParticles();",
        "        if (pointerActive) {",
            "            syncLogoHoverState(performance.now(), { triggerPulseOnEnter: false });",
        "        }",
        "    }",
        "",
        "    function isInsideLogo(x, y) {",
        "        return hitCtx.isPointInPath(scaledLogoPath, x, y, 'evenodd');",
        "    }",
        "",
        "    function isOnLogoBorder(x, y) {",
        "        return hitCtx.isPointInStroke(scaledLogoPath, x, y);",
        "    }",
        "",
        "    function buildParticles() {",
        "        if (!scaledLogoPath) return;",
        "        particles = [];",
        "        hitCtx.lineWidth = config.pulseBorderThickness;",
        "",
        "        const spacing = Math.max(",
        "            config.minimumSpacing,",
        "            Math.round(canvasWidth / Math.max(config.spacingDivider, 1))",
        "        );",
        "        const jitter = spacing * config.jitterAmount;",
        "",
        "        for (let y = spacing / 2; y < canvasHeight; y += spacing) {",
        "            for (let x = spacing / 2; x < canvasWidth; x += spacing) {",
        "                if (!isInsideLogo(x, y)) continue;",
        "",
        "                const baseX = x + (Math.random() - 0.5) * jitter;",
        "                const baseY = y + (Math.random() - 0.5) * jitter;",
        "",
        "                particles.push({",
        "                    baseX,",
        "                    baseY,",
        "                    x: baseX,",
        "                    y: baseY,",
        "                    velocityX: 0,",
        "                    velocityY: 0,",
        "                    size: randomBetween(config.minimumParticleSize, config.maximumParticleSize),",
        "                    baseAlpha: randomBetween(config.minimumAlpha, config.maximumAlpha),",
        "                    flickerPhase: Math.random() * Math.PI * 2,",
        "                    flickerSpeed: 0.7 + Math.random() * 1.6,",
        "                    flickerDepth: 0.12 + Math.random() * 0.2,",
        "                    blinkPhase: Math.random() * Math.PI * 2,",
        "                    blinkSpeed: 0.6 + Math.random() * 1.4,",
        "                    blinkStrength: 0.08 + Math.random() * 0.16,",
        "                    isBorder: isOnLogoBorder(baseX, baseY),",
        "                    pulseDistance: 0",
        "                });",
        "            }",
        "        }",
        "    }",
        "",
        "    function calculateMaximumPulseDistance(originX, originY) {",
        "        const corners = [[0, 0], [canvasWidth, 0], [0, canvasHeight], [canvasWidth, canvasHeight]];",
        "        let maximumDistance = 0;",
        "",
        "        for (const [cornerX, cornerY] of corners) {",
        "            maximumDistance = Math.max(",
        "                maximumDistance,",
        "                Math.hypot(cornerX - originX, cornerY - originY)",
        "            );",
        "        }",
        "",
        "        return maximumDistance;",
        "    }",
        "",
        "    function triggerPulse(currentTime) {",
        "        if (config.pulseVariant === 'none') return;",
        "        activePulses.push({",
        "            startTime: currentTime,",
        "            originX: pointerX,",
        "            originY: pointerY,",
        "            maximumDistance: calculateMaximumPulseDistance(pointerX, pointerY)",
        "        });",
        "        nextPulseTime = currentTime + config.pulseRepeatDelay;",
        "    }",
        "",
        "    function updateParticles(deltaMultiplier) {",
        "        const pointerRadius = Math.max(",
        "            config.minimumPointerRadius,",
        "            canvasWidth * config.pointerRadiusRatio",
        "        );",
        "        const pointerRadiusSquared = pointerRadius * pointerRadius;",
        "",
        "        for (const particle of particles) {",
        "            if (logoHoverActive) {",
        "                const deltaX = particle.x - pointerX;",
        "                const deltaY = particle.y - pointerY;",
        "                const distanceSquared = deltaX * deltaX + deltaY * deltaY;",
        "",
        "                if (distanceSquared > 0 && distanceSquared < pointerRadiusSquared) {",
        "                    const distance = Math.sqrt(distanceSquared);",
        "                    const influence = 1 - distance / pointerRadius;",
        "                    const normalizedX = deltaX / distance;",
        "                    const normalizedY = deltaY / distance;",
        "                    const force = influence * influence * config.repulsionStrength * deltaMultiplier;",
        "                    particle.velocityX += normalizedX * force;",
        "                    particle.velocityY += normalizedY * force;",
        "                }",
        "            }",
        "",
        "            particle.velocityX += (particle.baseX - particle.x) * config.springStrength * deltaMultiplier;",
        "            particle.velocityY += (particle.baseY - particle.y) * config.springStrength * deltaMultiplier;",
        "",
        "            const frameFriction = Math.pow(config.friction, deltaMultiplier);",
        "            particle.velocityX *= frameFriction;",
        "            particle.velocityY *= frameFriction;",
        "            particle.x += particle.velocityX * deltaMultiplier;",
        "            particle.y += particle.velocityY * deltaMultiplier;",
        "        }",
        "    }",
        "",
        "    function getCursorMask(particle) {",
        "        if (config.maskEnabled !== 'on' || maskOpacity <= 0.001) return 0;",
        "",
        "        const maskRadius = Math.max(230, canvasWidth * (config.maskSizePercent / 100));",
        "        const innerRadius = maskRadius * (1 - config.maskSoftness);",
        "        const deltaX = particle.x - pointerX;",
        "        const deltaY = particle.y - pointerY;",
        "        const distanceSquared = deltaX * deltaX + deltaY * deltaY;",
        "",
        "        if (distanceSquared <= innerRadius * innerRadius) return maskOpacity;",
        "        if (distanceSquared >= maskRadius * maskRadius) return 0;",
        "",
        "        const distance = Math.sqrt(distanceSquared);",
        "        const normalized = 1 - (distance - innerRadius) / Math.max(maskRadius - innerRadius, 0.0001);",
        "        const eased = Math.max(0, Math.min(1, normalized));",
        "        return (eased * eased * (3 - 2 * eased)) * maskOpacity;",
        "    }",
        "",
        "    function getPulseStates(currentTime) {",
        "        if (config.pulseVariant === 'none' || !activePulses.length) return [];",
        "",
        "        const nextPulses = [];",
        "        const pulseStates = [];",
        "",
        "        for (const pulse of activePulses) {",
        "            const progress = (currentTime - pulse.startTime) / Math.max(config.pulseDuration, 1);",
        "            if (progress >= 1) continue;",
        "",
        "            nextPulses.push(pulse);",
        "",
        "            const easedProgress = 1 - Math.pow(1 - progress, 2);",
        "            const fadeProgress = Math.max(0, Math.min(1, (progress - 0.72) / 0.28));",
        "            const lifeFade = 1 - (fadeProgress * fadeProgress * (3 - 2 * fadeProgress));",
        "            pulseStates.push({",
        "                originX: pulse.originX,",
        "                originY: pulse.originY,",
        "                radius: easedProgress * (pulse.maximumDistance + config.pulseRevealWidth),",
        "                lifeFade",
        "            });",
        "        }",
        "",
        "        activePulses = nextPulses;",
        "        return pulseStates;",
        "    }",
        "",
        "    function getPulseReveal(particle, pulseStates) {",
        "        if (config.maskEnabled !== 'on' || !pulseStates.length) return 0;",
        "",
        "        let strongestReveal = 0;",
        "",
        "        for (const pulseState of pulseStates) {",
        "            const pulseDistance = Math.hypot(",
        "                particle.baseX - pulseState.originX,",
        "                particle.baseY - pulseState.originY",
        "            );",
        "            const distanceFromWave = Math.abs(pulseDistance - pulseState.radius);",
        "            let waveStrength = Math.max(0, 1 - distanceFromWave / Math.max(config.pulseRevealWidth, 0.0001));",
        "            waveStrength = waveStrength * waveStrength * (3 - 2 * waveStrength);",
        "",
        "            let trail = 0;",
        "            if (pulseDistance < pulseState.radius) {",
        "                const trailDistance = pulseState.radius - pulseDistance;",
        "                trail = Math.max(0, 1 - trailDistance / Math.max(config.pulseRevealWidth * 2.5, 0.0001));",
        "                trail *= config.pulseRevealTrail;",
        "            }",
        "",
        "            strongestReveal = Math.max(",
        "                strongestReveal,",
        "                Math.max(0, Math.min(1, (waveStrength * config.pulseRevealStrength + trail) * pulseState.lifeFade))",
        "            );",
        "        }",
        "",
        "        return strongestReveal;",
        "    }",
        "",
        "    function getPulseValues(particle, pulseStates) {",
        "        if (!pulseStates.length || config.pulseVariant === 'none') {",
        "            return { brightness: 0, sizeBoost: 0 };",
        "        }",
        "",
        "        if (config.pulseVariant === 'border' && !particle.isBorder) {",
        "            return { brightness: 0, sizeBoost: 0 };",
        "        }",
        "",
        "        let brightness = 0;",
        "        let sizeBoost = 0;",
        "",
        "        for (const pulseState of pulseStates) {",
        "            const pulseDistance = Math.hypot(",
        "                particle.baseX - pulseState.originX,",
        "                particle.baseY - pulseState.originY",
        "            );",
        "            const distanceFromWave = Math.abs(pulseDistance - pulseState.radius);",
        "            const waveStrength = Math.max(0, 1 - distanceFromWave / Math.max(config.pulseWidth, 0.0001));",
        "            const easedWave = waveStrength * waveStrength * (3 - 2 * waveStrength);",
        "            const behindWave = pulseDistance < pulseState.radius",
        "                ? Math.max(0, 1 - (pulseState.radius - pulseDistance) / Math.max(config.pulseWidth * 3, 0.0001))",
        "                : 0;",
        "            const trail = behindWave * config.pulseTrailStrength * pulseState.lifeFade;",
        "",
        "            brightness += easedWave * config.pulseBrightness * pulseState.lifeFade + trail;",
        "            sizeBoost += easedWave * config.pulseSizeBoost * pulseState.lifeFade;",
        "        }",
        "",
        "        return { brightness, sizeBoost };",
        "    }",
        "",
        "    function drawParticles(currentTime) {",
        "        ctx.clearRect(0, 0, canvasWidth, canvasHeight);",
        "        maskOpacity += (targetMaskOpacity - maskOpacity) * config.maskFadeSpeed;",
        "        const particleRgb = hexToRgb(config.particleColor);",
        "        const pulseRgb = hexToRgb(config.pulseColor);",
        "        const seconds = currentTime * 0.001 * config.twinkleSpeed;",
        "        const pulseStates = getPulseStates(currentTime);",
        "",
        "        for (const particle of particles) {",
        "            const cursorReveal = getCursorMask(particle);",
        "            const pulseReveal = getPulseReveal(particle, pulseStates);",
        "            const reveal = Math.max(cursorReveal, pulseReveal);",
        "            const visibility = config.maskEnabled === 'on' ? config.baseVisibility + (1 - config.baseVisibility) * reveal : 1;",
        "            const flickerWave = (Math.sin(seconds * particle.flickerSpeed + particle.flickerPhase) + 1) * 0.5;",
        "            const flickerMultiplier = 1 - particle.flickerDepth + flickerWave * particle.flickerDepth * 2;",
        "            const blinkWave = Math.max(0, Math.sin(seconds * particle.blinkSpeed + particle.blinkPhase));",
        "            const sharpBlink = Math.pow(blinkWave, 22) * particle.blinkStrength;",
        "            const pulse = getPulseValues(particle, pulseStates);",
        "            const baseContribution = (particle.baseAlpha * flickerMultiplier + sharpBlink) * visibility;",
        "            const pulseContribution = pulse.brightness * visibility;",
        "            const alpha = Math.min(1, baseContribution + pulseContribution);",
        "            const blinkSizeMultiplier = 1 + Math.pow(blinkWave, 22) * 0.7;",
        "            const pulseSizeMultiplier = 1 + pulse.sizeBoost;",
        "            const finalSize = particle.size * blinkSizeMultiplier * pulseSizeMultiplier;",
        "            const pulseMix = alpha > 0 ? Math.max(0, Math.min(1, pulseContribution / alpha)) : 0;",
        "            const rgb = {",
        "                r: Math.round(particleRgb.r + (pulseRgb.r - particleRgb.r) * pulseMix),",
        "                g: Math.round(particleRgb.g + (pulseRgb.g - particleRgb.g) * pulseMix),",
        "                b: Math.round(particleRgb.b + (pulseRgb.b - particleRgb.b) * pulseMix)",
        "            };",
        "",
        "            ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;",
        "",
        "            if (config.particleShape === 'circle') {",
        "                ctx.beginPath();",
        "                ctx.arc(particle.x, particle.y, finalSize, 0, Math.PI * 2);",
        "                ctx.fill();",
        "            } else {",
        "                ctx.fillRect(",
        "                    particle.x - finalSize,",
        "                    particle.y - finalSize,",
        "                    finalSize * 2,",
        "                    finalSize * 2",
        "                );",
        "            }",
        "        }",
        "    }",
        "",
        "    function animate(currentTime) {",
        "        animationFrameId = requestAnimationFrame(animate);",
        "        const elapsed = currentTime - lastFrameTime;",
        "        lastFrameTime = currentTime;",
        "        const deltaMultiplier = Math.min(elapsed / 16.667 || 1, 2);",
        "",
        "        if (config.pulseVariant !== 'none' && logoHoverActive && currentTime >= nextPulseTime) {",
        "            triggerPulse(currentTime);",
        "        }",
        "",
        "        updateParticles(deltaMultiplier);",
        "        drawParticles(currentTime);",
        "    }",
        "",
        "    function updatePointer(event) {",
        "        const rect = wrap.getBoundingClientRect();",
        "        pointerX = event.clientX - rect.left;",
        "        pointerY = event.clientY - rect.top;",
        "    }",
        "",
        "    function syncLogoHoverState(currentTime, options) {",
        "        const settings = options || {};",
        "        const triggerPulseOnEnter = settings.triggerPulseOnEnter !== false;",
        "        const insideLogo = pointerActive && !!scaledLogoPath && isInsideLogo(pointerX, pointerY);",
        "",
        "        if (insideLogo === logoHoverActive) {",
            "            targetMaskOpacity = config.maskEnabled === 'on' && insideLogo ? 1 : 0;",
        "            return;",
        "        }",
        "",
        "        logoHoverActive = insideLogo;",
        "        targetMaskOpacity = config.maskEnabled === 'on' && insideLogo ? 1 : 0;",
        "",
        "        if (insideLogo && triggerPulseOnEnter) {",
        "            triggerPulse(currentTime);",
        "            return;",
        "        }",
        "",
        "        nextPulseTime = Infinity;",
        "    }",
        "",
        "    wrap.addEventListener('pointerenter', function (event) {",
        "        updatePointer(event);",
        "        pointerActive = true;",
        "        syncLogoHoverState(performance.now());",
        "    });",
        "",
        "    wrap.addEventListener('pointermove', function (event) {",
        "        updatePointer(event);",
        "        pointerActive = true;",
        "        syncLogoHoverState(performance.now());",
        "    });",
        "",
        "    wrap.addEventListener('pointerleave', function () {",
        "        pointerActive = false;",
        "        logoHoverActive = false;",
        "        targetMaskOpacity = 0;",
        "        nextPulseTime = Infinity;",
        "    });",
        "",
        "    function handleResize() {",
        "        resizeCanvas();",
        "    }",
        "",
        "    if (typeof ResizeObserver !== 'undefined') {",
        "        const resizeObserver = new ResizeObserver(handleResize);",
        "        resizeObserver.observe(wrap);",
        "    } else {",
        "        window.addEventListener('resize', handleResize);",
        "    }",
        "",
        "    resizeCanvas();",
        "    animationFrameId = requestAnimationFrame(animate);",
        "})();",
        "</script>"
    ].join("\n");
}

function loadSavedPatterns() {
    const builtInPatterns = loadBuiltInPatterns();

    try {
        const raw = window.localStorage.getItem(PATTERN_STORAGE_KEY);

        if (!raw) {
            return builtInPatterns;
        }

        const parsed = JSON.parse(raw);

        if (!Array.isArray(parsed)) {
            return builtInPatterns;
        }

        const savedPatterns = parsed
            .map((pattern, index) => sanitizePatternRecord(pattern, index, "user"))
            .filter(Boolean);

        return [...builtInPatterns, ...savedPatterns];
    } catch (error) {
        return builtInPatterns;
    }
}

function persistPatterns(patterns) {
    try {
        const customPatterns = patterns
            .filter((pattern) => pattern.source !== "builtin")
            .map((pattern) => ({
                id: pattern.id,
                name: pattern.name,
                animationType: pattern.animationType,
                settings: pattern.settings
            }));

        window.localStorage.setItem(PATTERN_STORAGE_KEY, JSON.stringify(customPatterns));
        return true;
    } catch (error) {
        return false;
    }
}

function loadBuiltInPatterns() {
    return BUILT_IN_PATTERNS.map((pattern, index) =>
        sanitizePatternRecord(pattern, index, "builtin")
    );
}

function sanitizePatternRecord(pattern, index, source = "user") {
    if (!pattern || typeof pattern !== "object") {
        return null;
    }

    const animationType = sanitizeAnimationType(pattern.animationType);

    return {
        id:
            typeof pattern.id === "string" && pattern.id.trim()
                ? pattern.id
                : createPatternId(index),
        name: sanitizePatternName(pattern.name),
        source,
        animationType,
        settings: sanitizeSettings(
            {
                ...getDefaultSettings(animationType),
                ...(pattern.settings && typeof pattern.settings === "object"
                    ? pattern.settings
                    : {})
            },
            animationType
        )
    };
}

function createPatternRecord(name, settings, animationType = HERO_ANIMATION) {
    const normalizedAnimationType = sanitizeAnimationType(animationType);

    return {
        id: createPatternId(),
        name: sanitizePatternName(name),
        source: "user",
        animationType: normalizedAnimationType,
        settings: sanitizeSettings(
            { ...getDefaultSettings(normalizedAnimationType), ...settings },
            normalizedAnimationType
        )
    };
}

function createPatternId(seed = "") {
    return `pattern-${Date.now()}-${Math.random().toString(36).slice(2, 8)}${seed}`;
}

function createBuiltInPatternId(name) {
    const slug = sanitizePatternName(name)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 48);

    return `builtin-${slug || "pattern"}`;
}

function sanitizePatternName(name) {
    const trimmed = String(name || "").trim();
    return trimmed || "Untitled Pattern";
}

function generateBuiltInPatternSource(pattern) {
    const animationType = sanitizeAnimationType(pattern.animationType);
    const normalized = {
        id: pattern.id || createBuiltInPatternId(pattern.name),
        name: sanitizePatternName(pattern.name),
        animationType,
        settings: sanitizeSettings(
            { ...getDefaultSettings(animationType), ...pattern.settings },
            animationType
        )
    };

    return JSON.stringify(normalized, null, 4);
}

function generatePatternDraftName(patterns, animationType = HERO_ANIMATION) {
    const visiblePatterns = getPatternsForAnimation(patterns, animationType);
    const existingNames = new Set(visiblePatterns.map((pattern) => pattern.name));
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

function copyTextFallback(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
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

function getEmbedContainerStyle(settings, pointerEvents = "none") {
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
        `pointer-events: ${pointerEvents}`,
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

function hexToRgb(value) {
    const normalized = normalizeHexColor(value).slice(1);
    return {
        r: parseInt(normalized.slice(0, 2), 16),
        g: parseInt(normalized.slice(2, 4), 16),
        b: parseInt(normalized.slice(4, 6), 16)
    };
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
