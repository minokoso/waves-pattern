const PRESET_RESOLUTIONS = {
    hd: { label: "HD", width: 1280, height: 720 },
    fullhd: { label: "Full HD", width: 1920, height: 1080 },
    qhd: { label: "QHD", width: 2560, height: 1440 },
    uhd4k: { label: "4K", width: 3840, height: 2160 }
};

const HERO_ANIMATION = "heroInteraction";
const FOOTER_ANIMATION = "footerInteraction";
const FUNNEL_ANIMATION = "funnelInteraction";
const FUNNEL_V2_ANIMATION = "funnelInteractionV2";

const ANIMATION_OPTIONS = [
    { value: HERO_ANIMATION, label: "Hero interaction" },
    { value: FOOTER_ANIMATION, label: "Footer interaction" },
    { value: FUNNEL_ANIMATION, label: "Funnel interaction" },
    { value: FUNNEL_V2_ANIMATION, label: "Funnel interaction v2" }
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
const PREVIEW_SCALE_MIN = 35;
const PREVIEW_SCALE_MAX = 100;
const PREVIEW_SCALE_DEFAULT = 100;

const DEFAULT_SETTINGS = {
    resolutionPreset: "fullhd",
    renderWidth: 1920,
    renderHeight: 1080,
    backgroundColor: "#000000",
    backgroundEnabled: "on",
    backgroundOpacity: 1,
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
    backgroundEnabled: "on",
    backgroundOpacity: 1,
    containerPosition: "relative",
    containerWidthValue: 100,
    containerWidthUnit: "%",
    containerHeightValue: 100,
    containerHeightUnit: "%",
    particleColor: "#ffffff",
    pulseColor: "#ffffff",
    pulseColorOpacity: 1,
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
    backgroundDotsOpacity: 0.3,
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

const FUNNEL_DEFAULT_SETTINGS = {
    resolutionPreset: "custom",
    renderWidth: 1000,
    renderHeight: 760,
    backgroundColor: "#f2f0ef",
    backgroundEnabled: "on",
    backgroundOpacity: 1,
    containerPosition: "relative",
    containerWidthValue: 100,
    containerWidthUnit: "%",
    containerHeightValue: 100,
    containerHeightUnit: "%",
    particleColor: "#000000",
    flowColor: "#000000",
    pulseColor: "#000000",
    pulseColorOpacity: 1,
    particleShape: "circle",
    maskEnabled: "on",
    pulseEnabled: "on",
    baseVisibility: 0.2,
    maximumPixelRatio: 1.5,
    ringCount: 42,
    pointsPerRing: 66,
    ringRotationSpeed: 0.65,
    particleSizeMin: 0.28,
    particleSizeMax: 0.72,
    particleAlphaMin: 0.12,
    particleAlphaMax: 0.38,
    flowParticleCount: 190,
    flowSizeMin: 0.45,
    flowSizeMax: 1.1,
    flowAlphaMin: 0.38,
    flowAlphaMax: 0.92,
    flowSpeedMin: 0.05,
    flowSpeedMax: 0.1,
    flowSwirlSpeed: 1.45,
    flowTwistStrength: 4.5,
    flowAcceleration: 2.8,
    topRadiusRatio: 0.34,
    neckRadiusRatio: 0.08,
    outletRadiusRatio: 0.042,
    topYRatio: -0.32,
    neckYRatio: 0.24,
    outletYRatio: 0.44,
    neckProgress: 0.82,
    basePitch: -0.17,
    maximumRotationY: 0.14,
    maximumRotationX: 0.1,
    rotationSpeed: 0.07,
    perspectiveRatio: 1.55,
    pointerRadiusRatio: 0.12,
    minimumPointerRadius: 85,
    repulsionStrength: 1.5,
    springStrength: 0.03,
    friction: 0.87,
    cursorRevealRadiusRatio: 0.3,
    minimumCursorRevealRadius: 200,
    cursorRevealSoftness: 0.52,
    cursorRevealFadeSpeed: 0.1,
    cursorVisibilityStrength: 0.88,
    pulseDuration: 1200,
    pulseRepeatDelay: 1900,
    pulseWidth: 100,
    pulseBrightness: 0.72,
    pulseSizeBoost: 1,
    pulseRevealWidth: 150,
    pulseRevealStrength: 0.86,
    pulseRevealTrail: 0.18,
    outletTrailCount: 0,
    outletTrailLength: 0.14,
    outletTrailSpread: 0.018,
    outletTrailOpacity: 0.4
};

const FUNNEL_V2_DEFAULT_SETTINGS = {
    resolutionPreset: "custom",
    renderWidth: 1000,
    renderHeight: 760,
    backgroundColor: "#f2f0ef",
    backgroundEnabled: "on",
    backgroundOpacity: 1,
    containerPosition: "relative",
    containerWidthValue: 100,
    containerWidthUnit: "%",
    containerHeightValue: 100,
    containerHeightUnit: "%",
    particleColor: "#000000",
    pulseColor: "#000000",
    pulseColorOpacity: 1,
    particleShape: "rectangle",
    pulseEnabled: "off",
    pulseDuration: 1200,
    pulseRepeatDelay: 1900,
    pulseWidth: 100,
    pulseBrightness: 0.72,
    pulseSizeBoost: 1,
    maximumPixelRatio: 2,
    radialSegments: 180,
    verticalSegments: 105,
    topY: 4.9,
    bottomY: -5.6,
    topRadius: 4.5,
    throatRadius: 0.42,
    bottomRadius: 0.7,
    upperCurvePower: 3.15,
    lowerBlendStart: 0.72,
    flowSpeed: 0.055,
    rectWidth: 1.2,
    rectHeight: 1.2,
    particleScaleMin: 0.8,
    particleScaleMax: 1.4,
    brightnessMin: 0.45,
    brightnessMax: 1,
    speedMin: 0.75,
    speedMax: 1.25,
    angleJitter: 0.01,
    verticalJitter: 0.004,
    twistStrength: 0.42,
    twistExponent: 1.7,
    twistWaveAmount: 0.01,
    twistWaveSpeed: 0.3,
    twistWaveFrequency: 7,
    surfaceNoiseAmount: 0.012,
    surfaceNoiseAngleFrequency: 7,
    surfaceNoiseVerticalFrequency: 22,
    surfaceNoiseSpeed: 0.8,
    cameraStartRotationX: 1.12,
    cameraStartRotationY: -1,
    cameraRestRotationX: 0.52,
    cameraRestRotationY: 0.18,
    minimumRotationX: -1.28,
    maximumRotationX: -0.92,
    cameraDistance: 11.4,
    cameraAngle: 0,
    cameraPositionX: 0,
    cameraPositionY: 0,
    minimumDistance: 8.8,
    maximumDistance: 14,
    perspectiveScale: 1.1,
    centerXRatio: 0.5,
    centerYRatio: 0.47,
    autoRotate: "on",
    autoRotateSpeed: 0.018,
    pointerRadius: 90,
    repulsionStrength: 0.42,
    displacementDecay: 0.9,
    dragRotationYSpeed: 0.004,
    dragRotationXSpeed: 0.0025,
    zoomSpeed: 0.008,
    dofStrength: 0.14,
    dofFadeStrength: 0.55,
    dofSizeBoost: 0.45,
    depthShading: 0.55,
    depthOffset: 5,
    depthRange: 10,
    topHighlightBase: 0.72,
    topHighlightAmount: 0.32,
    topHighlightPower: 1.3,
    flickerSpeed: 2,
    flickerAmount: 0.06,
    flickerFrequency: 10,
    bottomFadeStart: 0.82,
    bottomFadeEnd: 1,
    projectionSizeScale: 0.011
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
            backgroundEnabled: "off",
            backgroundOpacity: 1,
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#ffffff",
            pulseColor: "#ffffff",
            pulseColorOpacity: 0.1,
            particleShape: "rectangle",
            twinkleSpeed: 0.6,
            minimumSpacing: 2,
            spacingDivider: 209,
            minimumParticleSize: 0.32,
            maximumParticleSize: 1.01,
            minimumAlpha: 0.06,
            maximumAlpha: 0.11,
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
            backgroundDotsOpacity: 0.4,
            maskSoftness: 0.5,
            maskFadeSpeed: 0.11,
            pulseRevealWidth: 130,
            pulseRevealStrength: 0.85,
            pulseRevealTrail: 0.2,
            logoSizePercent: 160,
            pulseDuration: 1270,
            pulseRepeatDelay: 5000,
            pulseWidth: 48,
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
            backgroundDotsOpacity: 0.3,
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
            minimumAlpha: 0.85,
            maximumAlpha: 0.85,
            pointerRadiusRatio: 0.14,
            minimumPointerRadius: 90,
            repulsionStrength: 2.16,
            springStrength: 0.011,
            friction: 0.85,
            jitterAmount: 0.03,
            logoPaddingPercent: 10,
            pulseVariant: "border",
            pulseBorderThickness: 9.4,
            maskEnabled: "off",
            maskSizePercent: 30,
            baseVisibility: 0.35,
            backgroundDotsOpacity: 0.45,
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
            backgroundDotsOpacity: 0.3,
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
    },
    {
        id: "builtin-funnel-1",
        name: "1",
        animationType: FUNNEL_ANIMATION,
        settings: {
            resolutionPreset: "custom",
            renderWidth: 1000,
            renderHeight: 760,
            backgroundColor: "#f2f0ef",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#000000",
            flowColor: "#000000",
            pulseColor: "#000000",
            particleShape: "circle",
            maskEnabled: "on",
            pulseEnabled: "on",
            baseVisibility: 0.2,
            maximumPixelRatio: 1.5,
            ringCount: 42,
            pointsPerRing: 66,
            ringRotationSpeed: 0.65,
            particleSizeMin: 0.28,
            particleSizeMax: 0.72,
            particleAlphaMin: 0.12,
            particleAlphaMax: 0.38,
            flowParticleCount: 190,
            flowSizeMin: 0.45,
            flowSizeMax: 1.1,
            flowAlphaMin: 0.38,
            flowAlphaMax: 0.92,
            flowSpeedMin: 0.05,
            flowSpeedMax: 0.1,
            flowSwirlSpeed: 1.45,
            flowTwistStrength: 4.5,
            flowAcceleration: 2.8,
            topRadiusRatio: 0.34,
            neckRadiusRatio: 0.08,
            outletRadiusRatio: 0.042,
            topYRatio: -0.32,
            neckYRatio: 0.24,
            outletYRatio: 0.44,
            neckProgress: 0.82,
            basePitch: -0.17,
            maximumRotationY: 0.14,
            maximumRotationX: 0.1,
            rotationSpeed: 0.07,
            perspectiveRatio: 1.55,
            pointerRadiusRatio: 0.12,
            minimumPointerRadius: 85,
            repulsionStrength: 1.5,
            springStrength: 0.03,
            friction: 0.87,
            cursorRevealRadiusRatio: 0.3,
            minimumCursorRevealRadius: 200,
            cursorRevealSoftness: 0.52,
            cursorRevealFadeSpeed: 0.1,
            cursorVisibilityStrength: 0.88,
            pulseDuration: 1200,
            pulseRepeatDelay: 1900,
            pulseWidth: 100,
            pulseBrightness: 0.72,
            pulseSizeBoost: 1,
            pulseRevealWidth: 150,
            pulseRevealStrength: 0.86,
            pulseRevealTrail: 0.18,
            outletTrailCount: 0,
            outletTrailLength: 0.14,
            outletTrailSpread: 0.018,
            outletTrailOpacity: 0.4
        }
    },
    {
        id: "builtin-funnel-2",
        name: "2",
        animationType: FUNNEL_ANIMATION,
        settings: {
            resolutionPreset: "custom",
            renderWidth: 1000,
            renderHeight: 760,
            backgroundColor: "#f2f0ef",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#000000",
            flowColor: "#000000",
            pulseColor: "#000000",
            particleShape: "circle",
            maskEnabled: "off",
            pulseEnabled: "off",
            baseVisibility: 1,
            maximumPixelRatio: 1.5,
            ringCount: 42,
            pointsPerRing: 66,
            ringRotationSpeed: 0.65,
            particleSizeMin: 0.28,
            particleSizeMax: 0.72,
            particleAlphaMin: 0.12,
            particleAlphaMax: 0.38,
            flowParticleCount: 190,
            flowSizeMin: 0.45,
            flowSizeMax: 1.1,
            flowAlphaMin: 1,
            flowAlphaMax: 1,
            flowSpeedMin: 0.18,
            flowSpeedMax: 0.215,
            flowSwirlSpeed: 1.45,
            flowTwistStrength: 4.5,
            flowAcceleration: 4.6,
            topRadiusRatio: 0.16,
            neckRadiusRatio: 0.05,
            outletRadiusRatio: 0.081,
            topYRatio: -0.2,
            neckYRatio: 0.09,
            outletYRatio: 0.25,
            neckProgress: 0.84,
            basePitch: 0,
            maximumRotationY: 0.14,
            maximumRotationX: 0.1,
            rotationSpeed: 0.07,
            perspectiveRatio: 0.6,
            pointerRadiusRatio: 0.12,
            minimumPointerRadius: 85,
            repulsionStrength: 1.5,
            springStrength: 0.03,
            friction: 0.87,
            cursorRevealRadiusRatio: 0.3,
            minimumCursorRevealRadius: 200,
            cursorRevealSoftness: 0.52,
            cursorRevealFadeSpeed: 0.1,
            cursorVisibilityStrength: 0.88,
            pulseDuration: 1200,
            pulseRepeatDelay: 1900,
            pulseWidth: 100,
            pulseBrightness: 0.72,
            pulseSizeBoost: 1,
            pulseRevealWidth: 150,
            pulseRevealStrength: 0.86,
            pulseRevealTrail: 0.18,
            outletTrailCount: 0,
            outletTrailLength: 0.14,
            outletTrailSpread: 0.018,
            outletTrailOpacity: 0.4
        }
    },
    {
        id: "builtin-funnel-3",
        name: "3",
        animationType: FUNNEL_ANIMATION,
        settings: {
            resolutionPreset: "fullhd",
            renderWidth: 1920,
            renderHeight: 1080,
            backgroundColor: "#f2f0ef",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#000000",
            flowColor: "#000000",
            pulseColor: "#000000",
            particleShape: "rectangle",
            maskEnabled: "off",
            pulseEnabled: "on",
            baseVisibility: 1,
            maximumPixelRatio: 3,
            ringCount: 32,
            pointsPerRing: 66,
            ringRotationSpeed: 0.31,
            particleSizeMin: 0.28,
            particleSizeMax: 0.54,
            particleAlphaMin: 0.3,
            particleAlphaMax: 0.5,
            flowParticleCount: 190,
            flowSizeMin: 0.45,
            flowSizeMax: 1.1,
            flowAlphaMin: 1,
            flowAlphaMax: 1,
            flowSpeedMin: 0.18,
            flowSpeedMax: 0.215,
            flowSwirlSpeed: 1.45,
            flowTwistStrength: 4.5,
            flowAcceleration: 4.6,
            topRadiusRatio: 0.13,
            neckRadiusRatio: 0.025,
            outletRadiusRatio: 0.046,
            topYRatio: -0.29,
            neckYRatio: 0.22,
            outletYRatio: 0.36,
            neckProgress: 0.84,
            basePitch: 0,
            maximumRotationY: 0.14,
            maximumRotationX: 0.1,
            rotationSpeed: 0.07,
            perspectiveRatio: 0.6,
            pointerRadiusRatio: 0.12,
            minimumPointerRadius: 85,
            repulsionStrength: 1.5,
            springStrength: 0.03,
            friction: 0.87,
            cursorRevealRadiusRatio: 0.3,
            minimumCursorRevealRadius: 200,
            cursorRevealSoftness: 0.52,
            cursorRevealFadeSpeed: 0.1,
            cursorVisibilityStrength: 0.88,
            pulseDuration: 1820,
            pulseRepeatDelay: 1900,
            pulseWidth: 64,
            pulseBrightness: 0.72,
            pulseSizeBoost: 1,
            pulseRevealWidth: 150,
            pulseRevealStrength: 0.86,
            pulseRevealTrail: 0.18,
            outletTrailCount: 0,
            outletTrailLength: 0.14,
            outletTrailSpread: 0.018,
            outletTrailOpacity: 0.4
        }
    },
    {
        id: "builtin-funnel-4",
        name: "4",
        animationType: FUNNEL_ANIMATION,
        settings: {
            resolutionPreset: "custom",
            renderWidth: 1000,
            renderHeight: 760,
            backgroundColor: "#f2f0ef",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#000000",
            flowColor: "#000000",
            pulseColor: "#000000",
            particleShape: "circle",
            maskEnabled: "off",
            pulseEnabled: "off",
            baseVisibility: 1,
            maximumPixelRatio: 1.5,
            ringCount: 26,
            pointsPerRing: 66,
            ringRotationSpeed: 0.65,
            particleSizeMin: 0.28,
            particleSizeMax: 0.72,
            particleAlphaMin: 0.12,
            particleAlphaMax: 0.38,
            flowParticleCount: 314,
            flowSizeMin: 0.25,
            flowSizeMax: 0.7,
            flowAlphaMin: 1,
            flowAlphaMax: 1,
            flowSpeedMin: 0.18,
            flowSpeedMax: 0.215,
            flowSwirlSpeed: 1.45,
            flowTwistStrength: 4.5,
            flowAcceleration: 4.6,
            topRadiusRatio: 0.17,
            neckRadiusRatio: 0.02,
            outletRadiusRatio: 0.081,
            topYRatio: -0.27,
            neckYRatio: 0.22,
            outletYRatio: 0.35,
            neckProgress: 0.84,
            basePitch: 0,
            maximumRotationY: 0.14,
            maximumRotationX: 0.1,
            rotationSpeed: 0.07,
            perspectiveRatio: 0.6,
            pointerRadiusRatio: 0.12,
            minimumPointerRadius: 85,
            repulsionStrength: 1.5,
            springStrength: 0.03,
            friction: 0.87,
            cursorRevealRadiusRatio: 0.3,
            minimumCursorRevealRadius: 200,
            cursorRevealSoftness: 0.52,
            cursorRevealFadeSpeed: 0.1,
            cursorVisibilityStrength: 0.88,
            pulseDuration: 1200,
            pulseRepeatDelay: 1900,
            pulseWidth: 100,
            pulseBrightness: 0.72,
            pulseSizeBoost: 1,
            pulseRevealWidth: 150,
            pulseRevealStrength: 0.86,
            pulseRevealTrail: 0.18,
            outletTrailCount: 0,
            outletTrailLength: 0.14,
            outletTrailSpread: 0.018,
            outletTrailOpacity: 0.4
        }
    },
    {
        id: "builtin-funnel-v2-1",
        name: "1",
        animationType: FUNNEL_V2_ANIMATION,
        settings: {
            resolutionPreset: "custom",
            renderWidth: 1000,
            renderHeight: 760,
            backgroundColor: "#f2f0ef",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#000000",
            pulseColor: "#000000",
            particleShape: "rectangle",
            pulseEnabled: "off",
            pulseDuration: 1200,
            pulseRepeatDelay: 1900,
            pulseWidth: 100,
            pulseBrightness: 0.72,
            pulseSizeBoost: 1,
            maximumPixelRatio: 2,
            radialSegments: 180,
            verticalSegments: 105,
            topY: 4.9,
            bottomY: -5.6,
            topRadius: 4.5,
            throatRadius: 0.42,
            bottomRadius: 0.7,
            upperCurvePower: 3.15,
            lowerBlendStart: 0.72,
            flowSpeed: 0.055,
            rectWidth: 1.2,
            rectHeight: 1.2,
            particleScaleMin: 0.8,
            particleScaleMax: 1.4,
            brightnessMin: 0.45,
            brightnessMax: 1,
            speedMin: 0.75,
            speedMax: 1.25,
            angleJitter: 0.01,
            verticalJitter: 0.004,
            twistStrength: 0.42,
            twistExponent: 1.7,
            twistWaveAmount: 0.01,
            twistWaveSpeed: 0.3,
            twistWaveFrequency: 7,
            surfaceNoiseAmount: 0.012,
            surfaceNoiseAngleFrequency: 7,
            surfaceNoiseVerticalFrequency: 22,
            surfaceNoiseSpeed: 0.8,
            cameraStartRotationX: 1.12,
            cameraStartRotationY: -1,
            cameraRestRotationX: 0.52,
            cameraRestRotationY: 0.18,
            minimumRotationX: -1.28,
            maximumRotationX: -0.92,
            cameraDistance: 11.4,
            cameraPositionX: 0,
            cameraPositionY: 0,
            minimumDistance: 8.8,
            maximumDistance: 14,
            perspectiveScale: 1.1,
            centerXRatio: 0.5,
            centerYRatio: 0.47,
            autoRotate: "on",
            autoRotateSpeed: 0.018,
            pointerRadius: 90,
            repulsionStrength: 0.42,
            displacementDecay: 0.9,
            dragRotationYSpeed: 0.004,
            dragRotationXSpeed: 0.0025,
            zoomSpeed: 0.008,
            dofStrength: 0.14,
            dofFadeStrength: 0.55,
            dofSizeBoost: 0.45,
            depthShading: 0.55,
            depthOffset: 5,
            depthRange: 10,
            topHighlightBase: 0.72,
            topHighlightAmount: 0.32,
            topHighlightPower: 1.3,
            flickerSpeed: 2,
            flickerAmount: 0.06,
            flickerFrequency: 10,
            bottomFadeStart: 0.82,
            bottomFadeEnd: 1,
            projectionSizeScale: 0.011
        }
    },
    {
        id: "builtin-funnel-v2-2",
        name: "2",
        animationType: FUNNEL_V2_ANIMATION,
        settings: {
            resolutionPreset: "custom",
            renderWidth: 1000,
            renderHeight: 760,
            backgroundColor: "#f2f0ef",
            containerPosition: "relative",
            containerWidthValue: 100,
            containerWidthUnit: "%",
            containerHeightValue: 100,
            containerHeightUnit: "%",
            particleColor: "#000000",
            pulseColor: "#000000",
            particleShape: "rectangle",
            pulseEnabled: "off",
            pulseDuration: 1200,
            pulseRepeatDelay: 1900,
            pulseWidth: 100,
            pulseBrightness: 0.72,
            pulseSizeBoost: 1,
            maximumPixelRatio: 2,
            radialSegments: 51,
            verticalSegments: 180,
            topY: 3.08,
            bottomY: -5.6,
            topRadius: 4.5,
            throatRadius: 0.13,
            bottomRadius: 0.7,
            upperCurvePower: 5,
            lowerBlendStart: 0.72,
            flowSpeed: 0.087,
            rectWidth: 1.2,
            rectHeight: 1.2,
            particleScaleMin: 0.41,
            particleScaleMax: 1.21,
            brightnessMin: 0.17,
            brightnessMax: 1,
            speedMin: 0.75,
            speedMax: 1.25,
            angleJitter: 0,
            verticalJitter: 0,
            twistStrength: 2,
            twistExponent: 4,
            twistWaveAmount: 0.015,
            twistWaveSpeed: 0.3,
            twistWaveFrequency: 7,
            surfaceNoiseAmount: 0,
            surfaceNoiseAngleFrequency: 7,
            surfaceNoiseVerticalFrequency: 22,
            surfaceNoiseSpeed: 0.8,
            cameraStartRotationX: 1.43,
            cameraStartRotationY: 1.74,
            cameraRestRotationX: 0.29,
            cameraRestRotationY: 0.18,
            minimumRotationX: -1.28,
            maximumRotationX: -0.92,
            cameraDistance: 13.74,
            cameraAngle: 1.33,
            cameraPositionX: 0,
            cameraPositionY: 0.26,
            minimumDistance: 13.1,
            maximumDistance: 14,
            perspectiveScale: 1.12,
            centerXRatio: 0.5,
            centerYRatio: 0.47,
            autoRotate: "on",
            autoRotateSpeed: 0.016,
            pointerRadius: 30,
            repulsionStrength: 1.36,
            displacementDecay: 0.9,
            dragRotationYSpeed: 0.004,
            dragRotationXSpeed: 0.0025,
            zoomSpeed: 0.009,
            dofStrength: 0.197,
            dofFadeStrength: 0.55,
            dofSizeBoost: 0.45,
            depthShading: 0.55,
            depthOffset: 5,
            depthRange: 10,
            topHighlightBase: 0.72,
            topHighlightAmount: 0.32,
            topHighlightPower: 1.3,
            flickerSpeed: 2,
            flickerAmount: 0.06,
            flickerFrequency: 10,
            bottomFadeStart: 0.82,
            bottomFadeEnd: 1,
            projectionSizeScale: 0.011
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
                key: "backgroundEnabled",
                type: "select",
                label: "Background",
                options: TOGGLE_OPTIONS
            },
            {
                key: "backgroundOpacity",
                type: "range",
                label: "Background opacity",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "logoSizePercent",
                type: "range",
                label: "Logo size",
                min: 40,
                max: 200,
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
                key: "backgroundEnabled",
                type: "select",
                label: "Background",
                options: TOGGLE_OPTIONS
            },
            {
                key: "backgroundOpacity",
                type: "range",
                label: "Background opacity",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "logoSizePercent",
                type: "range",
                label: "Logo size",
                min: 40,
                max: 200,
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
            },
            {
                key: "backgroundDotsOpacity",
                type: "range",
                label: "Background dots opacity",
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
                key: "pulseColorOpacity",
                type: "range",
                label: "Pulse color opacity",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
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
                label: "Pulse delay",
                min: 0,
                max: 15000,
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

const FUNNEL_CONTROL_GROUPS = [
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
                key: "backgroundEnabled",
                type: "select",
                label: "Background",
                options: TOGGLE_OPTIONS
            },
            {
                key: "backgroundOpacity",
                type: "range",
                label: "Background opacity",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "maximumPixelRatio",
                type: "range",
                label: "Preview sharpness",
                min: 1,
                max: 3,
                step: 0.1,
                precision: 1
            }
        ]
    },
    {
        title: "Shell",
        controls: [
            {
                key: "ringCount",
                type: "range",
                label: "Ring count",
                min: 6,
                max: 96,
                step: 1,
                precision: 0
            },
            {
                key: "pointsPerRing",
                type: "range",
                label: "Points per ring",
                min: 12,
                max: 180,
                step: 1,
                precision: 0
            },
            {
                key: "ringRotationSpeed",
                type: "range",
                label: "Ring rotation speed",
                min: -4,
                max: 4,
                step: 0.01,
                precision: 2
            },
            {
                key: "particleSizeMin",
                type: "range",
                label: "Min shell size",
                min: 0.05,
                max: 3,
                step: 0.01,
                precision: 2
            },
            {
                key: "particleSizeMax",
                type: "range",
                label: "Max shell size",
                min: 0.05,
                max: 4,
                step: 0.01,
                precision: 2
            },
            {
                key: "particleAlphaMin",
                type: "range",
                label: "Min shell alpha",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "particleAlphaMax",
                type: "range",
                label: "Max shell alpha",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
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
                label: "Shell color"
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
        title: "Flow",
        controls: [
            {
                key: "flowParticleCount",
                type: "range",
                label: "Flow count",
                min: 12,
                max: 600,
                step: 1,
                precision: 0
            },
            {
                key: "flowSizeMin",
                type: "range",
                label: "Min flow size",
                min: 0.05,
                max: 3,
                step: 0.01,
                precision: 2
            },
            {
                key: "flowSizeMax",
                type: "range",
                label: "Max flow size",
                min: 0.05,
                max: 4,
                step: 0.01,
                precision: 2
            },
            {
                key: "flowAlphaMin",
                type: "range",
                label: "Min flow alpha",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "flowAlphaMax",
                type: "range",
                label: "Max flow alpha",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "flowSpeedMin",
                type: "range",
                label: "Min flow speed",
                min: 0.005,
                max: 0.25,
                step: 0.005,
                precision: 3
            },
            {
                key: "flowSpeedMax",
                type: "range",
                label: "Max flow speed",
                min: 0.005,
                max: 0.4,
                step: 0.005,
                precision: 3
            },
            {
                key: "flowColor",
                type: "color",
                label: "Flow color"
            },
            {
                key: "flowSwirlSpeed",
                type: "range",
                label: "Swirl speed",
                min: 0,
                max: 4,
                step: 0.01,
                precision: 2
            },
            {
                key: "flowTwistStrength",
                type: "range",
                label: "Swirl twist",
                min: 0,
                max: 12,
                step: 0.1,
                precision: 1
            },
            {
                key: "flowAcceleration",
                type: "range",
                label: "Outlet acceleration",
                min: 0,
                max: 8,
                step: 0.1,
                precision: 1
            }
        ]
    },
    {
        title: "Shape",
        controls: [
            {
                key: "topRadiusRatio",
                type: "range",
                label: "Top radius",
                min: 0.08,
                max: 0.6,
                step: 0.01,
                precision: 2
            },
            {
                key: "neckRadiusRatio",
                type: "range",
                label: "Neck radius",
                min: 0.01,
                max: 0.3,
                step: 0.005,
                precision: 3
            },
            {
                key: "outletRadiusRatio",
                type: "range",
                label: "Outlet radius",
                min: 0.005,
                max: 0.16,
                step: 0.001,
                precision: 3
            },
            {
                key: "topYRatio",
                type: "range",
                label: "Top height",
                min: -0.6,
                max: 0.1,
                step: 0.01,
                precision: 2
            },
            {
                key: "neckYRatio",
                type: "range",
                label: "Neck height",
                min: -0.1,
                max: 0.6,
                step: 0.01,
                precision: 2
            },
            {
                key: "outletYRatio",
                type: "range",
                label: "Outlet height",
                min: 0,
                max: 0.9,
                step: 0.01,
                precision: 2
            },
            {
                key: "neckProgress",
                type: "range",
                label: "Neck progress",
                min: 0.2,
                max: 0.95,
                step: 0.01,
                precision: 2
            },
            {
                key: "basePitch",
                type: "range",
                label: "Base pitch",
                min: -0.8,
                max: 0.8,
                step: 0.01,
                precision: 2
            },
            {
                key: "perspectiveRatio",
                type: "range",
                label: "Perspective",
                min: 0.6,
                max: 3,
                step: 0.01,
                precision: 2
            }
        ]
    },
    {
        title: "Interaction",
        controls: [
            {
                key: "maximumRotationY",
                type: "range",
                label: "Rotate Y amount",
                min: 0,
                max: 0.5,
                step: 0.01,
                precision: 2
            },
            {
                key: "maximumRotationX",
                type: "range",
                label: "Rotate X amount",
                min: 0,
                max: 0.4,
                step: 0.01,
                precision: 2
            },
            {
                key: "rotationSpeed",
                type: "range",
                label: "Rotation smoothing",
                min: 0.01,
                max: 0.3,
                step: 0.01,
                precision: 2
            },
            {
                key: "pointerRadiusRatio",
                type: "range",
                label: "Pointer radius",
                min: 0.02,
                max: 0.4,
                step: 0.01,
                precision: 2
            },
            {
                key: "minimumPointerRadius",
                type: "range",
                label: "Min pointer radius",
                min: 10,
                max: 400,
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
            }
        ]
    },
    {
        title: "Reveal And Pulse",
        controls: [
            {
                key: "maskEnabled",
                type: "select",
                label: "Mask",
                options: TOGGLE_OPTIONS
            },
            {
                key: "pulseEnabled",
                type: "select",
                label: "Pulse",
                options: TOGGLE_OPTIONS
            },
            {
                key: "cursorRevealRadiusRatio",
                type: "range",
                label: "Reveal radius",
                min: 0.05,
                max: 0.6,
                step: 0.01,
                precision: 2
            },
            {
                key: "minimumCursorRevealRadius",
                type: "range",
                label: "Min reveal radius",
                min: 20,
                max: 600,
                step: 1,
                precision: 0,
                unit: "px"
            },
            {
                key: "cursorRevealSoftness",
                type: "range",
                label: "Reveal softness",
                min: 0.05,
                max: 0.95,
                step: 0.01,
                precision: 2
            },
            {
                key: "cursorRevealFadeSpeed",
                type: "range",
                label: "Reveal fade speed",
                min: 0.01,
                max: 0.4,
                step: 0.01,
                precision: 2
            },
            {
                key: "cursorVisibilityStrength",
                type: "range",
                label: "Reveal strength",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "pulseColor",
                type: "color",
                label: "Pulse color"
            },
            {
                key: "pulseColorOpacity",
                type: "range",
                label: "Pulse color opacity",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
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
                max: 6000,
                step: 10,
                precision: 0,
                unit: "ms"
            },
            {
                key: "pulseWidth",
                type: "range",
                label: "Pulse width",
                min: 10,
                max: 360,
                step: 1,
                precision: 0,
                unit: "px"
            },
            {
                key: "pulseBrightness",
                type: "range",
                label: "Pulse brightness",
                min: 0,
                max: 2.5,
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
                key: "pulseRevealWidth",
                type: "range",
                label: "Pulse reveal width",
                min: 10,
                max: 360,
                step: 1,
                precision: 0,
                unit: "px"
            },
            {
                key: "pulseRevealStrength",
                type: "range",
                label: "Pulse reveal strength",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "pulseRevealTrail",
                type: "range",
                label: "Pulse reveal trail",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            }
        ]
    }
];

const FUNNEL_V2_CONTROL_GROUPS = [
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
                key: "backgroundEnabled",
                type: "select",
                label: "Background",
                options: TOGGLE_OPTIONS
            },
            {
                key: "backgroundOpacity",
                type: "range",
                label: "Background opacity",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "maximumPixelRatio",
                type: "range",
                label: "Preview sharpness",
                min: 1,
                max: 3,
                step: 0.1,
                precision: 1
            }
        ]
    },
    {
        title: "Particles",
        controls: [
            {
                key: "radialSegments",
                type: "range",
                label: "Radial segments",
                min: 24,
                max: 260,
                step: 1,
                precision: 0
            },
            {
                key: "verticalSegments",
                type: "range",
                label: "Vertical segments",
                min: 20,
                max: 180,
                step: 1,
                precision: 0
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
                key: "pulseColor",
                type: "color",
                label: "Pulse color"
            },
            {
                key: "rectWidth",
                type: "range",
                label: "Base width",
                min: 0.2,
                max: 4,
                step: 0.01,
                precision: 2
            },
            {
                key: "rectHeight",
                type: "range",
                label: "Base height",
                min: 0.2,
                max: 4,
                step: 0.01,
                precision: 2
            },
            {
                key: "particleScaleMin",
                type: "range",
                label: "Min size scale",
                min: 0.2,
                max: 2,
                step: 0.01,
                precision: 2
            },
            {
                key: "particleScaleMax",
                type: "range",
                label: "Max size scale",
                min: 0.2,
                max: 2.5,
                step: 0.01,
                precision: 2
            },
            {
                key: "brightnessMin",
                type: "range",
                label: "Min brightness",
                min: 0.05,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "brightnessMax",
                type: "range",
                label: "Max brightness",
                min: 0.05,
                max: 1.4,
                step: 0.01,
                precision: 2
            },
            {
                key: "angleJitter",
                type: "range",
                label: "Angle jitter",
                min: 0,
                max: 0.08,
                step: 0.001,
                precision: 3
            },
            {
                key: "verticalJitter",
                type: "range",
                label: "Vertical jitter",
                min: 0,
                max: 0.03,
                step: 0.001,
                precision: 3
            }
        ]
    },
    {
        title: "Shape And Flow",
        controls: [
            {
                key: "topY",
                type: "range",
                label: "Top height",
                min: -2,
                max: 12,
                step: 0.01,
                precision: 2
            },
            {
                key: "bottomY",
                type: "range",
                label: "Bottom height",
                min: -14,
                max: 2,
                step: 0.01,
                precision: 2
            },
            {
                key: "topRadius",
                type: "range",
                label: "Top radius",
                min: 0.4,
                max: 10,
                step: 0.01,
                precision: 2
            },
            {
                key: "throatRadius",
                type: "range",
                label: "Throat radius",
                min: 0.05,
                max: 2,
                step: 0.01,
                precision: 2
            },
            {
                key: "bottomRadius",
                type: "range",
                label: "Bottom radius",
                min: 0.05,
                max: 3,
                step: 0.01,
                precision: 2
            },
            {
                key: "upperCurvePower",
                type: "range",
                label: "Upper curve",
                min: 0.5,
                max: 5,
                step: 0.01,
                precision: 2
            },
            {
                key: "lowerBlendStart",
                type: "range",
                label: "Bottom blend start",
                min: 0.3,
                max: 0.98,
                step: 0.01,
                precision: 2
            },
            {
                key: "flowSpeed",
                type: "range",
                label: "Flow speed",
                min: 0.002,
                max: 0.2,
                step: 0.001,
                precision: 3
            },
            {
                key: "speedMin",
                type: "range",
                label: "Min speed variance",
                min: 0.1,
                max: 2,
                step: 0.01,
                precision: 2
            },
            {
                key: "speedMax",
                type: "range",
                label: "Max speed variance",
                min: 0.1,
                max: 2.5,
                step: 0.01,
                precision: 2
            },
            {
                key: "twistStrength",
                type: "range",
                label: "Twist amount",
                min: 0,
                max: 2,
                step: 0.01,
                precision: 2
            },
            {
                key: "twistExponent",
                type: "range",
                label: "Twist exponent",
                min: 0.2,
                max: 4,
                step: 0.01,
                precision: 2
            },
            {
                key: "twistWaveAmount",
                type: "range",
                label: "Twist wobble",
                min: 0,
                max: 0.08,
                step: 0.001,
                precision: 3
            },
            {
                key: "surfaceNoiseAmount",
                type: "range",
                label: "Surface noise",
                min: 0,
                max: 0.08,
                step: 0.001,
                precision: 3
            }
        ]
    },
    {
        title: "Camera",
        controls: [
            {
                key: "cameraStartRotationX",
                type: "range",
                label: "Start pitch",
                min: -2.4,
                max: 2.4,
                step: 0.01,
                precision: 2
            },
            {
                key: "cameraStartRotationY",
                type: "range",
                label: "Start yaw",
                min: -3.2,
                max: 3.2,
                step: 0.01,
                precision: 2
            },
            {
                key: "cameraRestRotationX",
                type: "range",
                label: "Rest pitch",
                min: -2.4,
                max: 2.4,
                step: 0.01,
                precision: 2
            },
            {
                key: "cameraRestRotationY",
                type: "range",
                label: "Rest yaw",
                min: -3.2,
                max: 3.2,
                step: 0.01,
                precision: 2
            },
            {
                key: "cameraDistance",
                type: "range",
                label: "Camera distance",
                min: 4,
                max: 24,
                step: 0.01,
                precision: 2
            },
            {
                key: "cameraAngle",
                type: "range",
                label: "Camera angle",
                min: -2.4,
                max: 2.4,
                step: 0.01,
                precision: 2
            },
            {
                key: "cameraPositionX",
                type: "range",
                label: "Camera X position",
                min: -10,
                max: 10,
                step: 0.01,
                precision: 2
            },
            {
                key: "cameraPositionY",
                type: "range",
                label: "Camera Y position",
                min: -10,
                max: 10,
                step: 0.01,
                precision: 2
            },
            {
                key: "minimumDistance",
                type: "range",
                label: "Min zoom",
                min: 2,
                max: 20,
                step: 0.01,
                precision: 2
            },
            {
                key: "maximumDistance",
                type: "range",
                label: "Max zoom",
                min: 4,
                max: 30,
                step: 0.01,
                precision: 2
            },
            {
                key: "perspectiveScale",
                type: "range",
                label: "Perspective scale",
                min: 0.3,
                max: 2.4,
                step: 0.01,
                precision: 2
            },
            {
                key: "centerXRatio",
                type: "range",
                label: "Horizontal framing",
                min: 0.2,
                max: 0.8,
                step: 0.01,
                precision: 2
            },
            {
                key: "centerYRatio",
                type: "range",
                label: "Vertical framing",
                min: 0.2,
                max: 0.8,
                step: 0.01,
                precision: 2
            },
            {
                key: "autoRotate",
                type: "select",
                label: "Auto rotate",
                options: TOGGLE_OPTIONS
            },
            {
                key: "autoRotateSpeed",
                type: "range",
                label: "Auto rotate speed",
                min: -0.2,
                max: 0.2,
                step: 0.001,
                precision: 3
            }
        ]
    },
    {
        title: "Interaction And Depth",
        controls: [
            {
                key: "pointerRadius",
                type: "range",
                label: "Pointer radius",
                min: 10,
                max: 240,
                step: 1,
                precision: 0,
                unit: "px"
            },
            {
                key: "repulsionStrength",
                type: "range",
                label: "Repulsion strength",
                min: 0,
                max: 2,
                step: 0.01,
                precision: 2
            },
            {
                key: "displacementDecay",
                type: "range",
                label: "Displacement decay",
                min: 0.6,
                max: 0.99,
                step: 0.01,
                precision: 2
            },
            {
                key: "dragRotationYSpeed",
                type: "range",
                label: "Drag yaw speed",
                min: 0.0005,
                max: 0.02,
                step: 0.0001,
                precision: 4
            },
            {
                key: "dragRotationXSpeed",
                type: "range",
                label: "Drag pitch speed",
                min: 0.0005,
                max: 0.02,
                step: 0.0001,
                precision: 4
            },
            {
                key: "minimumRotationX",
                type: "range",
                label: "Min pitch clamp",
                min: -2.8,
                max: 0.4,
                step: 0.01,
                precision: 2
            },
            {
                key: "maximumRotationX",
                type: "range",
                label: "Max pitch clamp",
                min: -2.8,
                max: 0.8,
                step: 0.01,
                precision: 2
            },
            {
                key: "zoomSpeed",
                type: "range",
                label: "Wheel zoom speed",
                min: 0.001,
                max: 0.05,
                step: 0.001,
                precision: 3
            },
            {
                key: "dofStrength",
                type: "range",
                label: "Depth of field",
                min: 0,
                max: 0.5,
                step: 0.001,
                precision: 3
            },
            {
                key: "depthShading",
                type: "range",
                label: "Depth shading",
                min: 0,
                max: 1.8,
                step: 0.01,
                precision: 2
            },
            {
                key: "bottomFadeStart",
                type: "range",
                label: "Bottom fade start",
                min: 0.4,
                max: 1,
                step: 0.01,
                precision: 2
            },
            {
                key: "bottomFadeEnd",
                type: "range",
                label: "Bottom fade end",
                min: 0.5,
                max: 1,
                step: 0.01,
                precision: 2
            }
        ]
    },
    {
        title: "Pulse",
        controls: [
            {
                key: "pulseEnabled",
                type: "select",
                label: "Pulse",
                options: TOGGLE_OPTIONS
            },
            {
                key: "pulseColor",
                type: "color",
                label: "Pulse color"
            },
            {
                key: "pulseColorOpacity",
                type: "range",
                label: "Pulse color opacity",
                min: 0,
                max: 1,
                step: 0.01,
                precision: 2
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
                max: 6000,
                step: 10,
                precision: 0,
                unit: "ms"
            },
            {
                key: "pulseWidth",
                type: "range",
                label: "Pulse width",
                min: 10,
                max: 360,
                step: 1,
                precision: 0,
                unit: "px"
            },
            {
                key: "pulseBrightness",
                type: "range",
                label: "Pulse brightness",
                min: 0,
                max: 2.5,
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

const FUNNEL_REBUILD_KEYS = new Set([
    "ringCount",
    "pointsPerRing",
    "particleSizeMin",
    "particleSizeMax",
    "particleAlphaMin",
    "particleAlphaMax",
    "flowParticleCount",
    "flowSizeMin",
    "flowSizeMax",
    "flowAlphaMin",
    "flowAlphaMax",
    "flowSpeedMin",
    "flowSpeedMax"
]);

const FUNNEL_V2_REBUILD_KEYS = new Set([
    "radialSegments",
    "verticalSegments",
    "rectWidth",
    "rectHeight",
    "particleScaleMin",
    "particleScaleMax",
    "brightnessMin",
    "brightnessMax",
    "speedMin",
    "speedMax",
    "angleJitter",
    "verticalJitter"
]);

const FUNNEL_V2_CAMERA_RESET_KEYS = new Set([
    "cameraStartRotationX",
    "cameraStartRotationY",
    "cameraRestRotationX",
    "cameraRestRotationY",
    "cameraDistance",
    "minimumDistance",
    "maximumDistance"
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
        previewStageWrap: document.getElementById("preview-stage-wrap"),
        previewFrame: document.getElementById("preview-frame"),
        previewMount: document.getElementById("preview-mount"),
        previewSizeRange: document.getElementById("preview-size-range"),
        previewSizeInput: document.getElementById("preview-size-input"),
        previewSizeReset: document.getElementById("preview-size-reset"),
        resolutionLabel: document.getElementById("resolution-label"),
        loopLabel: document.getElementById("loop-label"),
        copyButton: document.getElementById("copy-button"),
        resetButton: document.getElementById("reset-button")
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
    let previewScalePercent = PREVIEW_SCALE_DEFAULT;
    let previewStageResizeObserver = null;

    populateAnimationOptions();
    syncPreviewScaleInputs();
    rebuildControls();
    recreatePreview();
    applyCurrentStateToView({ forceGeometry: true });
    syncPatternLibraryUI();

    if (typeof ResizeObserver !== "undefined") {
        previewStageResizeObserver = new ResizeObserver(() => {
            applyPreviewFrameSize();
        });
        previewStageResizeObserver.observe(elements.previewStageWrap);
    } else {
        window.addEventListener("resize", applyPreviewFrameSize);
    }

    elements.previewSizeRange.addEventListener("input", () => {
        setPreviewScale(elements.previewSizeRange.value);
    });

    elements.previewSizeInput.addEventListener("input", () => {
        setPreviewScale(elements.previewSizeInput.value);
    });

    elements.previewSizeReset.addEventListener("click", () => {
        setPreviewScale(PREVIEW_SCALE_DEFAULT);
    });

    elements.copyButton.addEventListener("click", async () => {
        const text = generateEmbedCode(state.settings, state.animationType);

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
            } else {
                copyTextFallback(text);
            }

            setPatternStatus("Embed code copied");
        } catch (error) {
            setPatternStatus("Copy failed. Use Ctrl+C instead.", true);
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
        setPatternStatus("Defaults restored");
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
        if (previewStageResizeObserver) {
            previewStageResizeObserver.disconnect();
        } else {
            window.removeEventListener("resize", applyPreviewFrameSize);
        }

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
        applyPreviewFrameSize();
        elements.resolutionLabel.textContent = `${renderWidth} x ${renderHeight}`;
        elements.loopLabel.textContent = getAnimationSummaryLabel(
            state.animationType,
            state.settings
        );
    }

    function syncPreviewScaleInputs() {
        elements.previewSizeRange.value = String(previewScalePercent);
        elements.previewSizeInput.value = String(previewScalePercent);
    }

    function setPreviewScale(value) {
        const numericValue = Number(value);

        if (!Number.isFinite(numericValue)) {
            syncPreviewScaleInputs();
            return;
        }

        previewScalePercent = clampInt(
            Math.round(numericValue),
            PREVIEW_SCALE_MIN,
            PREVIEW_SCALE_MAX
        );
        syncPreviewScaleInputs();
        applyPreviewFrameSize();
    }

    function applyPreviewFrameSize() {
        const stage = elements.previewStageWrap;

        if (!stage) {
            return;
        }

        const stageStyles = window.getComputedStyle(stage);
        const paddingX = parseFloat(stageStyles.paddingLeft) + parseFloat(stageStyles.paddingRight);
        const paddingY = parseFloat(stageStyles.paddingTop) + parseFloat(stageStyles.paddingBottom);
        const availableWidth = Math.max(1, stage.clientWidth - paddingX);
        const availableHeight = Math.max(1, stage.clientHeight - paddingY);
        const aspectRatio = state.settings.renderWidth / Math.max(state.settings.renderHeight, 1);
        const fitWidth = Math.min(availableWidth, availableHeight * aspectRatio);
        const minimumWidth = Math.min(220, fitWidth, availableWidth);
        const scaledWidth = clamp(
            fitWidth * (previewScalePercent / 100),
            minimumWidth,
            availableWidth
        );

        elements.previewFrame.style.width = `${scaledWidth}px`;
    }

    function applyCurrentStateToView(options = {}) {
        syncControls(controlRefs, state.settings);
        if (preview) {
            preview.applySettings(state.settings, options);
        }
        syncUI();
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
        this.renderer.setClearColor(
            this.settings.backgroundColor,
            getEffectiveBackgroundOpacity(this.settings)
        );
        this.renderer.setPixelRatio(1);
        this.renderer.setSize(this.settings.renderWidth, this.settings.renderHeight, false);
        this.mount.style.backgroundColor = getEffectiveBackgroundStyle(this.settings);
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
        this.wrap.style.cursor = "default";
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
        this.wrap.style.backgroundColor = getEffectiveBackgroundStyle(this.settings);
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
                const baseX = x + (Math.random() - 0.5) * jitter;
                const baseY = y + (Math.random() - 0.5) * jitter;
                const isInteractive = this.isInsideLogo(baseX, baseY);

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
                    isInteractive,
                    isBorder: isInteractive && this.isOnLogoBorder(baseX, baseY),
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
        }
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
            return false;
        }

        if (Number.isFinite(this.nextPulseTime) && currentTime < this.nextPulseTime) {
            return false;
        }

        this.activePulses.push({
            startTime: currentTime,
            originX: this.pointerX,
            originY: this.pointerY,
            maximumDistance: this.calculateMaximumPulseDistance(this.pointerX, this.pointerY)
        });
        this.nextPulseTime = currentTime + this.settings.pulseRepeatDelay;
        return true;
    }

    updateParticles(deltaMultiplier) {
        const pointerRadius = Math.max(
            this.settings.minimumPointerRadius,
            this.canvasWidth * this.settings.pointerRadiusRatio
        );
        const pointerRadiusSquared = pointerRadius * pointerRadius;

        for (const particle of this.particles) {
            if (particle.isInteractive && this.logoHoverActive) {
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
            const cursorReveal = particle.isInteractive ? this.getCursorMask(particle) : 0;
            const pulseReveal = particle.isInteractive
                ? this.getPulseReveal(particle, pulseStates)
                : 0;
            const reveal = Math.max(cursorReveal, pulseReveal);
            const visibility =
                particle.isInteractive
                    ? this.settings.maskEnabled === "on"
                        ? this.settings.baseVisibility +
                          (1 - this.settings.baseVisibility) * reveal
                        : 1
                    : this.settings.backgroundDotsOpacity;
            const flickerWave =
                (Math.sin(seconds * particle.flickerSpeed + particle.flickerPhase) + 1) * 0.5;
            const flickerMultiplier =
                1 - particle.flickerDepth + flickerWave * particle.flickerDepth * 2;
            const blinkWave = Math.max(
                0,
                Math.sin(seconds * particle.blinkSpeed + particle.blinkPhase)
            );
            const sharpBlink = Math.pow(blinkWave, 22) * particle.blinkStrength;
            const pulse = particle.isInteractive
                ? this.getPulseValues(particle, pulseStates)
                : { brightness: 0, sizeBoost: 0 };
            const baseContribution =
                (particle.baseAlpha * flickerMultiplier + sharpBlink) * visibility;
            const pulseContribution =
                pulse.brightness *
                this.settings.pulseColorOpacity *
                visibility;
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

class FunnelInteractionPreview {
    constructor(mount) {
        this.mount = mount;
        this.wrap = document.createElement("div");
        this.wrap.style.position = "relative";
        this.wrap.style.width = "100%";
        this.wrap.style.height = "100%";
        this.wrap.style.overflow = "hidden";
        this.wrap.style.cursor = "default";
        this.wrap.style.userSelect = "none";

        this.canvas = document.createElement("canvas");
        this.canvas.style.display = "block";
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.wrap.appendChild(this.canvas);
        this.mount.appendChild(this.wrap);

        this.ctx = this.canvas.getContext("2d", {
            alpha: true,
            desynchronized: true
        });
        this.settings = sanitizeSettings({ ...FUNNEL_DEFAULT_SETTINGS }, FUNNEL_ANIMATION);
        this.canvasWidth = 0;
        this.canvasHeight = 0;
        this.devicePixelRatio = 1;
        this.sceneMetrics = null;
        this.geometry = null;
        this.shellParticles = [];
        this.flowParticles = [];
        this.pointerX = 0;
        this.pointerY = 0;
        this.pointerActive = false;
        this.cursorRevealOpacity = 0;
        this.targetCursorRevealOpacity = 0;
        this.rotationX = 0;
        this.rotationY = 0;
        this.targetRotationX = 0;
        this.targetRotationY = 0;
        this.pulseActive = false;
        this.pulseStartTime = 0;
        this.pulseOriginX = 0;
        this.pulseOriginY = 0;
        this.pulseMaximumDistance = 0;
        this.nextPulseTime = Infinity;
        this.hoverPulseArmed = true;
        this.lastFrameTime = performance.now();
        this.animationFrameId = 0;

        this.animate = this.animate.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handlePointerEnter = this.handlePointerEnter.bind(this);
        this.handlePointerMove = this.handlePointerMove.bind(this);
        this.handlePointerLeave = this.handlePointerLeave.bind(this);
        this.handlePointerDown = this.handlePointerDown.bind(this);

        this.wrap.addEventListener("pointerenter", this.handlePointerEnter);
        this.wrap.addEventListener("pointermove", this.handlePointerMove);
        this.wrap.addEventListener("pointerleave", this.handlePointerLeave);
        this.wrap.addEventListener("pointerdown", this.handlePointerDown);

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
        const resizeChanged =
            options.forceGeometry ||
            previous.maximumPixelRatio !== nextSettings.maximumPixelRatio;
        const rebuildChanged =
            options.forceGeometry ||
            Array.from(FUNNEL_REBUILD_KEYS).some((key) => previous[key] !== nextSettings[key]);

        this.settings = { ...nextSettings };
        this.wrap.style.backgroundColor = getEffectiveBackgroundStyle(this.settings);
        this.targetCursorRevealOpacity =
            this.settings.maskEnabled === "on" && this.pointerActive ? 1 : 0;
        this.updateSceneGeometry();

        if (this.settings.pulseEnabled !== "on") {
            this.pulseActive = false;
            this.nextPulseTime = Infinity;
            this.hoverPulseArmed = false;
        } else if (previous.pulseEnabled !== "on") {
            this.hoverPulseArmed = true;
        }

        if (resizeChanged) {
            this.resizeCanvas();
            return;
        }

        if (rebuildChanged || !this.shellParticles.length || !this.flowParticles.length) {
            this.buildShellParticles();
            this.buildFlowParticles();
        }
    }

    handleResize() {
        this.resizeCanvas();
    }

    resizeCanvas() {
        const rect = this.mount.getBoundingClientRect();
        this.canvasWidth = Math.max(1, rect.width || 1);
        this.canvasHeight = Math.max(1, rect.height || 1);
        this.devicePixelRatio = Math.min(
            window.devicePixelRatio || 1,
            this.settings.maximumPixelRatio
        );
        this.canvas.width = Math.round(this.canvasWidth * this.devicePixelRatio);
        this.canvas.height = Math.round(this.canvasHeight * this.devicePixelRatio);
        this.ctx.setTransform(this.devicePixelRatio, 0, 0, this.devicePixelRatio, 0, 0);
        this.updateSceneGeometry();
        this.buildShellParticles();
        this.buildFlowParticles();
    }

    updateSceneGeometry() {
        const logicalWidth = Math.max(1, this.settings.renderWidth);
        const logicalHeight = Math.max(1, this.settings.renderHeight);
        const fitScale = Math.min(
            this.canvasWidth / logicalWidth,
            this.canvasHeight / logicalHeight
        );
        const sceneScale = Math.min(1, Math.max(0.0001, Number.isFinite(fitScale) ? fitScale : 1));
        const sceneWidth = logicalWidth * sceneScale;
        const sceneHeight = logicalHeight * sceneScale;

        this.sceneMetrics = {
            logicalWidth,
            logicalHeight,
            sceneScale,
            sceneWidth,
            sceneHeight,
            offsetX: (this.canvasWidth - sceneWidth) * 0.5,
            offsetY: (this.canvasHeight - sceneHeight) * 0.5
        };
        this.geometry = {
            centerX: logicalWidth * 0.5,
            centerY: logicalHeight * 0.48,
            topY: logicalHeight * this.settings.topYRatio,
            neckY: logicalHeight * this.settings.neckYRatio,
            outletY: logicalHeight * this.settings.outletYRatio,
            topRadius: logicalWidth * this.settings.topRadiusRatio,
            neckRadius: logicalWidth * this.settings.neckRadiusRatio,
            outletRadius: logicalWidth * this.settings.outletRadiusRatio,
            perspective: Math.max(logicalWidth, logicalHeight) * this.settings.perspectiveRatio
        };
    }

    getSceneMetrics() {
        return this.sceneMetrics;
    }

    getGeometry() {
        return this.geometry;
    }

    transformScenePoint(x, y, scale = 1) {
        const scene = this.getSceneMetrics();
        return {
            x: scene.offsetX + x * scene.sceneScale,
            y: scene.offsetY + y * scene.sceneScale,
            scale: scale * scene.sceneScale
        };
    }

    getCrossSection(progress) {
        const geometry = this.getGeometry();

        if (progress <= this.settings.neckProgress) {
            const normalized = progress / Math.max(this.settings.neckProgress, 0.0001);
            const curved = Math.pow(easeInOut(normalized), 0.78);
            return {
                y: lerp(geometry.topY, geometry.neckY, normalized),
                radius: lerp(geometry.topRadius, geometry.neckRadius, curved)
            };
        }

        const normalized =
            (progress - this.settings.neckProgress) /
            Math.max(1 - this.settings.neckProgress, 0.0001);
        return {
            y: lerp(geometry.neckY, geometry.outletY, normalized),
            radius: lerp(geometry.neckRadius, geometry.outletRadius, easeInOut(normalized))
        };
    }

    projectPoint(x, y, z) {
        const geometry = this.getGeometry();
        const angleX = this.settings.basePitch + this.rotationX;
        const angleY = this.rotationY;
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);

        const rotatedY = y * cosX - z * sinX;
        const rotatedZFromX = y * sinX + z * cosX;
        const rotatedX = x * cosY + rotatedZFromX * sinY;
        const rotatedZ = -x * sinY + rotatedZFromX * cosY;
        const perspectiveScale =
            geometry.perspective / Math.max(1, geometry.perspective - rotatedZ);
        const projected = this.transformScenePoint(
            geometry.centerX + rotatedX * perspectiveScale,
            geometry.centerY + rotatedY * perspectiveScale,
            perspectiveScale
        );

        return {
            x: projected.x,
            y: projected.y,
            z: rotatedZ,
            scale: projected.scale
        };
    }

    getShellProjection(particle, currentTime = performance.now()) {
        const section = this.getCrossSection(particle.progress);
        const seconds = currentTime * 0.001;
        const rotationAngle =
            particle.theta +
            seconds * this.settings.ringRotationSpeed * lerp(1.12, 0.72, particle.progress);
        const localX = Math.cos(rotationAngle) * section.radius;
        const localZ = Math.sin(rotationAngle) * section.radius;
        const projection = this.projectPoint(localX, section.y, localZ);
        const frontFactor = clamp(0.5 + projection.z / Math.max(1, section.radius * 2), 0, 1);
        return { ...projection, frontFactor };
    }

    buildShellParticles() {
        if (this.canvasWidth <= 0 || this.canvasHeight <= 0) {
            return;
        }

        this.shellParticles = [];

        for (let ringIndex = 0; ringIndex < this.settings.ringCount; ringIndex += 1) {
            const progress = ringIndex / Math.max(this.settings.ringCount - 1, 1);
            const ringOffset =
                ringIndex % 2 === 0 ? 0 : Math.PI / Math.max(this.settings.pointsPerRing, 1);

            for (let pointIndex = 0; pointIndex < this.settings.pointsPerRing; pointIndex += 1) {
                const theta =
                    (pointIndex / Math.max(this.settings.pointsPerRing, 1)) * Math.PI * 2 +
                    ringOffset +
                    randomBetween(-0.045, 0.045);

                this.shellParticles.push({
                    progress,
                    theta,
                    offsetX: 0,
                    offsetY: 0,
                    velocityX: 0,
                    velocityY: 0,
                    size: randomBetween(
                        this.settings.particleSizeMin,
                        this.settings.particleSizeMax
                    ),
                    alpha: randomBetween(
                        this.settings.particleAlphaMin,
                        this.settings.particleAlphaMax
                    ),
                    flickerPhase: Math.random() * Math.PI * 2,
                    flickerSpeed: randomBetween(0.6, 1.8),
                    blinkPhase: Math.random() * Math.PI * 2,
                    blinkSpeed: randomBetween(0.5, 1.4)
                });
            }
        }
    }

    resetFlowParticle(particle, initial = false) {
        particle.progress = initial ? randomBetween(-0.22, 1.18) : randomBetween(-0.18, -0.02);
        particle.theta = randomBetween(0, Math.PI * 2);
        particle.radial = Math.sqrt(Math.random()) * 0.74;
        particle.speed = randomBetween(this.settings.flowSpeedMin, this.settings.flowSpeedMax);
        particle.size = randomBetween(this.settings.flowSizeMin, this.settings.flowSizeMax);
        particle.alpha = randomBetween(this.settings.flowAlphaMin, this.settings.flowAlphaMax);
        particle.phase = Math.random() * Math.PI * 2;
        particle.entryXRatio = randomBetween(0.22, 0.78);
        particle.entryYOffset = randomBetween(0.08, 0.2);
    }

    buildFlowParticles() {
        if (this.canvasWidth <= 0 || this.canvasHeight <= 0) {
            return;
        }

        this.flowParticles = [];

        for (let index = 0; index < this.settings.flowParticleCount; index += 1) {
            const particle = {};
            this.resetFlowParticle(particle, true);
            this.flowParticles.push(particle);
        }
    }

    getFlowProjection(particle, currentTime) {
        const rawProgress = particle.progress;
        const progress = clamp(rawProgress, 0, 1);
        const section = this.getCrossSection(progress);
        const scene = this.getSceneMetrics();
        const seconds = currentTime * 0.001;
        const swirl =
            particle.theta +
            seconds * this.settings.flowSwirlSpeed +
            particle.phase +
            progress * this.settings.flowTwistStrength;
        const radius = section.radius * particle.radial * 0.72;
        const localX = Math.cos(swirl) * radius;
        const localZ = Math.sin(swirl) * radius;
        let projection = this.projectPoint(localX, section.y, localZ);
        const frontFactor = clamp(0.5 + projection.z / Math.max(1, section.radius * 2), 0, 1);

        if (rawProgress < 0) {
            const entryProgress = easeInOut(clamp((particle.progress + 0.22) / 0.22, 0, 1));
            const startX =
                scene.offsetX + scene.logicalWidth * particle.entryXRatio * scene.sceneScale;
            const startY =
                scene.offsetY - scene.logicalHeight * particle.entryYOffset * scene.sceneScale;

            return {
                x: lerp(startX, projection.x, entryProgress),
                y: lerp(startY, projection.y, entryProgress),
                z: projection.z,
                scale: lerp(0.72 * scene.sceneScale, projection.scale, entryProgress),
                frontFactor
            };
        }

        if (rawProgress > 1) {
            const outletProgress = clamp((rawProgress - 1) / 0.18, 0, 1);
            const outletAngle = swirl + outletProgress * 1.1;
            const outletRadius = Math.max(
                0,
                section.radius * particle.radial * 0.22 * (1 - outletProgress)
            );
            const outletX = Math.cos(outletAngle) * outletRadius;
            const outletZ = Math.sin(outletAngle) * outletRadius;
            const outletY = section.y + outletProgress * scene.logicalHeight * 0.16;
            projection = this.projectPoint(outletX, outletY, outletZ);

            return {
                ...projection,
                frontFactor: clamp(
                    0.5 + projection.z / Math.max(1, section.radius * 2),
                    0,
                    1
                )
            };
        }

        return { ...projection, frontFactor };
    }

    updatePointer(event) {
        const rect = this.wrap.getBoundingClientRect();
        const scene = this.getSceneMetrics();
        this.pointerX = event.clientX - rect.left;
        this.pointerY = event.clientY - rect.top;

        const normalizedX =
            clamp(
                (this.pointerX - scene.offsetX) / Math.max(scene.sceneWidth, 1),
                0,
                1
            ) *
                2 -
            1;
        const normalizedY =
            clamp(
                (this.pointerY - scene.offsetY) / Math.max(scene.sceneHeight, 1),
                0,
                1
            ) *
                2 -
            1;

        this.targetRotationY = normalizedX * this.settings.maximumRotationY;
        this.targetRotationX = -normalizedY * this.settings.maximumRotationX;
    }

    updateRotation() {
        this.rotationX +=
            (this.targetRotationX - this.rotationX) * this.settings.rotationSpeed;
        this.rotationY +=
            (this.targetRotationY - this.rotationY) * this.settings.rotationSpeed;
    }

    handlePointerEnter(event) {
        this.updatePointer(event);
        this.pointerActive = true;
        this.targetCursorRevealOpacity = this.settings.maskEnabled === "on" ? 1 : 0;
        if (this.hoverPulseArmed) {
            this.triggerPulse(performance.now());
        }
    }

    handlePointerMove(event) {
        this.updatePointer(event);
        this.pointerActive = true;
        this.targetCursorRevealOpacity = this.settings.maskEnabled === "on" ? 1 : 0;

        if (this.hoverPulseArmed) {
            this.triggerPulse(performance.now());
        }
    }

    handlePointerLeave() {
        this.pointerActive = false;
        this.targetCursorRevealOpacity = 0;
        this.targetRotationX = 0;
        this.targetRotationY = 0;
        this.nextPulseTime = Infinity;
        this.hoverPulseArmed = true;
    }

    handlePointerDown(event) {
        this.updatePointer(event);
        this.pointerActive = true;
        this.targetCursorRevealOpacity = this.settings.maskEnabled === "on" ? 1 : 0;
        this.triggerPulse(performance.now());
    }

    calculateMaximumPulseDistance(originX = this.pointerX, originY = this.pointerY) {
        const scene = this.getSceneMetrics();
        const minX = scene.offsetX;
        const maxX = scene.offsetX + scene.sceneWidth;
        const minY = scene.offsetY;
        const maxY = scene.offsetY + scene.sceneHeight;

        return Math.max(
            Math.hypot(originX - minX, originY - minY),
            Math.hypot(originX - maxX, originY - minY),
            Math.hypot(originX - minX, originY - maxY),
            Math.hypot(originX - maxX, originY - maxY)
        );
    }

    triggerPulse(currentTime) {
        if (this.settings.pulseEnabled !== "on") {
            this.hoverPulseArmed = false;
            return;
        }

        this.pulseOriginX = this.pointerX;
        this.pulseOriginY = this.pointerY;
        this.pulseStartTime = currentTime;
        this.pulseMaximumDistance = this.calculateMaximumPulseDistance(
            this.pointerX,
            this.pointerY
        );
        this.pulseActive = true;
        this.nextPulseTime = currentTime + this.settings.pulseRepeatDelay;
        this.hoverPulseArmed = false;
    }

    getPulseState(currentTime) {
        if (this.settings.pulseEnabled !== "on" || !this.pulseActive) {
            return null;
        }

        const progress =
            (currentTime - this.pulseStartTime) / Math.max(this.settings.pulseDuration, 1);

        if (progress >= 1) {
            this.pulseActive = false;
            return null;
        }

        const easedProgress = 1 - Math.pow(1 - progress, 2);
        const fadeProgress = clamp((progress - 0.72) / 0.28, 0, 1);
        const lifeFade = 1 - easeInOut(fadeProgress);

        return {
            radius:
                easedProgress *
                (this.pulseMaximumDistance + this.settings.pulseRevealWidth),
            lifeFade
        };
    }

    getDistanceFromPulse(x, y) {
        return Math.hypot(x - this.pulseOriginX, y - this.pulseOriginY);
    }

    getCursorReveal(x, y) {
        if (this.settings.maskEnabled !== "on" || this.cursorRevealOpacity <= 0.001) {
            return 0;
        }

        const scene = this.getSceneMetrics();
        const radius = Math.max(
            this.settings.minimumCursorRevealRadius,
            scene.sceneWidth * this.settings.cursorRevealRadiusRatio
        );
        const innerRadius = radius * (1 - this.settings.cursorRevealSoftness);
        const distance = Math.hypot(x - this.pointerX, y - this.pointerY);

        if (distance <= innerRadius) {
            return this.cursorRevealOpacity * this.settings.cursorVisibilityStrength;
        }

        if (distance >= radius) {
            return 0;
        }

        const normalized =
            1 - (distance - innerRadius) / Math.max(radius - innerRadius, 0.0001);
        return (
            easeInOut(clamp(normalized, 0, 1)) *
            this.cursorRevealOpacity *
            this.settings.cursorVisibilityStrength
        );
    }

    getPulseReveal(distance, pulseState) {
        if (this.settings.maskEnabled !== "on" || !pulseState) {
            return 0;
        }

        const distanceFromPulse = Math.abs(distance - pulseState.radius);
        let pulseStrength = Math.max(
            0,
            1 - distanceFromPulse / Math.max(this.settings.pulseRevealWidth, 0.0001)
        );
        pulseStrength = easeInOut(pulseStrength);

        let trail = 0;
        if (distance < pulseState.radius) {
            const trailDistance = pulseState.radius - distance;
            trail = Math.max(
                0,
                1 -
                    trailDistance /
                        Math.max(this.settings.pulseRevealWidth * 2.7, 0.0001)
            );
            trail *= this.settings.pulseRevealTrail;
        }

        return clamp(
            (pulseStrength * this.settings.pulseRevealStrength + trail) *
                pulseState.lifeFade,
            0,
            1
        );
    }

    getPulseAppearance(distance, pulseState) {
        if (this.settings.pulseEnabled !== "on" || !pulseState) {
            return { brightness: 0, sizeBoost: 0, mix: 0 };
        }

        const distanceFromPulse = Math.abs(distance - pulseState.radius);
        let pulseStrength = Math.max(
            0,
            1 - distanceFromPulse / Math.max(this.settings.pulseWidth, 0.0001)
        );
        pulseStrength = easeInOut(pulseStrength);

        const behindWave =
            distance < pulseState.radius
                ? Math.max(
                      0,
                      1 -
                          (pulseState.radius - distance) /
                              Math.max(this.settings.pulseWidth * 3, 0.0001)
                  )
                : 0;
        const trail = behindWave * this.settings.pulseRevealTrail * 0.6 * pulseState.lifeFade;
        const strength = pulseStrength * pulseState.lifeFade;

        return {
            brightness: strength * this.settings.pulseBrightness + trail,
            sizeBoost: strength * this.settings.pulseSizeBoost,
            mix: clamp(strength + trail, 0, 1)
        };
    }

    updateShellParticles(deltaMultiplier, currentTime) {
        const scene = this.getSceneMetrics();
        const pointerRadius = Math.max(
            this.settings.minimumPointerRadius,
            scene.sceneWidth * this.settings.pointerRadiusRatio
        );
        const pointerRadiusSquared = pointerRadius * pointerRadius;
        const frameFriction = Math.pow(this.settings.friction, deltaMultiplier);

        for (const particle of this.shellParticles) {
            const projection = this.getShellProjection(particle, currentTime);
            const renderX = projection.x + particle.offsetX;
            const renderY = projection.y + particle.offsetY;

            if (this.pointerActive) {
                const deltaX = renderX - this.pointerX;
                const deltaY = renderY - this.pointerY;
                const distanceSquared = deltaX * deltaX + deltaY * deltaY;

                if (distanceSquared > 0.001 && distanceSquared < pointerRadiusSquared) {
                    const distance = Math.sqrt(distanceSquared);
                    const influence = 1 - distance / pointerRadius;
                    const force =
                        influence *
                        influence *
                        this.settings.repulsionStrength *
                        deltaMultiplier;

                    particle.velocityX += (deltaX / distance) * force;
                    particle.velocityY += (deltaY / distance) * force;
                }
            }

            particle.velocityX +=
                -particle.offsetX * this.settings.springStrength * deltaMultiplier;
            particle.velocityY +=
                -particle.offsetY * this.settings.springStrength * deltaMultiplier;
            particle.velocityX *= frameFriction;
            particle.velocityY *= frameFriction;
            particle.offsetX += particle.velocityX * deltaMultiplier;
            particle.offsetY += particle.velocityY * deltaMultiplier;
        }
    }

    updateFlowParticles(deltaMultiplier) {
        for (const particle of this.flowParticles) {
            const acceleration =
                1 +
                Math.pow(clamp((particle.progress - 0.62) / 0.38, 0, 1), 2) *
                    this.settings.flowAcceleration;

            particle.progress += particle.speed * acceleration * deltaMultiplier * 0.01;

            if (particle.progress > 1.18) {
                this.resetFlowParticle(particle);
            }
        }
    }

    drawParticle(x, y, size, alpha, rgb) {
        this.ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

        if (this.settings.particleShape === "circle") {
            this.ctx.beginPath();
            this.ctx.arc(x, y, size, 0, Math.PI * 2);
            this.ctx.fill();
            return;
        }

        this.ctx.fillRect(x - size, y - size, size * 2, size * 2);
    }

    drawShellParticles(currentTime, pulseState, drawFront, shellRgb, pulseRgb) {
        const seconds = currentTime * 0.001;

        for (const particle of this.shellParticles) {
            const projection = this.getShellProjection(particle, currentTime);
            const isFront = projection.frontFactor >= 0.5;

            if (isFront !== drawFront) {
                continue;
            }

            const renderX = projection.x + particle.offsetX;
            const renderY = projection.y + particle.offsetY;
            const pulseDistance = this.getDistanceFromPulse(renderX, renderY);
            const cursorReveal = this.getCursorReveal(renderX, renderY);
            const pulseReveal = this.getPulseReveal(pulseDistance, pulseState);
            const reveal = Math.max(cursorReveal, pulseReveal);
            const visibility =
                this.settings.maskEnabled === "on"
                    ? this.settings.baseVisibility +
                      (1 - this.settings.baseVisibility) * reveal
                    : 1;
            const flicker =
                0.78 +
                (Math.sin(seconds * particle.flickerSpeed + particle.flickerPhase) + 1) * 0.18;
            const blinkWave = Math.max(
                0,
                Math.sin(seconds * particle.blinkSpeed + particle.blinkPhase)
            );
            const blink = Math.pow(blinkWave, 24);
            const pulse = this.getPulseAppearance(pulseDistance, pulseState);
            const depthBrightness = lerp(0.5, 1.2, projection.frontFactor);
            const baseContribution = particle.alpha * flicker * depthBrightness + blink * 0.18;
            const pulseContribution =
                pulse.brightness * this.settings.pulseColorOpacity;
            const alpha = Math.min(1, (baseContribution + pulseContribution) * visibility);
            const size =
                particle.size *
                projection.scale *
                lerp(0.8, 1.18, projection.frontFactor) *
                (1 + blink * 0.55) *
                (1 + pulse.sizeBoost);
            const pulseMix =
                alpha > 0 ? clamp((pulseContribution * visibility) / alpha, 0, 1) : 0;
            const rgb = {
                r: Math.round(lerp(shellRgb.r, pulseRgb.r, pulseMix)),
                g: Math.round(lerp(shellRgb.g, pulseRgb.g, pulseMix)),
                b: Math.round(lerp(shellRgb.b, pulseRgb.b, pulseMix))
            };

            this.drawParticle(renderX, renderY, size, alpha, rgb);
        }
    }

    drawFlowParticles(currentTime, pulseState, flowRgb, pulseRgb) {
        for (const particle of this.flowParticles) {
            const projection = this.getFlowProjection(particle, currentTime);
            const pulseDistance = this.getDistanceFromPulse(projection.x, projection.y);
            const cursorReveal = this.getCursorReveal(projection.x, projection.y);
            const pulseReveal = this.getPulseReveal(pulseDistance, pulseState);
            const reveal = Math.max(cursorReveal, pulseReveal);
            const visibility = this.settings.maskEnabled === "on" ? 0.44 + reveal * 0.56 : 1;
            const pulse = this.getPulseAppearance(pulseDistance, pulseState);
            const depthBrightness = lerp(0.72, 1.22, projection.frontFactor);
            const entryFade =
                particle.progress < 0
                    ? easeInOut(clamp((particle.progress + 0.22) / 0.22, 0, 1))
                    : 1;
            const exitFade =
                particle.progress > 0.9
                    ? 1 - easeInOut(clamp((particle.progress - 0.9) / 0.28, 0, 1))
                    : 1;
            const streamFade = entryFade * exitFade;
            const baseContribution = particle.alpha * depthBrightness;
            const pulseContribution =
                pulse.brightness * this.settings.pulseColorOpacity;
            const alpha = Math.min(
                1,
                (baseContribution + pulseContribution) * visibility * streamFade
            );
            const size =
                particle.size *
                projection.scale *
                lerp(0.86, 1.18, projection.frontFactor) *
                (1 + pulse.sizeBoost) *
                lerp(0.86, 1, streamFade);
            const pulseMix =
                alpha > 0 ? clamp((pulseContribution * visibility) / alpha, 0, 1) : 0;
            const rgb = {
                r: Math.round(lerp(flowRgb.r, pulseRgb.r, pulseMix)),
                g: Math.round(lerp(flowRgb.g, pulseRgb.g, pulseMix)),
                b: Math.round(lerp(flowRgb.b, pulseRgb.b, pulseMix))
            };

            this.drawParticle(projection.x, projection.y, size, alpha, rgb);
        }
    }

    draw(currentTime, pulseState) {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.cursorRevealOpacity +=
            (this.targetCursorRevealOpacity - this.cursorRevealOpacity) *
            this.settings.cursorRevealFadeSpeed;

        const shellRgb = hexToRgb(this.settings.particleColor);
        const flowRgb = hexToRgb(this.settings.flowColor);
        const pulseRgb = hexToRgb(this.settings.pulseColor);

        this.drawShellParticles(currentTime, pulseState, false, shellRgb, pulseRgb);
        this.drawFlowParticles(currentTime, pulseState, flowRgb, pulseRgb);
        this.drawShellParticles(currentTime, pulseState, true, shellRgb, pulseRgb);
    }

    animate(currentTime) {
        this.animationFrameId = window.requestAnimationFrame(this.animate);
        const elapsed = currentTime - this.lastFrameTime;
        this.lastFrameTime = currentTime;
        const deltaMultiplier = Math.min(elapsed / 16.667 || 1, 2);

        this.updateRotation();

        if (
            this.settings.pulseEnabled === "on" &&
            this.pointerActive &&
            currentTime >= this.nextPulseTime
        ) {
            this.triggerPulse(currentTime);
        }

        const pulseState = this.getPulseState(currentTime);
        this.updateShellParticles(deltaMultiplier, currentTime);
        this.updateFlowParticles(deltaMultiplier);
        this.draw(currentTime, pulseState);
    }

    destroy() {
        window.cancelAnimationFrame(this.animationFrameId);
        this.wrap.removeEventListener("pointerenter", this.handlePointerEnter);
        this.wrap.removeEventListener("pointermove", this.handlePointerMove);
        this.wrap.removeEventListener("pointerleave", this.handlePointerLeave);
        this.wrap.removeEventListener("pointerdown", this.handlePointerDown);

        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        } else {
            window.removeEventListener("resize", this.handleResize);
        }
    }
}

class FunnelInteractionV2Preview {
    constructor(mount) {
        this.mount = mount;
        this.wrap = document.createElement("div");
        this.wrap.style.position = "relative";
        this.wrap.style.width = "100%";
        this.wrap.style.height = "100%";
        this.wrap.style.overflow = "hidden";
        this.wrap.style.userSelect = "none";
        this.wrap.style.touchAction = "none";

        this.canvas = document.createElement("canvas");
        this.canvas.style.display = "block";
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.canvas.style.cursor = "grab";
        this.canvas.style.touchAction = "none";
        this.wrap.appendChild(this.canvas);
        this.mount.appendChild(this.wrap);

        this.ctx = this.canvas.getContext("2d", {
            alpha: true,
            desynchronized: true
        });
        this.settings = sanitizeSettings({ ...FUNNEL_V2_DEFAULT_SETTINGS }, FUNNEL_V2_ANIMATION);
        this.canvasWidth = 0;
        this.canvasHeight = 0;
        this.devicePixelRatio = 1;
        this.centerX = 0;
        this.centerY = 0;
        this.time = 0;
        this.lastFrameTime = performance.now();
        this.animationFrameId = 0;
        this.particles = [];
        this.pointer = {
            down: false,
            previousX: 0,
            previousY: 0,
            currentX: -9999,
            currentY: -9999,
            active: false
        };
        this.pulseActive = false;
        this.pulseStartTime = 0;
        this.pulseOriginX = 0;
        this.pulseOriginY = 0;
        this.pulseMaximumDistance = 0;
        this.nextPulseTime = Infinity;
        this.hoverPulseArmed = true;
        this.camera = {
            rotationX: this.settings.cameraStartRotationX,
            rotationY: this.settings.cameraStartRotationY,
            targetRotationX: this.settings.cameraRestRotationX,
            targetRotationY: this.settings.cameraRestRotationY,
            distance: this.settings.cameraDistance,
            targetDistance: this.settings.cameraDistance,
            perspective: 900
        };

        this.animate = this.animate.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handlePointerEnter = this.handlePointerEnter.bind(this);
        this.handlePointerDown = this.handlePointerDown.bind(this);
        this.handlePointerMove = this.handlePointerMove.bind(this);
        this.handlePointerLeave = this.handlePointerLeave.bind(this);
        this.handlePointerRelease = this.handlePointerRelease.bind(this);
        this.handleWheel = this.handleWheel.bind(this);

        this.canvas.addEventListener("pointerenter", this.handlePointerEnter);
        this.canvas.addEventListener("pointerdown", this.handlePointerDown);
        this.canvas.addEventListener("pointermove", this.handlePointerMove);
        this.canvas.addEventListener("pointerleave", this.handlePointerLeave);
        this.canvas.addEventListener("pointerup", this.handlePointerRelease);
        this.canvas.addEventListener("pointercancel", this.handlePointerRelease);
        this.canvas.addEventListener("wheel", this.handleWheel, { passive: false });

        if (typeof ResizeObserver !== "undefined") {
            this.resizeObserver = new ResizeObserver(this.handleResize);
            this.resizeObserver.observe(this.mount);
        } else {
            window.addEventListener("resize", this.handleResize);
        }

        const backgroundStyle = getEffectiveBackgroundStyle(this.settings);
        this.wrap.style.backgroundColor = backgroundStyle;
        this.canvas.style.backgroundColor = backgroundStyle;
        this.resizeCanvas();
        this.resetCamera();
        this.animationFrameId = window.requestAnimationFrame(this.animate);
    }

    applySettings(nextSettings, options = {}) {
        const previous = this.settings;
        const resizeChanged =
            options.forceGeometry ||
            previous.maximumPixelRatio !== nextSettings.maximumPixelRatio;
        const rebuildChanged =
            options.forceGeometry ||
            Array.from(FUNNEL_V2_REBUILD_KEYS).some((key) => previous[key] !== nextSettings[key]);
        const cameraResetChanged =
            options.forceGeometry ||
            Array.from(FUNNEL_V2_CAMERA_RESET_KEYS).some(
                (key) => previous[key] !== nextSettings[key]
            );

        this.settings = { ...nextSettings };
        const backgroundStyle = getEffectiveBackgroundStyle(this.settings);
        this.wrap.style.backgroundColor = backgroundStyle;
        this.canvas.style.backgroundColor = backgroundStyle;

        if (cameraResetChanged) {
            this.resetCamera();
        } else {
            this.syncCameraBounds();
        }

        if (this.settings.pulseEnabled !== "on") {
            this.pulseActive = false;
            this.nextPulseTime = Infinity;
            this.hoverPulseArmed = false;
        } else if (previous.pulseEnabled !== "on") {
            this.hoverPulseArmed = true;
        } else if (!this.pointer.active) {
            this.hoverPulseArmed = true;
        }

        if (resizeChanged) {
            this.resizeCanvas();
            return;
        }

        this.updateViewportMetrics();

        if (rebuildChanged || !this.particles.length) {
            this.buildParticles();
        }
    }

    getDistanceBounds() {
        return {
            min: Math.min(this.settings.minimumDistance, this.settings.maximumDistance),
            max: Math.max(this.settings.minimumDistance, this.settings.maximumDistance)
        };
    }

    getRotationBounds() {
        return {
            min: Math.min(this.settings.minimumRotationX, this.settings.maximumRotationX),
            max: Math.max(this.settings.minimumRotationX, this.settings.maximumRotationX)
        };
    }

    syncCameraBounds() {
        const distanceBounds = this.getDistanceBounds();
        const rotationBounds = this.getRotationBounds();
        this.camera.distance = clamp(this.camera.distance, distanceBounds.min, distanceBounds.max);
        this.camera.targetDistance = clamp(
            this.camera.targetDistance,
            distanceBounds.min,
            distanceBounds.max
        );
        this.camera.rotationX = clamp(this.camera.rotationX, rotationBounds.min, rotationBounds.max);
        this.camera.targetRotationX = clamp(
            this.camera.targetRotationX,
            rotationBounds.min,
            rotationBounds.max
        );
    }

    resetCamera() {
        const distanceBounds = this.getDistanceBounds();
        const rotationBounds = this.getRotationBounds();
        this.camera.rotationX = clamp(
            this.settings.cameraStartRotationX,
            rotationBounds.min,
            rotationBounds.max
        );
        this.camera.rotationY = this.settings.cameraStartRotationY;
        this.camera.targetRotationX = clamp(
            this.settings.cameraRestRotationX,
            rotationBounds.min,
            rotationBounds.max
        );
        this.camera.targetRotationY = this.settings.cameraRestRotationY;
        this.camera.distance = clamp(
            this.settings.cameraDistance,
            distanceBounds.min,
            distanceBounds.max
        );
        this.camera.targetDistance = this.camera.distance;
        this.updateViewportMetrics();
    }

    handleResize() {
        this.resizeCanvas();
    }

    resizeCanvas() {
        const rect = this.mount.getBoundingClientRect();
        this.canvasWidth = Math.max(1, rect.width || 1);
        this.canvasHeight = Math.max(1, rect.height || 1);
        this.devicePixelRatio = Math.min(
            window.devicePixelRatio || 1,
            this.settings.maximumPixelRatio
        );
        this.canvas.width = Math.round(this.canvasWidth * this.devicePixelRatio);
        this.canvas.height = Math.round(this.canvasHeight * this.devicePixelRatio);
        this.ctx.setTransform(this.devicePixelRatio, 0, 0, this.devicePixelRatio, 0, 0);
        this.updateViewportMetrics();
        this.buildParticles();
    }

    updateViewportMetrics() {
        this.centerX = this.canvasWidth * this.settings.centerXRatio;
        this.centerY = this.canvasHeight * this.settings.centerYRatio;
        this.camera.perspective =
            Math.max(1, Math.min(this.canvasWidth, this.canvasHeight)) *
            this.settings.perspectiveScale;
        this.syncCameraBounds();
    }

    smoothstep(edge0, edge1, value) {
        const denominator = Math.max(edge1 - edge0, 0.0001);
        const normalized = clamp((value - edge0) / denominator, 0, 1);
        return normalized * normalized * (3 - 2 * normalized);
    }

    getFunnelRadius(progress) {
        const upperContraction = Math.pow(1 - progress, this.settings.upperCurvePower);
        let radius =
            this.settings.throatRadius +
            (this.settings.topRadius - this.settings.throatRadius) * upperContraction;

        const lowerBlend = this.smoothstep(this.settings.lowerBlendStart, 1, progress);
        radius +=
            (this.settings.bottomRadius - this.settings.throatRadius) * lowerBlend;
        return radius;
    }

    buildParticles() {
        if (this.canvasWidth <= 0 || this.canvasHeight <= 0) {
            return;
        }

        this.particles = [];

        for (let radialIndex = 0; radialIndex < this.settings.radialSegments; radialIndex += 1) {
            const baseAngle =
                (radialIndex / Math.max(this.settings.radialSegments, 1)) * Math.PI * 2;

            for (
                let verticalIndex = 0;
                verticalIndex < this.settings.verticalSegments;
                verticalIndex += 1
            ) {
                const progress =
                    verticalIndex / Math.max(this.settings.verticalSegments - 1, 1);
                const stagger =
                    radialIndex % 2 === 0
                        ? 0
                        : 0.5 / Math.max(this.settings.verticalSegments, 1);
                const normalizedProgress = Math.min(1, progress + stagger);

                this.particles.push({
                    baseAngle,
                    baseT: normalizedProgress,
                    angleOffset:
                        (Math.random() - 0.5) * this.settings.angleJitter,
                    tOffset: (Math.random() - 0.5) * this.settings.verticalJitter,
                    width:
                        this.settings.rectWidth *
                        randomBetween(
                            this.settings.particleScaleMin,
                            this.settings.particleScaleMax
                        ),
                    height:
                        this.settings.rectHeight *
                        randomBetween(
                            this.settings.particleScaleMin,
                            this.settings.particleScaleMax
                        ),
                    brightness: randomBetween(
                        this.settings.brightnessMin,
                        this.settings.brightnessMax
                    ),
                    speed: randomBetween(this.settings.speedMin, this.settings.speedMax),
                    phase: Math.random() * Math.PI * 2,
                    dispX: 0,
                    dispY: 0,
                    dispZ: 0
                });
            }
        }
    }

    rotatePoint(x, y, z, rotationX, rotationY) {
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        return { x: x1, y: y1, z: z2 };
    }

    projectPoint(point) {
        const depth = this.camera.distance - point.z;

        if (depth <= 0.1) {
            return null;
        }

        const scale = this.camera.perspective / depth;
        return {
            x: this.centerX + (point.x - this.settings.cameraPositionX) * scale,
            y: this.centerY - (point.y - this.settings.cameraPositionY) * scale,
            z: point.z,
            depth,
            scale
        };
    }

    updatePointerPosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        this.pointer.currentX = event.clientX - rect.left;
        this.pointer.currentY = event.clientY - rect.top;
        this.pointer.active = true;
    }

    handlePointerEnter(event) {
        this.updatePointerPosition(event);
        this.canvas.style.cursor = this.pointer.down ? "grabbing" : "grab";

        if (this.hoverPulseArmed) {
            this.triggerPulse(performance.now());
        }
    }

    handlePointerDown(event) {
        this.updatePointerPosition(event);
        this.pointer.down = true;
        this.pointer.previousX = event.clientX;
        this.pointer.previousY = event.clientY;
        this.canvas.style.cursor = "grabbing";
        this.triggerPulse(performance.now());

        if (this.canvas.setPointerCapture) {
            this.canvas.setPointerCapture(event.pointerId);
        }
    }

    handlePointerMove(event) {
        this.updatePointerPosition(event);

        if (this.hoverPulseArmed) {
            this.triggerPulse(performance.now());
        }

        if (!this.pointer.down) {
            return;
        }

        const deltaX = event.clientX - this.pointer.previousX;
        const deltaY = event.clientY - this.pointer.previousY;
        const rotationBounds = this.getRotationBounds();

        this.camera.targetRotationY += deltaX * this.settings.dragRotationYSpeed;
        this.camera.targetRotationX = clamp(
            this.camera.targetRotationX + deltaY * this.settings.dragRotationXSpeed,
            rotationBounds.min,
            rotationBounds.max
        );

        this.pointer.previousX = event.clientX;
        this.pointer.previousY = event.clientY;
    }

    handlePointerLeave() {
        if (!this.pointer.down) {
            this.pointer.active = false;
            this.hoverPulseArmed = true;
        }

        this.nextPulseTime = Infinity;
        this.canvas.style.cursor = this.pointer.down ? "grabbing" : "grab";
    }

    handlePointerRelease(event) {
        this.pointer.down = false;
        this.canvas.style.cursor = "grab";

        if (
            this.canvas.releasePointerCapture &&
            this.canvas.hasPointerCapture &&
            this.canvas.hasPointerCapture(event.pointerId)
        ) {
            this.canvas.releasePointerCapture(event.pointerId);
        }
    }

    handleWheel(event) {
        event.preventDefault();
        const distanceBounds = this.getDistanceBounds();
        this.camera.targetDistance = clamp(
            this.camera.targetDistance + event.deltaY * this.settings.zoomSpeed,
            distanceBounds.min,
            distanceBounds.max
        );
    }

    calculateMaximumPulseDistance(
        originX = this.pointer.currentX,
        originY = this.pointer.currentY
    ) {
        return Math.max(
            Math.hypot(originX, originY),
            Math.hypot(originX - this.canvasWidth, originY),
            Math.hypot(originX, originY - this.canvasHeight),
            Math.hypot(originX - this.canvasWidth, originY - this.canvasHeight)
        );
    }

    triggerPulse(currentTime) {
        if (this.settings.pulseEnabled !== "on") {
            this.hoverPulseArmed = false;
            return;
        }

        this.pulseOriginX = this.pointer.currentX;
        this.pulseOriginY = this.pointer.currentY;
        this.pulseStartTime = currentTime;
        this.pulseMaximumDistance = this.calculateMaximumPulseDistance();
        this.pulseActive = true;
        this.nextPulseTime = currentTime + this.settings.pulseRepeatDelay;
        this.hoverPulseArmed = false;
    }

    getPulseState(currentTime) {
        if (this.settings.pulseEnabled !== "on" || !this.pulseActive) {
            return null;
        }

        const progress =
            (currentTime - this.pulseStartTime) / Math.max(this.settings.pulseDuration, 1);

        if (progress >= 1) {
            this.pulseActive = false;
            return null;
        }

        const easedProgress = 1 - Math.pow(1 - progress, 2);
        const fadeProgress = clamp((progress - 0.72) / 0.28, 0, 1);
        const lifeFade = 1 - easeInOut(fadeProgress);

        return {
            radius: easedProgress * (this.pulseMaximumDistance + this.settings.pulseWidth),
            lifeFade
        };
    }

    getPulseAppearance(distance, pulseState) {
        if (this.settings.pulseEnabled !== "on" || !pulseState) {
            return { brightness: 0, sizeBoost: 0, mix: 0 };
        }

        const distanceFromPulse = Math.abs(distance - pulseState.radius);
        let pulseStrength = Math.max(
            0,
            1 - distanceFromPulse / Math.max(this.settings.pulseWidth, 0.0001)
        );
        pulseStrength = easeInOut(pulseStrength);

        const behindWave =
            distance < pulseState.radius
                ? Math.max(
                      0,
                      1 -
                          (pulseState.radius - distance) /
                              Math.max(this.settings.pulseWidth * 2.6, 0.0001)
                  )
                : 0;
        const trail = behindWave * 0.3 * pulseState.lifeFade;
        const strength = pulseStrength * pulseState.lifeFade;

        return {
            brightness: strength * this.settings.pulseBrightness + trail,
            sizeBoost: strength * this.settings.pulseSizeBoost + trail * 0.2,
            mix: clamp(strength + trail * 0.5, 0, 1)
        };
    }

    updateCamera(deltaTime) {
        const easing = 1 - Math.pow(0.0001, deltaTime);
        const rotationBounds = this.getRotationBounds();

        this.camera.targetRotationX = clamp(
            this.camera.targetRotationX,
            rotationBounds.min,
            rotationBounds.max
        );
        this.camera.rotationX +=
            (this.camera.targetRotationX - this.camera.rotationX) * easing;
        this.camera.rotationY +=
            (this.camera.targetRotationY - this.camera.rotationY) * easing;
        this.camera.distance +=
            (this.camera.targetDistance - this.camera.distance) * easing;

        if (this.settings.autoRotate === "on" && !this.pointer.down) {
            this.camera.targetRotationY += this.settings.autoRotateSpeed * deltaTime;
        }
    }

    drawBackground() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    drawParticle(particle) {
        this.ctx.globalAlpha = particle.alpha;
        this.ctx.fillStyle = particle.color;

        if (this.settings.particleShape === "circle") {
            this.ctx.beginPath();
            this.ctx.arc(
                particle.x,
                particle.y,
                Math.max(particle.width, particle.height) * 0.5,
                0,
                Math.PI * 2
            );
            this.ctx.fill();
            return;
        }

        this.ctx.save();
        this.ctx.translate(particle.x, particle.y);
        this.ctx.rotate(particle.rotation);
        this.ctx.fillRect(
            -particle.width * 0.5,
            -particle.height * 0.5,
            particle.width,
            particle.height
        );
        this.ctx.restore();
    }

    renderParticles(currentTime) {
        const rendered = [];
        const flow = this.time * this.settings.flowSpeed;
        const particleRgb = hexToRgb(this.settings.particleColor);
        const pulseRgb = hexToRgb(this.settings.pulseColor);
        const pulseState = this.getPulseState(currentTime);

        for (const particle of this.particles) {
            let progress = particle.baseT + particle.tOffset + flow * particle.speed;
            progress = ((progress % 1) + 1) % 1;

            const radius = this.getFunnelRadius(progress);
            const twist =
                Math.pow(progress, this.settings.twistExponent) * this.settings.twistStrength +
                Math.sin(
                    this.time * this.settings.twistWaveSpeed +
                        progress * this.settings.twistWaveFrequency +
                        particle.phase
                ) *
                    this.settings.twistWaveAmount;
            const angle = particle.baseAngle + particle.angleOffset + twist;
            const surfaceNoise =
                Math.sin(
                    angle * this.settings.surfaceNoiseAngleFrequency +
                        progress * this.settings.surfaceNoiseVerticalFrequency +
                        particle.phase +
                        this.time * this.settings.surfaceNoiseSpeed
                ) * this.settings.surfaceNoiseAmount;
            const finalRadius = radius + surfaceNoise;

            let x = Math.cos(angle) * finalRadius;
            let z = Math.sin(angle) * finalRadius;
            let y = lerp(this.settings.topY, this.settings.bottomY, progress);

            particle.dispX *= this.settings.displacementDecay;
            particle.dispY *= this.settings.displacementDecay;
            particle.dispZ *= this.settings.displacementDecay;

            x += particle.dispX;
            y += particle.dispY;
            z += particle.dispZ;

            const rotated = this.rotatePoint(
                x,
                y,
                z,
                this.camera.rotationX + this.settings.cameraAngle,
                this.camera.rotationY
            );
            const projected = this.projectPoint(rotated);

            if (!projected) {
                continue;
            }

            if (this.pointer.active) {
                const deltaX = projected.x - this.pointer.currentX;
                const deltaY = projected.y - this.pointer.currentY;
                const distanceSquared = deltaX * deltaX + deltaY * deltaY;

                if (
                    distanceSquared < this.settings.pointerRadius * this.settings.pointerRadius &&
                    distanceSquared > 1
                ) {
                    const distance = Math.sqrt(distanceSquared);
                    const force =
                        (1 - distance / Math.max(this.settings.pointerRadius, 1)) *
                        this.settings.repulsionStrength;

                    particle.dispX += (deltaX / distance) * force * 1.5;
                    particle.dispY -= (deltaY / distance) * force * 1.5;
                }
            }

            if (
                projected.x < -40 ||
                projected.x > this.canvasWidth + 40 ||
                projected.y < -40 ||
                projected.y > this.canvasHeight + 40
            ) {
                continue;
            }

            const distanceFromFocus = Math.abs(projected.z);
            const dofFactor = Math.min(1, distanceFromFocus * this.settings.dofStrength);
            const normalizedDepth =
                (projected.z + this.settings.depthOffset) /
                Math.max(this.settings.depthRange, 0.0001);
            const depthShadingMultiplier = clamp(
                0.4 + normalizedDepth * this.settings.depthShading,
                0.15,
                1.2
            );
            const topHighlight =
                this.settings.topHighlightBase +
                Math.pow(1 - progress, this.settings.topHighlightPower) *
                    this.settings.topHighlightAmount;
            const flicker =
                1 -
                this.settings.flickerAmount +
                Math.sin(
                    this.time * this.settings.flickerSpeed +
                        particle.phase +
                        progress * this.settings.flickerFrequency
                ) *
                    this.settings.flickerAmount;
            const focusAlphaScale = 1 - dofFactor * this.settings.dofFadeStrength;
            const bottomFade =
                1 - this.smoothstep(this.settings.bottomFadeStart, this.settings.bottomFadeEnd, progress);
            const baseAlpha = clamp(
                particle.brightness *
                    topHighlight *
                    flicker *
                    depthShadingMultiplier *
                    focusAlphaScale *
                    bottomFade,
                0.02,
                0.95
            );
            const bokehExpansion = 1 + dofFactor * this.settings.dofSizeBoost;
            const sizeScale = clamp(
                projected.scale * this.settings.projectionSizeScale * bokehExpansion,
                0.35,
                3.5
            );
            const pulseDistance = Math.hypot(
                projected.x - this.pulseOriginX,
                projected.y - this.pulseOriginY
            );
            const pulse = this.getPulseAppearance(pulseDistance, pulseState);
            const pulseContribution =
                pulse.brightness * this.settings.pulseColorOpacity;
            const alpha = clamp(baseAlpha + pulseContribution, 0.02, 1);
            const pulseMix =
                alpha > 0 ? clamp(pulseContribution / alpha, 0, 1) : 0;
            const color = `rgb(${Math.round(
                lerp(particleRgb.r, pulseRgb.r, pulseMix)
            )}, ${Math.round(lerp(particleRgb.g, pulseRgb.g, pulseMix))}, ${Math.round(
                lerp(particleRgb.b, pulseRgb.b, pulseMix)
            )})`;

            rendered.push({
                x: projected.x,
                y: projected.y,
                z: projected.z,
                alpha,
                width: particle.width * sizeScale * (1 + pulse.sizeBoost),
                height: particle.height * sizeScale * (1 + pulse.sizeBoost),
                rotation: angle + this.camera.rotationY,
                color
            });
        }

        rendered.sort((a, b) => a.z - b.z);

        for (const particle of rendered) {
            this.drawParticle(particle);
        }

        this.ctx.globalAlpha = 1;
    }

    animate(currentTime) {
        this.animationFrameId = window.requestAnimationFrame(this.animate);
        const rawDelta = (currentTime - this.lastFrameTime) / 1000;
        const deltaTime = Math.min(rawDelta || 1 / 60, 0.033);

        this.lastFrameTime = currentTime;
        this.time += deltaTime;

        this.updateCamera(deltaTime);

        if (
            this.settings.pulseEnabled === "on" &&
            this.pointer.active &&
            currentTime >= this.nextPulseTime
        ) {
            this.triggerPulse(currentTime);
        }

        this.drawBackground();
        this.renderParticles(currentTime);
    }

    destroy() {
        window.cancelAnimationFrame(this.animationFrameId);
        this.canvas.removeEventListener("pointerenter", this.handlePointerEnter);
        this.canvas.removeEventListener("pointerdown", this.handlePointerDown);
        this.canvas.removeEventListener("pointermove", this.handlePointerMove);
        this.canvas.removeEventListener("pointerleave", this.handlePointerLeave);
        this.canvas.removeEventListener("pointerup", this.handlePointerRelease);
        this.canvas.removeEventListener("pointercancel", this.handlePointerRelease);
        this.canvas.removeEventListener("wheel", this.handleWheel);

        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        } else {
            window.removeEventListener("resize", this.handleResize);
        }
    }
}

function createPreviewInstance(mount, animationType) {
    const normalizedAnimationType = sanitizeAnimationType(animationType);

    if (normalizedAnimationType === FOOTER_ANIMATION) {
        return new FooterInteractionPreview(mount);
    }

    if (normalizedAnimationType === FUNNEL_V2_ANIMATION) {
        return new FunnelInteractionV2Preview(mount);
    }

    if (normalizedAnimationType === FUNNEL_ANIMATION) {
        return new FunnelInteractionPreview(mount);
    }

    return new WavePatternPreview(mount);
}

function getControlGroups(animationType) {
    const normalizedAnimationType = sanitizeAnimationType(animationType);

    if (normalizedAnimationType === FOOTER_ANIMATION) {
        return FOOTER_CONTROL_GROUPS;
    }

    if (normalizedAnimationType === FUNNEL_V2_ANIMATION) {
        return FUNNEL_V2_CONTROL_GROUPS;
    }

    if (normalizedAnimationType === FUNNEL_ANIMATION) {
        return FUNNEL_CONTROL_GROUPS;
    }

    return CONTROL_GROUPS;
}

function getDefaultSettings(animationType) {
    const normalizedAnimationType = sanitizeAnimationType(animationType);

    if (normalizedAnimationType === FOOTER_ANIMATION) {
        return { ...FOOTER_DEFAULT_SETTINGS };
    }

    if (normalizedAnimationType === FUNNEL_V2_ANIMATION) {
        return { ...FUNNEL_V2_DEFAULT_SETTINGS };
    }

    if (normalizedAnimationType === FUNNEL_ANIMATION) {
        return { ...FUNNEL_DEFAULT_SETTINGS };
    }

    return { ...DEFAULT_SETTINGS };
}

function getAnimationLabel(animationType) {
    const animation = ANIMATION_OPTIONS.find(
        (option) => option.value === sanitizeAnimationType(animationType)
    );
    return animation ? animation.label : ANIMATION_OPTIONS[0].label;
}

function getAnimationSummaryLabel(animationType, settings) {
    const normalizedAnimationType = sanitizeAnimationType(animationType);

    if (normalizedAnimationType === FOOTER_ANIMATION) {
        return `${formatNumber(settings.pulseDuration)}ms pulse`;
    }

    if (normalizedAnimationType === FUNNEL_V2_ANIMATION) {
        return `${formatNumber(settings.radialSegments)} x ${formatNumber(settings.verticalSegments)} shell`;
    }

    if (normalizedAnimationType === FUNNEL_ANIMATION) {
        return `${formatNumber(settings.ringCount)} rings / ${formatNumber(settings.flowParticleCount)} flow`;
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
    if (value === FOOTER_ANIMATION) {
        return FOOTER_ANIMATION;
    }

    if (value === FUNNEL_V2_ANIMATION) {
        return FUNNEL_V2_ANIMATION;
    }

    if (value === FUNNEL_ANIMATION) {
        return FUNNEL_ANIMATION;
    }

    return HERO_ANIMATION;
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
    settings.backgroundEnabled = TOGGLE_OPTIONS.some(
        (option) => option.value === settings.backgroundEnabled
    )
        ? settings.backgroundEnabled
        : "on";
    settings.backgroundOpacity = clamp(settings.backgroundOpacity, 0, 1);
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
    settings.pulseColorOpacity = clamp(settings.pulseColorOpacity, 0, 1);
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
    settings.backgroundDotsOpacity = clamp(settings.backgroundDotsOpacity, 0, 1);
    settings.maskSoftness = clamp(settings.maskSoftness, 0.05, 0.95);
    settings.maskFadeSpeed = clamp(settings.maskFadeSpeed, 0.01, 0.5);
    settings.pulseRevealWidth = clamp(settings.pulseRevealWidth, 20, 320);
    settings.pulseRevealStrength = clamp(settings.pulseRevealStrength, 0, 1);
    settings.pulseRevealTrail = clamp(settings.pulseRevealTrail, 0, 1);
    settings.logoSizePercent = clamp(settings.logoSizePercent, 40, 200);
    settings.pulseBorderThickness = clamp(settings.pulseBorderThickness, 0.5, 24);
    settings.pulseDuration = clampInt(settings.pulseDuration, 100, 4000);
    settings.pulseRepeatDelay = clampInt(settings.pulseRepeatDelay, 0, 15000);
    settings.pulseWidth = clamp(settings.pulseWidth, 10, 300);
    settings.pulseBrightness = clamp(settings.pulseBrightness, 0, 2);
    settings.pulseSizeBoost = clamp(settings.pulseSizeBoost, 0, 4);
    settings.pulseTrailStrength = clamp(settings.pulseTrailStrength, 0, 1);

    return settings;
}

function sanitizeFunnelSettings(input) {
    const settings = sanitizeCommonSettings(input);

    settings.flowColor = normalizeHexColor(settings.flowColor);
    settings.pulseColor = normalizeHexColor(settings.pulseColor);
    settings.pulseColorOpacity = clamp(settings.pulseColorOpacity, 0, 1);
    settings.maskEnabled = TOGGLE_OPTIONS.some((option) => option.value === settings.maskEnabled)
        ? settings.maskEnabled
        : "on";
    settings.pulseEnabled = TOGGLE_OPTIONS.some((option) => option.value === settings.pulseEnabled)
        ? settings.pulseEnabled
        : "on";
    settings.baseVisibility = clamp(settings.baseVisibility, 0, 1);
    settings.maximumPixelRatio = clamp(settings.maximumPixelRatio, 1, 3);
    settings.ringCount = clampInt(settings.ringCount, 6, 96);
    settings.pointsPerRing = clampInt(settings.pointsPerRing, 12, 180);
    settings.ringRotationSpeed = clamp(settings.ringRotationSpeed, -4, 4);
    settings.particleSizeMin = clamp(settings.particleSizeMin, 0.05, 3);
    settings.particleSizeMax = clamp(settings.particleSizeMax, settings.particleSizeMin, 4);
    settings.particleAlphaMin = clamp(settings.particleAlphaMin, 0, 1);
    settings.particleAlphaMax = clamp(settings.particleAlphaMax, settings.particleAlphaMin, 1);
    settings.flowParticleCount = clampInt(settings.flowParticleCount, 12, 600);
    settings.flowSizeMin = clamp(settings.flowSizeMin, 0.05, 3);
    settings.flowSizeMax = clamp(settings.flowSizeMax, settings.flowSizeMin, 4);
    settings.flowAlphaMin = clamp(settings.flowAlphaMin, 0, 1);
    settings.flowAlphaMax = clamp(settings.flowAlphaMax, settings.flowAlphaMin, 1);
    settings.flowSpeedMin = clamp(settings.flowSpeedMin, 0.005, 0.25);
    settings.flowSpeedMax = clamp(settings.flowSpeedMax, settings.flowSpeedMin, 0.4);
    settings.flowSwirlSpeed = clamp(settings.flowSwirlSpeed, 0, 4);
    settings.flowTwistStrength = clamp(settings.flowTwistStrength, 0, 12);
    settings.flowAcceleration = clamp(settings.flowAcceleration, 0, 8);
    settings.topRadiusRatio = clamp(settings.topRadiusRatio, 0.08, 0.6);
    settings.neckRadiusRatio = clamp(settings.neckRadiusRatio, 0.01, 0.3);
    settings.outletRadiusRatio = clamp(settings.outletRadiusRatio, 0.005, 0.16);
    settings.topYRatio = clamp(settings.topYRatio, -0.6, 0.1);
    settings.neckYRatio = clamp(settings.neckYRatio, -0.1, 0.6);
    settings.outletYRatio = clamp(settings.outletYRatio, 0, 0.9);
    settings.neckProgress = clamp(settings.neckProgress, 0.2, 0.95);
    settings.basePitch = clamp(settings.basePitch, -0.8, 0.8);
    settings.maximumRotationY = clamp(settings.maximumRotationY, 0, 0.5);
    settings.maximumRotationX = clamp(settings.maximumRotationX, 0, 0.4);
    settings.rotationSpeed = clamp(settings.rotationSpeed, 0.01, 0.3);
    settings.perspectiveRatio = clamp(settings.perspectiveRatio, 0.6, 3);
    settings.pointerRadiusRatio = clamp(settings.pointerRadiusRatio, 0.02, 0.4);
    settings.minimumPointerRadius = clamp(settings.minimumPointerRadius, 10, 400);
    settings.repulsionStrength = clamp(settings.repulsionStrength, 0, 8);
    settings.springStrength = clamp(settings.springStrength, 0.001, 0.2);
    settings.friction = clamp(settings.friction, 0.6, 0.99);
    settings.cursorRevealRadiusRatio = clamp(settings.cursorRevealRadiusRatio, 0.05, 0.6);
    settings.minimumCursorRevealRadius = clamp(settings.minimumCursorRevealRadius, 20, 600);
    settings.cursorRevealSoftness = clamp(settings.cursorRevealSoftness, 0.05, 0.95);
    settings.cursorRevealFadeSpeed = clamp(settings.cursorRevealFadeSpeed, 0.01, 0.4);
    settings.cursorVisibilityStrength = clamp(settings.cursorVisibilityStrength, 0, 1);
    settings.pulseDuration = clampInt(settings.pulseDuration, 100, 4000);
    settings.pulseRepeatDelay = clampInt(settings.pulseRepeatDelay, 100, 6000);
    settings.pulseWidth = clamp(settings.pulseWidth, 10, 360);
    settings.pulseBrightness = clamp(settings.pulseBrightness, 0, 2.5);
    settings.pulseSizeBoost = clamp(settings.pulseSizeBoost, 0, 4);
    settings.pulseRevealWidth = clamp(settings.pulseRevealWidth, 10, 360);
    settings.pulseRevealStrength = clamp(settings.pulseRevealStrength, 0, 1);
    settings.pulseRevealTrail = clamp(settings.pulseRevealTrail, 0, 1);
    settings.outletTrailCount = clampInt(settings.outletTrailCount, 0, 80);
    settings.outletTrailLength = clamp(settings.outletTrailLength, 0, 0.4);
    settings.outletTrailSpread = clamp(settings.outletTrailSpread, 0, 0.08);
    settings.outletTrailOpacity = clamp(settings.outletTrailOpacity, 0, 1);

    return settings;
}

function sanitizeFunnelV2Settings(input) {
    const settings = sanitizeCommonSettings(input);

    settings.pulseColor = normalizeHexColor(settings.pulseColor);
    settings.pulseColorOpacity = clamp(settings.pulseColorOpacity, 0, 1);
    settings.pulseEnabled = TOGGLE_OPTIONS.some((option) => option.value === settings.pulseEnabled)
        ? settings.pulseEnabled
        : "off";
    settings.maximumPixelRatio = clamp(settings.maximumPixelRatio, 1, 3);
    settings.radialSegments = clampInt(settings.radialSegments, 24, 260);
    settings.verticalSegments = clampInt(settings.verticalSegments, 20, 180);
    settings.topY = clamp(settings.topY, -2, 12);
    settings.bottomY = clamp(settings.bottomY, -14, 2);
    settings.topRadius = clamp(settings.topRadius, 0.4, 10);
    settings.throatRadius = clamp(settings.throatRadius, 0.05, 2);
    settings.bottomRadius = clamp(settings.bottomRadius, 0.05, 3);
    settings.upperCurvePower = clamp(settings.upperCurvePower, 0.5, 5);
    settings.lowerBlendStart = clamp(settings.lowerBlendStart, 0.3, 0.98);
    settings.flowSpeed = clamp(settings.flowSpeed, 0.002, 0.2);
    settings.rectWidth = clamp(settings.rectWidth, 0.2, 4);
    settings.rectHeight = clamp(settings.rectHeight, 0.2, 4);
    settings.particleScaleMin = clamp(settings.particleScaleMin, 0.2, 2);
    settings.particleScaleMax = clamp(settings.particleScaleMax, settings.particleScaleMin, 2.5);
    settings.brightnessMin = clamp(settings.brightnessMin, 0.05, 1);
    settings.brightnessMax = clamp(settings.brightnessMax, settings.brightnessMin, 1.4);
    settings.speedMin = clamp(settings.speedMin, 0.1, 2);
    settings.speedMax = clamp(settings.speedMax, settings.speedMin, 2.5);
    settings.angleJitter = clamp(settings.angleJitter, 0, 0.08);
    settings.verticalJitter = clamp(settings.verticalJitter, 0, 0.03);
    settings.twistStrength = clamp(settings.twistStrength, 0, 2);
    settings.twistExponent = clamp(settings.twistExponent, 0.2, 4);
    settings.twistWaveAmount = clamp(settings.twistWaveAmount, 0, 0.08);
    settings.twistWaveSpeed = clamp(settings.twistWaveSpeed, 0, 4);
    settings.twistWaveFrequency = clamp(settings.twistWaveFrequency, 0, 20);
    settings.surfaceNoiseAmount = clamp(settings.surfaceNoiseAmount, 0, 0.08);
    settings.surfaceNoiseAngleFrequency = clamp(settings.surfaceNoiseAngleFrequency, 0, 30);
    settings.surfaceNoiseVerticalFrequency = clamp(settings.surfaceNoiseVerticalFrequency, 0, 50);
    settings.surfaceNoiseSpeed = clamp(settings.surfaceNoiseSpeed, 0, 4);
    settings.cameraStartRotationX = clamp(settings.cameraStartRotationX, -2.4, 2.4);
    settings.cameraStartRotationY = clamp(settings.cameraStartRotationY, -3.2, 3.2);
    settings.cameraRestRotationX = clamp(settings.cameraRestRotationX, -2.4, 2.4);
    settings.cameraRestRotationY = clamp(settings.cameraRestRotationY, -3.2, 3.2);
    settings.minimumRotationX = clamp(settings.minimumRotationX, -2.8, 0.4);
    settings.maximumRotationX = clamp(settings.maximumRotationX, -2.8, 0.8);
    settings.cameraDistance = clamp(settings.cameraDistance, 4, 24);
    settings.cameraAngle = clamp(settings.cameraAngle, -2.4, 2.4);
    settings.cameraPositionX = clamp(settings.cameraPositionX, -10, 10);
    settings.cameraPositionY = clamp(settings.cameraPositionY, -10, 10);
    settings.minimumDistance = clamp(settings.minimumDistance, 2, 20);
    settings.maximumDistance = clamp(settings.maximumDistance, 4, 30);
    settings.perspectiveScale = clamp(settings.perspectiveScale, 0.3, 2.4);
    settings.centerXRatio = clamp(settings.centerXRatio, 0.2, 0.8);
    settings.centerYRatio = clamp(settings.centerYRatio, 0.2, 0.8);
    settings.autoRotate = TOGGLE_OPTIONS.some((option) => option.value === settings.autoRotate)
        ? settings.autoRotate
        : "on";
    settings.autoRotateSpeed = clamp(settings.autoRotateSpeed, -0.2, 0.2);
    settings.pointerRadius = clamp(settings.pointerRadius, 10, 240);
    settings.repulsionStrength = clamp(settings.repulsionStrength, 0, 2);
    settings.displacementDecay = clamp(settings.displacementDecay, 0.6, 0.99);
    settings.dragRotationYSpeed = clamp(settings.dragRotationYSpeed, 0.0005, 0.02);
    settings.dragRotationXSpeed = clamp(settings.dragRotationXSpeed, 0.0005, 0.02);
    settings.zoomSpeed = clamp(settings.zoomSpeed, 0.001, 0.05);
    settings.dofStrength = clamp(settings.dofStrength, 0, 0.5);
    settings.dofFadeStrength = clamp(settings.dofFadeStrength, 0, 1);
    settings.dofSizeBoost = clamp(settings.dofSizeBoost, 0, 2);
    settings.depthShading = clamp(settings.depthShading, 0, 1.8);
    settings.depthOffset = clamp(settings.depthOffset, 0, 20);
    settings.depthRange = clamp(settings.depthRange, 0.5, 40);
    settings.topHighlightBase = clamp(settings.topHighlightBase, 0, 1.4);
    settings.topHighlightAmount = clamp(settings.topHighlightAmount, 0, 1.4);
    settings.topHighlightPower = clamp(settings.topHighlightPower, 0.1, 4);
    settings.flickerSpeed = clamp(settings.flickerSpeed, 0, 8);
    settings.flickerAmount = clamp(settings.flickerAmount, 0, 0.5);
    settings.flickerFrequency = clamp(settings.flickerFrequency, 0, 40);
    settings.pulseDuration = clampInt(settings.pulseDuration, 100, 4000);
    settings.pulseRepeatDelay = clampInt(settings.pulseRepeatDelay, 100, 6000);
    settings.pulseWidth = clamp(settings.pulseWidth, 10, 360);
    settings.pulseBrightness = clamp(settings.pulseBrightness, 0, 2.5);
    settings.pulseSizeBoost = clamp(settings.pulseSizeBoost, 0, 4);
    settings.bottomFadeStart = clamp(settings.bottomFadeStart, 0.4, 1);
    settings.bottomFadeEnd = clamp(settings.bottomFadeEnd, 0.5, 1);
    settings.projectionSizeScale = clamp(settings.projectionSizeScale, 0.001, 0.04);

    return settings;
}

function sanitizeSettings(input, animationType = HERO_ANIMATION) {
    const normalizedAnimationType = sanitizeAnimationType(animationType);
    const merged = {
        ...getDefaultSettings(normalizedAnimationType),
        ...(input && typeof input === "object" ? input : {})
    };

    if (normalizedAnimationType === FOOTER_ANIMATION) {
        return sanitizeFooterSettings(merged);
    }

    if (normalizedAnimationType === FUNNEL_V2_ANIMATION) {
        return sanitizeFunnelV2Settings(merged);
    }

    if (normalizedAnimationType === FUNNEL_ANIMATION) {
        return sanitizeFunnelSettings(merged);
    }

    return sanitizeHeroSettings(merged);
}

function getControlValue(control, settings) {
    if (
        control.key === "cameraDistance" &&
        !Object.prototype.hasOwnProperty.call(settings, "cameraDistance")
    ) {
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
    const normalizedAnimationType = sanitizeAnimationType(animationType);

    if (normalizedAnimationType === FOOTER_ANIMATION) {
        return generateFooterEmbedCode(settings);
    }

    if (normalizedAnimationType === FUNNEL_V2_ANIMATION) {
        return generateFunnelV2EmbedCode(settings);
    }

    if (normalizedAnimationType === FUNNEL_ANIMATION) {
        return generateFunnelEmbedCode(settings);
    }

    return generateHeroEmbedCode(settings);
}

function generateHeroEmbedCode(settings) {
    const color = normalizeHexColor(settings.particleColor);
    const backgroundColor = normalizeHexColor(settings.backgroundColor);
    const backgroundOpacity = getEffectiveBackgroundOpacity(settings);
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
        `        backgroundOpacity: ${formatNumber(backgroundOpacity, 2)},`,
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
        "    renderer.setClearColor(config.backgroundColor, config.backgroundOpacity);",
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

function generateFunnelV2EmbedCode(settings) {
    const particleColor = normalizeHexColor(settings.particleColor);
    const pulseColor = normalizeHexColor(settings.pulseColor);
    const backgroundColor = normalizeHexColor(settings.backgroundColor);
    const backgroundStyle = getEffectiveBackgroundStyle(settings);
    const containerStyle = getEmbedContainerStyle(settings, "auto");

    return `<!-- ============================================================ -->
<!-- WEBFLOW EMBED: WAVE PATTERN 1 FUNNEL INTERACTION V2          -->
<!-- Paste inside a Webflow Embed element.                       -->
<!-- ============================================================ -->

<div id="funnel-interaction-v2-wrap" style="${containerStyle}">
    <canvas
        id="funnel-interaction-v2-canvas"
        style="display:block;width:100%;height:100%;background:${backgroundStyle};cursor:grab;touch-action:none;"
    ></canvas>
</div>

<script>
(function () {
    const wrap = document.getElementById("funnel-interaction-v2-wrap");
    const canvas = document.getElementById("funnel-interaction-v2-canvas");
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    const config = {
        renderWidth: ${formatNumber(settings.renderWidth)},
        renderHeight: ${formatNumber(settings.renderHeight)},
        backgroundColor: ${JSON.stringify(backgroundColor)},
        backgroundStyle: ${JSON.stringify(backgroundStyle)},
        particleColor: ${JSON.stringify(particleColor)},
        pulseColor: ${JSON.stringify(pulseColor)},
        pulseColorOpacity: ${formatNumber(settings.pulseColorOpacity, 2)},
        particleShape: ${JSON.stringify(settings.particleShape)},
        pulseEnabled: ${JSON.stringify(settings.pulseEnabled)},
        pulseDuration: ${formatNumber(settings.pulseDuration)},
        pulseRepeatDelay: ${formatNumber(settings.pulseRepeatDelay)},
        pulseWidth: ${formatNumber(settings.pulseWidth)},
        pulseBrightness: ${formatNumber(settings.pulseBrightness, 2)},
        pulseSizeBoost: ${formatNumber(settings.pulseSizeBoost, 2)},
        maximumPixelRatio: ${formatNumber(settings.maximumPixelRatio, 1)},
        radialSegments: ${formatNumber(settings.radialSegments)},
        verticalSegments: ${formatNumber(settings.verticalSegments)},
        topY: ${formatNumber(settings.topY, 2)},
        bottomY: ${formatNumber(settings.bottomY, 2)},
        topRadius: ${formatNumber(settings.topRadius, 2)},
        throatRadius: ${formatNumber(settings.throatRadius, 2)},
        bottomRadius: ${formatNumber(settings.bottomRadius, 2)},
        upperCurvePower: ${formatNumber(settings.upperCurvePower, 2)},
        lowerBlendStart: ${formatNumber(settings.lowerBlendStart, 2)},
        flowSpeed: ${formatNumber(settings.flowSpeed, 3)},
        rectWidth: ${formatNumber(settings.rectWidth, 2)},
        rectHeight: ${formatNumber(settings.rectHeight, 2)},
        particleScaleMin: ${formatNumber(settings.particleScaleMin, 2)},
        particleScaleMax: ${formatNumber(settings.particleScaleMax, 2)},
        brightnessMin: ${formatNumber(settings.brightnessMin, 2)},
        brightnessMax: ${formatNumber(settings.brightnessMax, 2)},
        speedMin: ${formatNumber(settings.speedMin, 2)},
        speedMax: ${formatNumber(settings.speedMax, 2)},
        angleJitter: ${formatNumber(settings.angleJitter, 3)},
        verticalJitter: ${formatNumber(settings.verticalJitter, 3)},
        twistStrength: ${formatNumber(settings.twistStrength, 2)},
        twistExponent: ${formatNumber(settings.twistExponent, 2)},
        twistWaveAmount: ${formatNumber(settings.twistWaveAmount, 3)},
        twistWaveSpeed: ${formatNumber(settings.twistWaveSpeed, 2)},
        twistWaveFrequency: ${formatNumber(settings.twistWaveFrequency, 2)},
        surfaceNoiseAmount: ${formatNumber(settings.surfaceNoiseAmount, 3)},
        surfaceNoiseAngleFrequency: ${formatNumber(settings.surfaceNoiseAngleFrequency, 2)},
        surfaceNoiseVerticalFrequency: ${formatNumber(settings.surfaceNoiseVerticalFrequency, 2)},
        surfaceNoiseSpeed: ${formatNumber(settings.surfaceNoiseSpeed, 2)},
        cameraStartRotationX: ${formatNumber(settings.cameraStartRotationX, 2)},
        cameraStartRotationY: ${formatNumber(settings.cameraStartRotationY, 2)},
        cameraRestRotationX: ${formatNumber(settings.cameraRestRotationX, 2)},
        cameraRestRotationY: ${formatNumber(settings.cameraRestRotationY, 2)},
        minimumRotationX: ${formatNumber(settings.minimumRotationX, 2)},
        maximumRotationX: ${formatNumber(settings.maximumRotationX, 2)},
        cameraDistance: ${formatNumber(settings.cameraDistance, 2)},
        cameraAngle: ${formatNumber(settings.cameraAngle, 2)},
        cameraPositionX: ${formatNumber(settings.cameraPositionX, 2)},
        cameraPositionY: ${formatNumber(settings.cameraPositionY, 2)},
        minimumDistance: ${formatNumber(settings.minimumDistance, 2)},
        maximumDistance: ${formatNumber(settings.maximumDistance, 2)},
        perspectiveScale: ${formatNumber(settings.perspectiveScale, 2)},
        centerXRatio: ${formatNumber(settings.centerXRatio, 2)},
        centerYRatio: ${formatNumber(settings.centerYRatio, 2)},
        autoRotate: ${JSON.stringify(settings.autoRotate)},
        autoRotateSpeed: ${formatNumber(settings.autoRotateSpeed, 3)},
        pointerRadius: ${formatNumber(settings.pointerRadius)},
        repulsionStrength: ${formatNumber(settings.repulsionStrength, 2)},
        displacementDecay: ${formatNumber(settings.displacementDecay, 2)},
        dragRotationYSpeed: ${formatNumber(settings.dragRotationYSpeed, 4)},
        dragRotationXSpeed: ${formatNumber(settings.dragRotationXSpeed, 4)},
        zoomSpeed: ${formatNumber(settings.zoomSpeed, 3)},
        dofStrength: ${formatNumber(settings.dofStrength, 3)},
        dofFadeStrength: ${formatNumber(settings.dofFadeStrength, 2)},
        dofSizeBoost: ${formatNumber(settings.dofSizeBoost, 2)},
        depthShading: ${formatNumber(settings.depthShading, 2)},
        depthOffset: ${formatNumber(settings.depthOffset, 2)},
        depthRange: ${formatNumber(settings.depthRange, 2)},
        topHighlightBase: ${formatNumber(settings.topHighlightBase, 2)},
        topHighlightAmount: ${formatNumber(settings.topHighlightAmount, 2)},
        topHighlightPower: ${formatNumber(settings.topHighlightPower, 2)},
        flickerSpeed: ${formatNumber(settings.flickerSpeed, 2)},
        flickerAmount: ${formatNumber(settings.flickerAmount, 2)},
        flickerFrequency: ${formatNumber(settings.flickerFrequency, 2)},
        bottomFadeStart: ${formatNumber(settings.bottomFadeStart, 2)},
        bottomFadeEnd: ${formatNumber(settings.bottomFadeEnd, 2)},
        projectionSizeScale: ${formatNumber(settings.projectionSizeScale, 3)}
    };

    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let centerX = 0;
    let centerY = 0;
    let time = 0;
    let lastTime = performance.now();
    let animationFrameId = 0;
    let particles = [];
    let pulseActive = false;
    let pulseStartTime = 0;
    let pulseOriginX = 0;
    let pulseOriginY = 0;
    let pulseMaximumDistance = 0;
    let nextPulseTime = Infinity;
    let hoverPulseArmed = true;

    const pointer = {
        down: false,
        previousX: 0,
        previousY: 0,
        currentX: -9999,
        currentY: -9999,
        active: false
    };

    const camera = {
        rotationX: 0,
        rotationY: 0,
        targetRotationX: 0,
        targetRotationY: 0,
        distance: 0,
        targetDistance: 0,
        perspective: 900
    };

    function clamp(value, minimum, maximum) {
        const min = minimum === undefined ? 0 : minimum;
        const max = maximum === undefined ? 1 : maximum;
        return Math.max(min, Math.min(max, value));
    }

    function lerp(start, end, progress) {
        return start + (end - start) * progress;
    }

    function randomBetween(minimum, maximum) {
        return minimum + Math.random() * (maximum - minimum);
    }

    function smoothstep(edge0, edge1, value) {
        const denominator = Math.max(edge1 - edge0, 0.0001);
        const normalized = clamp((value - edge0) / denominator, 0, 1);
        return normalized * normalized * (3 - 2 * normalized);
    }

    function getDistanceBounds() {
        return {
            min: Math.min(config.minimumDistance, config.maximumDistance),
            max: Math.max(config.minimumDistance, config.maximumDistance)
        };
    }

    function getRotationBounds() {
        return {
            min: Math.min(config.minimumRotationX, config.maximumRotationX),
            max: Math.max(config.minimumRotationX, config.maximumRotationX)
        };
    }

    function syncCameraBounds() {
        const distanceBounds = getDistanceBounds();
        const rotationBounds = getRotationBounds();
        camera.distance = clamp(camera.distance, distanceBounds.min, distanceBounds.max);
        camera.targetDistance = clamp(camera.targetDistance, distanceBounds.min, distanceBounds.max);
        camera.rotationX = clamp(camera.rotationX, rotationBounds.min, rotationBounds.max);
        camera.targetRotationX = clamp(camera.targetRotationX, rotationBounds.min, rotationBounds.max);
    }

    function resetCamera() {
        const distanceBounds = getDistanceBounds();
        const rotationBounds = getRotationBounds();
        camera.rotationX = clamp(config.cameraStartRotationX, rotationBounds.min, rotationBounds.max);
        camera.rotationY = config.cameraStartRotationY;
        camera.targetRotationX = clamp(config.cameraRestRotationX, rotationBounds.min, rotationBounds.max);
        camera.targetRotationY = config.cameraRestRotationY;
        camera.distance = clamp(config.cameraDistance, distanceBounds.min, distanceBounds.max);
        camera.targetDistance = camera.distance;
    }

    function updateViewportMetrics() {
        centerX = width * config.centerXRatio;
        centerY = height * config.centerYRatio;
        camera.perspective = Math.max(1, Math.min(width, height)) * config.perspectiveScale;
        syncCameraBounds();
    }

    function resizeCanvas() {
        const rect = wrap.getBoundingClientRect();
        width = Math.max(1, rect.width || 1);
        height = Math.max(1, rect.height || 1);
        pixelRatio = Math.min(window.devicePixelRatio || 1, config.maximumPixelRatio);
        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        updateViewportMetrics();
        buildParticles();
    }

    function getFunnelRadius(progress) {
        const upperContraction = Math.pow(1 - progress, config.upperCurvePower);
        let radius =
            config.throatRadius +
            (config.topRadius - config.throatRadius) * upperContraction;

        const lowerBlend = smoothstep(config.lowerBlendStart, 1, progress);
        radius += (config.bottomRadius - config.throatRadius) * lowerBlend;
        return radius;
    }

    function buildParticles() {
        particles = [];

        for (let radialIndex = 0; radialIndex < config.radialSegments; radialIndex += 1) {
            const baseAngle = (radialIndex / Math.max(config.radialSegments, 1)) * Math.PI * 2;

            for (let verticalIndex = 0; verticalIndex < config.verticalSegments; verticalIndex += 1) {
                const progress = verticalIndex / Math.max(config.verticalSegments - 1, 1);
                const stagger = radialIndex % 2 === 0 ? 0 : 0.5 / Math.max(config.verticalSegments, 1);
                const normalizedProgress = Math.min(1, progress + stagger);

                particles.push({
                    baseAngle: baseAngle,
                    baseT: normalizedProgress,
                    angleOffset: (Math.random() - 0.5) * config.angleJitter,
                    tOffset: (Math.random() - 0.5) * config.verticalJitter,
                    width: config.rectWidth * randomBetween(config.particleScaleMin, config.particleScaleMax),
                    height: config.rectHeight * randomBetween(config.particleScaleMin, config.particleScaleMax),
                    brightness: randomBetween(config.brightnessMin, config.brightnessMax),
                    speed: randomBetween(config.speedMin, config.speedMax),
                    phase: Math.random() * Math.PI * 2,
                    dispX: 0,
                    dispY: 0,
                    dispZ: 0
                });
            }
        }
    }

    function rotatePoint(x, y, z, rotationX, rotationY) {
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        return { x: x1, y: y1, z: z2 };
    }

    function projectPoint(point) {
        const depth = camera.distance - point.z;
        if (depth <= 0.1) return null;

        const scale = camera.perspective / depth;
        return {
            x: centerX + (point.x - config.cameraPositionX) * scale,
            y: centerY - (point.y - config.cameraPositionY) * scale,
            z: point.z,
            depth: depth,
            scale: scale
        };
    }

    function updatePointerPosition(event) {
        const rect = canvas.getBoundingClientRect();
        pointer.currentX = event.clientX - rect.left;
        pointer.currentY = event.clientY - rect.top;
        pointer.active = true;
    }

    function calculateMaximumPulseDistance(originX, originY) {
        return Math.max(
            Math.hypot(originX, originY),
            Math.hypot(originX - width, originY),
            Math.hypot(originX, originY - height),
            Math.hypot(originX - width, originY - height)
        );
    }

    function triggerPulse(currentTime) {
        if (config.pulseEnabled !== "on") {
            hoverPulseArmed = false;
            return;
        }

        pulseOriginX = pointer.currentX;
        pulseOriginY = pointer.currentY;
        pulseStartTime = currentTime;
        pulseMaximumDistance = calculateMaximumPulseDistance(
            pointer.currentX,
            pointer.currentY
        );
        pulseActive = true;
        nextPulseTime = currentTime + config.pulseRepeatDelay;
        hoverPulseArmed = false;
    }

    function getPulseState(currentTime) {
        if (config.pulseEnabled !== "on" || !pulseActive) return null;

        const progress = (currentTime - pulseStartTime) / Math.max(config.pulseDuration, 1);
        if (progress >= 1) {
            pulseActive = false;
            return null;
        }

        const easedProgress = 1 - Math.pow(1 - progress, 2);
        const fadeProgress = clamp((progress - 0.72) / 0.28, 0, 1);
        const lifeFade = 1 - smoothstep(0, 1, fadeProgress);

        return {
            radius: easedProgress * (pulseMaximumDistance + config.pulseWidth),
            lifeFade: lifeFade
        };
    }

    function getPulseAppearance(distance, pulseState) {
        if (config.pulseEnabled !== "on" || !pulseState) {
            return { brightness: 0, sizeBoost: 0, mix: 0 };
        }

        const distanceFromPulse = Math.abs(distance - pulseState.radius);
        const pulseStrength = smoothstep(
            0,
            Math.max(config.pulseWidth, 0.0001),
            Math.max(config.pulseWidth, 0.0001) - distanceFromPulse
        );
        const behindWave = distance < pulseState.radius
            ? Math.max(
                0,
                1 - (pulseState.radius - distance) / Math.max(config.pulseWidth * 2.6, 0.0001)
            )
            : 0;
        const trail = behindWave * 0.3 * pulseState.lifeFade;
        const strength = pulseStrength * pulseState.lifeFade;

        return {
            brightness: strength * config.pulseBrightness + trail,
            sizeBoost: strength * config.pulseSizeBoost + trail * 0.2,
            mix: clamp(strength + trail * 0.5, 0, 1)
        };
    }

    function updateCamera(deltaTime) {
        const easing = 1 - Math.pow(0.0001, deltaTime);
        const rotationBounds = getRotationBounds();

        camera.targetRotationX = clamp(camera.targetRotationX, rotationBounds.min, rotationBounds.max);
        camera.rotationX += (camera.targetRotationX - camera.rotationX) * easing;
        camera.rotationY += (camera.targetRotationY - camera.rotationY) * easing;
        camera.distance += (camera.targetDistance - camera.distance) * easing;

        if (config.autoRotate === "on" && !pointer.down) {
            camera.targetRotationY += config.autoRotateSpeed * deltaTime;
        }
    }

    function drawBackground() {
        ctx.clearRect(0, 0, width, height);
    }

    function drawParticle(particle) {
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;

        if (config.particleShape === "circle") {
            ctx.beginPath();
            ctx.arc(
                particle.x,
                particle.y,
                Math.max(particle.width, particle.height) * 0.5,
                0,
                Math.PI * 2
            );
            ctx.fill();
            return;
        }

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.fillRect(
            -particle.width * 0.5,
            -particle.height * 0.5,
            particle.width,
            particle.height
        );
        ctx.restore();
    }

    function renderParticles(currentTime) {
        const rendered = [];
        const flow = time * config.flowSpeed;
        const particleRgb = {
            r: parseInt(config.particleColor.slice(1, 3), 16),
            g: parseInt(config.particleColor.slice(3, 5), 16),
            b: parseInt(config.particleColor.slice(5, 7), 16)
        };
        const pulseRgb = {
            r: parseInt(config.pulseColor.slice(1, 3), 16),
            g: parseInt(config.pulseColor.slice(3, 5), 16),
            b: parseInt(config.pulseColor.slice(5, 7), 16)
        };
        const pulseState = getPulseState(currentTime);

        for (let index = 0; index < particles.length; index += 1) {
            const particle = particles[index];
            let progress = particle.baseT + particle.tOffset + flow * particle.speed;
            progress = ((progress % 1) + 1) % 1;

            const radius = getFunnelRadius(progress);
            const twist =
                Math.pow(progress, config.twistExponent) * config.twistStrength +
                Math.sin(
                    time * config.twistWaveSpeed +
                        progress * config.twistWaveFrequency +
                        particle.phase
                ) * config.twistWaveAmount;
            const angle = particle.baseAngle + particle.angleOffset + twist;
            const surfaceNoise =
                Math.sin(
                    angle * config.surfaceNoiseAngleFrequency +
                        progress * config.surfaceNoiseVerticalFrequency +
                        particle.phase +
                        time * config.surfaceNoiseSpeed
                ) * config.surfaceNoiseAmount;
            const finalRadius = radius + surfaceNoise;

            let x = Math.cos(angle) * finalRadius;
            let z = Math.sin(angle) * finalRadius;
            let y = lerp(config.topY, config.bottomY, progress);

            particle.dispX *= config.displacementDecay;
            particle.dispY *= config.displacementDecay;
            particle.dispZ *= config.displacementDecay;

            x += particle.dispX;
            y += particle.dispY;
            z += particle.dispZ;

            const rotated = rotatePoint(
                x,
                y,
                z,
                camera.rotationX + config.cameraAngle,
                camera.rotationY
            );
            const projected = projectPoint(rotated);
            if (!projected) continue;

            if (pointer.active) {
                const deltaX = projected.x - pointer.currentX;
                const deltaY = projected.y - pointer.currentY;
                const distanceSquared = deltaX * deltaX + deltaY * deltaY;

                if (
                    distanceSquared < config.pointerRadius * config.pointerRadius &&
                    distanceSquared > 1
                ) {
                    const distance = Math.sqrt(distanceSquared);
                    const force =
                        (1 - distance / Math.max(config.pointerRadius, 1)) *
                        config.repulsionStrength;

                    particle.dispX += (deltaX / distance) * force * 1.5;
                    particle.dispY -= (deltaY / distance) * force * 1.5;
                }
            }

            if (
                projected.x < -40 ||
                projected.x > width + 40 ||
                projected.y < -40 ||
                projected.y > height + 40
            ) {
                continue;
            }

            const distanceFromFocus = Math.abs(projected.z);
            const dofFactor = Math.min(1, distanceFromFocus * config.dofStrength);
            const normalizedDepth =
                (projected.z + config.depthOffset) / Math.max(config.depthRange, 0.0001);
            const depthShadingMultiplier = clamp(
                0.4 + normalizedDepth * config.depthShading,
                0.15,
                1.2
            );
            const topHighlight =
                config.topHighlightBase +
                Math.pow(1 - progress, config.topHighlightPower) * config.topHighlightAmount;
            const flicker =
                1 -
                config.flickerAmount +
                Math.sin(
                    time * config.flickerSpeed +
                        particle.phase +
                        progress * config.flickerFrequency
                ) * config.flickerAmount;
            const focusAlphaScale = 1 - dofFactor * config.dofFadeStrength;
            const bottomFade = 1 - smoothstep(config.bottomFadeStart, config.bottomFadeEnd, progress);
            const baseAlpha = clamp(
                particle.brightness *
                    topHighlight *
                    flicker *
                    depthShadingMultiplier *
                    focusAlphaScale *
                    bottomFade,
                0.02,
                0.95
            );
            const bokehExpansion = 1 + dofFactor * config.dofSizeBoost;
            const sizeScale = clamp(
                projected.scale * config.projectionSizeScale * bokehExpansion,
                0.35,
                3.5
            );
            const pulseDistance = Math.hypot(projected.x - pulseOriginX, projected.y - pulseOriginY);
            const pulse = getPulseAppearance(pulseDistance, pulseState);
            const pulseContribution = pulse.brightness * config.pulseColorOpacity;
            const alpha = clamp(baseAlpha + pulseContribution, 0.02, 1);
            const pulseMix =
                alpha > 0 ? clamp(pulseContribution / alpha, 0, 1) : 0;
            const color =
                "rgb(" +
                Math.round(lerp(particleRgb.r, pulseRgb.r, pulseMix)) +
                ", " +
                Math.round(lerp(particleRgb.g, pulseRgb.g, pulseMix)) +
                ", " +
                Math.round(lerp(particleRgb.b, pulseRgb.b, pulseMix)) +
                ")";

            rendered.push({
                x: projected.x,
                y: projected.y,
                z: projected.z,
                alpha: alpha,
                width: particle.width * sizeScale * (1 + pulse.sizeBoost),
                height: particle.height * sizeScale * (1 + pulse.sizeBoost),
                rotation: angle + camera.rotationY,
                color: color
            });
        }

        rendered.sort(function (a, b) {
            return a.z - b.z;
        });

        for (let index = 0; index < rendered.length; index += 1) {
            drawParticle(rendered[index]);
        }

        ctx.globalAlpha = 1;
    }

    function animate(currentTime) {
        animationFrameId = requestAnimationFrame(animate);
        const rawDelta = (currentTime - lastTime) / 1000;
        const deltaTime = Math.min(rawDelta || 1 / 60, 0.033);
        lastTime = currentTime;
        time += deltaTime;

        updateCamera(deltaTime);
        if (config.pulseEnabled === "on" && pointer.active && currentTime >= nextPulseTime) {
            triggerPulse(currentTime);
        }
        drawBackground();
        renderParticles(currentTime);
    }

    canvas.addEventListener("pointerenter", function (event) {
        updatePointerPosition(event);
        canvas.style.cursor = pointer.down ? "grabbing" : "grab";

        if (hoverPulseArmed) {
            triggerPulse(performance.now());
        }
    });

    canvas.addEventListener("pointerdown", function (event) {
        updatePointerPosition(event);
        pointer.down = true;
        pointer.previousX = event.clientX;
        pointer.previousY = event.clientY;
        canvas.style.cursor = "grabbing";
        triggerPulse(performance.now());

        if (canvas.setPointerCapture) {
            canvas.setPointerCapture(event.pointerId);
        }
    });

    canvas.addEventListener("pointermove", function (event) {
        updatePointerPosition(event);

        if (hoverPulseArmed) {
            triggerPulse(performance.now());
        }

        if (!pointer.down) return;

        const deltaX = event.clientX - pointer.previousX;
        const deltaY = event.clientY - pointer.previousY;
        const rotationBounds = getRotationBounds();

        camera.targetRotationY += deltaX * config.dragRotationYSpeed;
        camera.targetRotationX = clamp(
            camera.targetRotationX + deltaY * config.dragRotationXSpeed,
            rotationBounds.min,
            rotationBounds.max
        );

        pointer.previousX = event.clientX;
        pointer.previousY = event.clientY;
    });

    canvas.addEventListener("pointerleave", function () {
        if (!pointer.down) {
            pointer.active = false;
            hoverPulseArmed = true;
        }
        nextPulseTime = Infinity;
        canvas.style.cursor = pointer.down ? "grabbing" : "grab";
    });

    function releasePointer(event) {
        pointer.down = false;
        canvas.style.cursor = "grab";

        if (
            canvas.releasePointerCapture &&
            canvas.hasPointerCapture &&
            canvas.hasPointerCapture(event.pointerId)
        ) {
            canvas.releasePointerCapture(event.pointerId);
        }
    }

    canvas.addEventListener("pointerup", releasePointer);
    canvas.addEventListener("pointercancel", releasePointer);

    canvas.addEventListener(
        "wheel",
        function (event) {
            event.preventDefault();
            const distanceBounds = getDistanceBounds();
            camera.targetDistance = clamp(
                camera.targetDistance + event.deltaY * config.zoomSpeed,
                distanceBounds.min,
                distanceBounds.max
            );
        },
        { passive: false }
    );

    if (typeof ResizeObserver !== "undefined") {
        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(wrap);
    } else {
        window.addEventListener("resize", resizeCanvas);
    }

    wrap.style.backgroundColor = config.backgroundStyle;
    canvas.style.backgroundColor = config.backgroundStyle;

    resizeCanvas();
    resetCamera();
    animationFrameId = requestAnimationFrame(animate);
})();
</script>`;
}

function generateFunnelEmbedCode(settings) {
    const particleColor = normalizeHexColor(settings.particleColor);
    const flowColor = normalizeHexColor(settings.flowColor);
    const pulseColor = normalizeHexColor(settings.pulseColor);
    const backgroundColor = normalizeHexColor(settings.backgroundColor);
    const backgroundStyle = getEffectiveBackgroundStyle(settings);
    const containerStyle = getEmbedContainerStyle(settings, "auto");

    return [
        "<!-- ============================================================ -->",
        "<!-- WEBFLOW EMBED: WAVE PATTERN 1 FUNNEL INTERACTION             -->",
        "<!-- Paste inside a Webflow Embed element.                       -->",
        "<!-- ============================================================ -->",
        "",
        `<div id="funnel-interaction-wrap" style="${containerStyle}">`,
        '    <canvas id="funnel-interaction-canvas" style="display:block; width:100%; height:100%;"></canvas>',
        "</div>",
        "",
        "<script>",
        "(function () {",
        "    const wrap = document.getElementById('funnel-interaction-wrap');",
        "    const canvas = document.getElementById('funnel-interaction-canvas');",
        "    if (!wrap || !canvas) return;",
        "",
        "    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });",
        "    if (!ctx) return;",
        "",
        "    const TWO_PI = Math.PI * 2;",
        "    const config = {",
        `        renderWidth: ${formatNumber(settings.renderWidth)},`,
        `        renderHeight: ${formatNumber(settings.renderHeight)},`,
        `        backgroundColor: ${JSON.stringify(backgroundColor)},`,
        `        backgroundStyle: ${JSON.stringify(backgroundStyle)},`,
        `        particleColor: ${JSON.stringify(particleColor)},`,
        `        flowColor: ${JSON.stringify(flowColor)},`,
        `        pulseColor: ${JSON.stringify(pulseColor)},`,
        `        pulseColorOpacity: ${formatNumber(settings.pulseColorOpacity, 2)},`,
        `        particleShape: ${JSON.stringify(settings.particleShape)},`,
        `        maskEnabled: ${JSON.stringify(settings.maskEnabled)},`,
        `        pulseEnabled: ${JSON.stringify(settings.pulseEnabled)},`,
        `        baseVisibility: ${formatNumber(settings.baseVisibility, 2)},`,
        `        maximumPixelRatio: ${formatNumber(settings.maximumPixelRatio, 1)},`,
        `        ringCount: ${formatNumber(settings.ringCount)},`,
        `        pointsPerRing: ${formatNumber(settings.pointsPerRing)},`,
        `        ringRotationSpeed: ${formatNumber(settings.ringRotationSpeed, 2)},`,
        `        particleSizeMin: ${formatNumber(settings.particleSizeMin, 2)},`,
        `        particleSizeMax: ${formatNumber(settings.particleSizeMax, 2)},`,
        `        particleAlphaMin: ${formatNumber(settings.particleAlphaMin, 2)},`,
        `        particleAlphaMax: ${formatNumber(settings.particleAlphaMax, 2)},`,
        `        flowParticleCount: ${formatNumber(settings.flowParticleCount)},`,
        `        flowSizeMin: ${formatNumber(settings.flowSizeMin, 2)},`,
        `        flowSizeMax: ${formatNumber(settings.flowSizeMax, 2)},`,
        `        flowAlphaMin: ${formatNumber(settings.flowAlphaMin, 2)},`,
        `        flowAlphaMax: ${formatNumber(settings.flowAlphaMax, 2)},`,
        `        flowSpeedMin: ${formatNumber(settings.flowSpeedMin, 3)},`,
        `        flowSpeedMax: ${formatNumber(settings.flowSpeedMax, 3)},`,
        `        flowSwirlSpeed: ${formatNumber(settings.flowSwirlSpeed, 2)},`,
        `        flowTwistStrength: ${formatNumber(settings.flowTwistStrength, 1)},`,
        `        flowAcceleration: ${formatNumber(settings.flowAcceleration, 1)},`,
        `        topRadiusRatio: ${formatNumber(settings.topRadiusRatio, 2)},`,
        `        neckRadiusRatio: ${formatNumber(settings.neckRadiusRatio, 3)},`,
        `        outletRadiusRatio: ${formatNumber(settings.outletRadiusRatio, 3)},`,
        `        topYRatio: ${formatNumber(settings.topYRatio, 2)},`,
        `        neckYRatio: ${formatNumber(settings.neckYRatio, 2)},`,
        `        outletYRatio: ${formatNumber(settings.outletYRatio, 2)},`,
        `        neckProgress: ${formatNumber(settings.neckProgress, 2)},`,
        `        basePitch: ${formatNumber(settings.basePitch, 2)},`,
        `        maximumRotationY: ${formatNumber(settings.maximumRotationY, 2)},`,
        `        maximumRotationX: ${formatNumber(settings.maximumRotationX, 2)},`,
        `        rotationSpeed: ${formatNumber(settings.rotationSpeed, 2)},`,
        `        perspectiveRatio: ${formatNumber(settings.perspectiveRatio, 2)},`,
        `        pointerRadiusRatio: ${formatNumber(settings.pointerRadiusRatio, 2)},`,
        `        minimumPointerRadius: ${formatNumber(settings.minimumPointerRadius)},`,
        `        repulsionStrength: ${formatNumber(settings.repulsionStrength, 2)},`,
        `        springStrength: ${formatNumber(settings.springStrength, 3)},`,
        `        friction: ${formatNumber(settings.friction, 2)},`,
        `        cursorRevealRadiusRatio: ${formatNumber(settings.cursorRevealRadiusRatio, 2)},`,
        `        minimumCursorRevealRadius: ${formatNumber(settings.minimumCursorRevealRadius)},`,
        `        cursorRevealSoftness: ${formatNumber(settings.cursorRevealSoftness, 2)},`,
        `        cursorRevealFadeSpeed: ${formatNumber(settings.cursorRevealFadeSpeed, 2)},`,
        `        cursorVisibilityStrength: ${formatNumber(settings.cursorVisibilityStrength, 2)},`,
        `        pulseDuration: ${formatNumber(settings.pulseDuration)},`,
        `        pulseRepeatDelay: ${formatNumber(settings.pulseRepeatDelay)},`,
        `        pulseWidth: ${formatNumber(settings.pulseWidth)},`,
        `        pulseBrightness: ${formatNumber(settings.pulseBrightness, 2)},`,
        `        pulseSizeBoost: ${formatNumber(settings.pulseSizeBoost, 2)},`,
        `        pulseRevealWidth: ${formatNumber(settings.pulseRevealWidth)},`,
        `        pulseRevealStrength: ${formatNumber(settings.pulseRevealStrength, 2)},`,
        `        pulseRevealTrail: ${formatNumber(settings.pulseRevealTrail, 2)}`,
        "    };",
        "",
        "    wrap.style.backgroundColor = config.backgroundStyle;",
        "    wrap.style.overflow = 'hidden';",
        "    wrap.style.cursor = 'default';",
        "    wrap.style.userSelect = 'none';",
        "",
        "    let width = 0;",
        "    let height = 0;",
        "    let pixelRatio = 1;",
        "    let sceneMetrics = null;",
        "    let geometry = null;",
        "    let shellParticles = [];",
        "    let flowParticles = [];",
        "    let pointerX = 0;",
        "    let pointerY = 0;",
        "    let pointerActive = false;",
        "    let cursorRevealOpacity = 0;",
        "    let targetCursorRevealOpacity = 0;",
        "    let rotationX = 0;",
        "    let rotationY = 0;",
        "    let targetRotationX = 0;",
        "    let targetRotationY = 0;",
        "    let pulseActive = false;",
        "    let pulseStartTime = 0;",
        "    let pulseOriginX = 0;",
        "    let pulseOriginY = 0;",
        "    let pulseMaximumDistance = 0;",
        "    let nextPulseTime = Infinity;",
        "    let hoverPulseArmed = true;",
        "    let lastFrameTime = performance.now();",
        "    let animationFrameId = 0;",
        "",
        "    function randomBetween(minimum, maximum) {",
        "        return minimum + Math.random() * (maximum - minimum);",
        "    }",
        "",
        "    function clamp(value, minimum, maximum) {",
        "        const min = minimum === undefined ? 0 : minimum;",
        "        const max = maximum === undefined ? 1 : maximum;",
        "        return Math.max(min, Math.min(max, value));",
        "    }",
        "",
        "    function easeInOut(value) {",
        "        const clamped = clamp(value, 0, 1);",
        "        return clamped * clamped * (3 - 2 * clamped);",
        "    }",
        "",
        "    function lerp(start, end, progress) {",
        "        return start + (end - start) * progress;",
        "    }",
        "",
        "    function hexToRgb(hex) {",
        "        const normalized = String(hex || '#000000').replace('#', '');",
        "        return {",
        "            r: parseInt(normalized.slice(0, 2), 16),",
        "            g: parseInt(normalized.slice(2, 4), 16),",
        "            b: parseInt(normalized.slice(4, 6), 16)",
        "        };",
        "    }",
        "",
        "    function drawParticle(x, y, size, alpha, rgb) {",
        "        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;",
        "",
        "        if (config.particleShape === 'circle') {",
        "            ctx.beginPath();",
        "            ctx.arc(x, y, size, 0, TWO_PI);",
        "            ctx.fill();",
        "            return;",
        "        }",
        "",
        "        ctx.fillRect(x - size, y - size, size * 2, size * 2);",
        "    }",
        "",
        "    function updateSceneGeometry() {",
        "        const logicalWidth = Math.max(1, config.renderWidth);",
        "        const logicalHeight = Math.max(1, config.renderHeight);",
        "        const fitScale = Math.min(width / logicalWidth, height / logicalHeight);",
        "        const sceneScale = Math.min(1, Math.max(0.0001, Number.isFinite(fitScale) ? fitScale : 1));",
        "        const sceneWidth = logicalWidth * sceneScale;",
        "        const sceneHeight = logicalHeight * sceneScale;",
        "",
        "        sceneMetrics = {",
        "            logicalWidth,",
        "            logicalHeight,",
        "            sceneScale,",
        "            sceneWidth,",
        "            sceneHeight,",
        "            offsetX: (width - sceneWidth) * 0.5,",
        "            offsetY: (height - sceneHeight) * 0.5",
        "        };",
        "        geometry = {",
        "            centerX: logicalWidth * 0.5,",
        "            centerY: logicalHeight * 0.48,",
        "            topY: logicalHeight * config.topYRatio,",
        "            neckY: logicalHeight * config.neckYRatio,",
        "            outletY: logicalHeight * config.outletYRatio,",
        "            topRadius: logicalWidth * config.topRadiusRatio,",
        "            neckRadius: logicalWidth * config.neckRadiusRatio,",
        "            outletRadius: logicalWidth * config.outletRadiusRatio,",
        "            perspective: Math.max(logicalWidth, logicalHeight) * config.perspectiveRatio",
        "        };",
        "    }",
        "",
        "    function getSceneMetrics() {",
        "        return sceneMetrics;",
        "    }",
        "",
        "    function getGeometry() {",
        "        return geometry;",
        "    }",
        "",
        "    function transformScenePoint(x, y, scale) {",
        "        const scene = getSceneMetrics();",
        "        return {",
        "            x: scene.offsetX + x * scene.sceneScale,",
        "            y: scene.offsetY + y * scene.sceneScale,",
        "            scale: scale * scene.sceneScale",
        "        };",
        "    }",
        "",
        "    function getCrossSection(progress) {",
        "        const geometry = getGeometry();",
        "",
        "        if (progress <= config.neckProgress) {",
        "            const normalized = progress / Math.max(config.neckProgress, 0.0001);",
        "            const curved = Math.pow(easeInOut(normalized), 0.78);",
        "            return {",
        "                y: lerp(geometry.topY, geometry.neckY, normalized),",
        "                radius: lerp(geometry.topRadius, geometry.neckRadius, curved)",
        "            };",
        "        }",
        "",
        "        const normalized = (progress - config.neckProgress) / Math.max(1 - config.neckProgress, 0.0001);",
        "        return {",
        "            y: lerp(geometry.neckY, geometry.outletY, normalized),",
        "            radius: lerp(geometry.neckRadius, geometry.outletRadius, easeInOut(normalized))",
        "        };",
        "    }",
        "",
        "    function projectPoint(x, y, z) {",
        "        const geometry = getGeometry();",
        "        const angleX = config.basePitch + rotationX;",
        "        const angleY = rotationY;",
        "        const cosX = Math.cos(angleX);",
        "        const sinX = Math.sin(angleX);",
        "        const cosY = Math.cos(angleY);",
        "        const sinY = Math.sin(angleY);",
        "",
        "        const rotatedY = y * cosX - z * sinX;",
        "        const rotatedZFromX = y * sinX + z * cosX;",
        "        const rotatedX = x * cosY + rotatedZFromX * sinY;",
        "        const rotatedZ = -x * sinY + rotatedZFromX * cosY;",
        "        const perspectiveScale = geometry.perspective / Math.max(1, geometry.perspective - rotatedZ);",
        "        const projected = transformScenePoint(",
        "            geometry.centerX + rotatedX * perspectiveScale,",
        "            geometry.centerY + rotatedY * perspectiveScale,",
        "            perspectiveScale",
        "        );",
        "",
        "        return {",
        "            x: projected.x,",
        "            y: projected.y,",
        "            z: rotatedZ,",
        "            scale: projected.scale",
        "        };",
        "    }",
        "",
        "    function getShellProjection(particle, currentTime) {",
        "        const section = getCrossSection(particle.progress);",
        "        const seconds = currentTime * 0.001;",
        "        const rotationAngle = particle.theta + seconds * config.ringRotationSpeed * lerp(1.12, 0.72, particle.progress);",
        "        const localX = Math.cos(rotationAngle) * section.radius;",
        "        const localZ = Math.sin(rotationAngle) * section.radius;",
        "        const projection = projectPoint(localX, section.y, localZ);",
        "        const frontFactor = clamp(0.5 + projection.z / Math.max(1, section.radius * 2), 0, 1);",
        "        return { ...projection, frontFactor };",
        "    }",
        "",
        "    function resizeCanvas() {",
        "        const rect = wrap.getBoundingClientRect();",
        "        width = Math.max(1, rect.width || 1);",
        "        height = Math.max(1, rect.height || 1);",
        "        pixelRatio = Math.min(window.devicePixelRatio || 1, config.maximumPixelRatio);",
        "        canvas.width = Math.round(width * pixelRatio);",
        "        canvas.height = Math.round(height * pixelRatio);",
        "        canvas.style.width = `${width}px`;",
        "        canvas.style.height = `${height}px`;",
        "        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);",
        "        updateSceneGeometry();",
        "        buildShellParticles();",
        "        buildFlowParticles();",
        "    }",
        "",
        "    function buildShellParticles() {",
        "        shellParticles = [];",
        "",
        "        for (let ringIndex = 0; ringIndex < config.ringCount; ringIndex += 1) {",
        "            const progress = ringIndex / Math.max(config.ringCount - 1, 1);",
        "            const ringOffset = ringIndex % 2 === 0 ? 0 : Math.PI / Math.max(config.pointsPerRing, 1);",
        "",
        "            for (let pointIndex = 0; pointIndex < config.pointsPerRing; pointIndex += 1) {",
        "                const theta = (pointIndex / Math.max(config.pointsPerRing, 1)) * TWO_PI + ringOffset + randomBetween(-0.045, 0.045);",
        "                shellParticles.push({",
        "                    progress,",
        "                    theta,",
        "                    offsetX: 0,",
        "                    offsetY: 0,",
        "                    velocityX: 0,",
        "                    velocityY: 0,",
        "                    size: randomBetween(config.particleSizeMin, config.particleSizeMax),",
        "                    alpha: randomBetween(config.particleAlphaMin, config.particleAlphaMax),",
        "                    flickerPhase: Math.random() * TWO_PI,",
        "                    flickerSpeed: randomBetween(0.6, 1.8),",
        "                    blinkPhase: Math.random() * TWO_PI,",
        "                    blinkSpeed: randomBetween(0.5, 1.4)",
        "                });",
        "            }",
        "        }",
        "    }",
        "",
        "    function resetFlowParticle(particle, initial) {",
        "        particle.progress = initial ? randomBetween(-0.22, 1.18) : randomBetween(-0.18, -0.02);",
        "        particle.theta = randomBetween(0, TWO_PI);",
        "        particle.radial = Math.sqrt(Math.random()) * 0.74;",
        "        particle.speed = randomBetween(config.flowSpeedMin, config.flowSpeedMax);",
        "        particle.size = randomBetween(config.flowSizeMin, config.flowSizeMax);",
        "        particle.alpha = randomBetween(config.flowAlphaMin, config.flowAlphaMax);",
        "        particle.phase = Math.random() * TWO_PI;",
        "        particle.entryXRatio = randomBetween(0.22, 0.78);",
        "        particle.entryYOffset = randomBetween(0.08, 0.2);",
        "    }",
        "",
        "    function buildFlowParticles() {",
        "        flowParticles = [];",
        "        for (let index = 0; index < config.flowParticleCount; index += 1) {",
        "            const particle = {};",
        "            resetFlowParticle(particle, true);",
        "            flowParticles.push(particle);",
        "        }",
        "    }",
        "",
        "    function getFlowProjection(particle, currentTime) {",
        "        const rawProgress = particle.progress;",
        "        const progress = clamp(rawProgress, 0, 1);",
        "        const section = getCrossSection(progress);",
        "        const scene = getSceneMetrics();",
        "        const seconds = currentTime * 0.001;",
        "        const swirl = particle.theta + seconds * config.flowSwirlSpeed + particle.phase + progress * config.flowTwistStrength;",
        "        const radius = section.radius * particle.radial * 0.72;",
        "        const localX = Math.cos(swirl) * radius;",
        "        const localZ = Math.sin(swirl) * radius;",
        "        let projection = projectPoint(localX, section.y, localZ);",
        "        const frontFactor = clamp(0.5 + projection.z / Math.max(1, section.radius * 2), 0, 1);",
        "        if (rawProgress < 0) {",
        "            const entryProgress = easeInOut(clamp((particle.progress + 0.22) / 0.22, 0, 1));",
        "            const startX = scene.offsetX + scene.logicalWidth * particle.entryXRatio * scene.sceneScale;",
        "            const startY = scene.offsetY - scene.logicalHeight * particle.entryYOffset * scene.sceneScale;",
            "            return {",
        "                x: lerp(startX, projection.x, entryProgress),",
        "                y: lerp(startY, projection.y, entryProgress),",
        "                z: projection.z,",
        "                scale: lerp(0.72 * scene.sceneScale, projection.scale, entryProgress),",
        "                frontFactor",
        "            };",
        "        }",
        "        if (rawProgress > 1) {",
        "            const outletProgress = clamp((rawProgress - 1) / 0.18, 0, 1);",
        "            const outletAngle = swirl + outletProgress * 1.1;",
        "            const outletRadius = Math.max(0, section.radius * particle.radial * 0.22 * (1 - outletProgress));",
        "            const outletX = Math.cos(outletAngle) * outletRadius;",
        "            const outletZ = Math.sin(outletAngle) * outletRadius;",
        "            const outletY = section.y + outletProgress * scene.logicalHeight * 0.16;",
        "            projection = projectPoint(outletX, outletY, outletZ);",
        "            return {",
        "                ...projection,",
        "                frontFactor: clamp(0.5 + projection.z / Math.max(1, section.radius * 2), 0, 1)",
        "            };",
        "        }",
        "        return { ...projection, frontFactor };",
        "    }",
        "",
        "    function updatePointer(event) {",
        "        const rect = wrap.getBoundingClientRect();",
        "        const scene = getSceneMetrics();",
        "        pointerX = event.clientX - rect.left;",
        "        pointerY = event.clientY - rect.top;",
        "",
        "        const normalizedX = clamp((pointerX - scene.offsetX) / Math.max(scene.sceneWidth, 1), 0, 1) * 2 - 1;",
        "        const normalizedY = clamp((pointerY - scene.offsetY) / Math.max(scene.sceneHeight, 1), 0, 1) * 2 - 1;",
        "        targetRotationY = normalizedX * config.maximumRotationY;",
        "        targetRotationX = -normalizedY * config.maximumRotationX;",
        "    }",
        "",
        "    function updateRotation() {",
        "        rotationX += (targetRotationX - rotationX) * config.rotationSpeed;",
        "        rotationY += (targetRotationY - rotationY) * config.rotationSpeed;",
        "    }",
        "",
        "    function calculateMaximumPulseDistance(originX, originY) {",
        "        const scene = getSceneMetrics();",
        "        const minX = scene.offsetX;",
        "        const maxX = scene.offsetX + scene.sceneWidth;",
        "        const minY = scene.offsetY;",
        "        const maxY = scene.offsetY + scene.sceneHeight;",
        "        return Math.max(",
        "            Math.hypot(originX - minX, originY - minY),",
        "            Math.hypot(originX - maxX, originY - minY),",
        "            Math.hypot(originX - minX, originY - maxY),",
        "            Math.hypot(originX - maxX, originY - maxY)",
        "        );",
        "    }",
        "",
        "    function triggerPulse(currentTime) {",
        "        if (config.pulseEnabled !== 'on') {",
        "            hoverPulseArmed = false;",
        "            return;",
        "        }",
        "",
        "        pulseOriginX = pointerX;",
        "        pulseOriginY = pointerY;",
        "        pulseStartTime = currentTime;",
        "        pulseMaximumDistance = calculateMaximumPulseDistance(pointerX, pointerY);",
        "        pulseActive = true;",
        "        nextPulseTime = currentTime + config.pulseRepeatDelay;",
        "        hoverPulseArmed = false;",
        "    }",
        "",
        "    function getPulseState(currentTime) {",
        "        if (config.pulseEnabled !== 'on' || !pulseActive) return null;",
        "",
        "        const progress = (currentTime - pulseStartTime) / Math.max(config.pulseDuration, 1);",
        "        if (progress >= 1) {",
        "            pulseActive = false;",
        "            return null;",
        "        }",
        "",
        "        const easedProgress = 1 - Math.pow(1 - progress, 2);",
        "        const fadeProgress = clamp((progress - 0.72) / 0.28, 0, 1);",
        "        const lifeFade = 1 - easeInOut(fadeProgress);",
        "        return {",
        "            radius: easedProgress * (pulseMaximumDistance + config.pulseRevealWidth),",
        "            lifeFade",
        "        };",
        "    }",
        "",
        "    function getDistanceFromPulse(x, y) {",
        "        return Math.hypot(x - pulseOriginX, y - pulseOriginY);",
        "    }",
        "",
        "    function getCursorReveal(x, y) {",
        "        if (config.maskEnabled !== 'on' || cursorRevealOpacity <= 0.001) return 0;",
        "",
        "        const scene = getSceneMetrics();",
        "        const radius = Math.max(config.minimumCursorRevealRadius, scene.sceneWidth * config.cursorRevealRadiusRatio);",
        "        const innerRadius = radius * (1 - config.cursorRevealSoftness);",
        "        const distance = Math.hypot(x - pointerX, y - pointerY);",
        "",
        "        if (distance <= innerRadius) {",
        "            return cursorRevealOpacity * config.cursorVisibilityStrength;",
        "        }",
        "",
        "        if (distance >= radius) return 0;",
        "",
        "        const normalized = 1 - (distance - innerRadius) / Math.max(radius - innerRadius, 0.0001);",
        "        return easeInOut(clamp(normalized, 0, 1)) * cursorRevealOpacity * config.cursorVisibilityStrength;",
        "    }",
        "",
        "    function getPulseReveal(distance, pulseState) {",
        "        if (config.maskEnabled !== 'on' || !pulseState) return 0;",
        "",
        "        const distanceFromPulse = Math.abs(distance - pulseState.radius);",
        "        let pulseStrength = Math.max(0, 1 - distanceFromPulse / Math.max(config.pulseRevealWidth, 0.0001));",
        "        pulseStrength = easeInOut(pulseStrength);",
        "",
        "        let trail = 0;",
        "        if (distance < pulseState.radius) {",
        "            const trailDistance = pulseState.radius - distance;",
        "            trail = Math.max(0, 1 - trailDistance / Math.max(config.pulseRevealWidth * 2.7, 0.0001));",
        "            trail *= config.pulseRevealTrail;",
        "        }",
        "",
        "        return clamp((pulseStrength * config.pulseRevealStrength + trail) * pulseState.lifeFade, 0, 1);",
        "    }",
        "",
        "    function getPulseAppearance(distance, pulseState) {",
        "        if (config.pulseEnabled !== 'on' || !pulseState) {",
        "            return { brightness: 0, sizeBoost: 0, mix: 0 };",
        "        }",
        "",
        "        const distanceFromPulse = Math.abs(distance - pulseState.radius);",
        "        let pulseStrength = Math.max(0, 1 - distanceFromPulse / Math.max(config.pulseWidth, 0.0001));",
        "        pulseStrength = easeInOut(pulseStrength);",
        "",
        "        const behindWave = distance < pulseState.radius",
        "            ? Math.max(0, 1 - (pulseState.radius - distance) / Math.max(config.pulseWidth * 3, 0.0001))",
        "            : 0;",
        "        const trail = behindWave * config.pulseRevealTrail * 0.6 * pulseState.lifeFade;",
        "        const strength = pulseStrength * pulseState.lifeFade;",
        "",
        "        return {",
        "            brightness: strength * config.pulseBrightness + trail,",
        "            sizeBoost: strength * config.pulseSizeBoost,",
        "            mix: clamp(strength + trail, 0, 1)",
        "        };",
        "    }",
        "",
        "    function updateShellParticles(deltaMultiplier, currentTime) {",
        "        const scene = getSceneMetrics();",
        "        const pointerRadius = Math.max(config.minimumPointerRadius, scene.sceneWidth * config.pointerRadiusRatio);",
        "        const pointerRadiusSquared = pointerRadius * pointerRadius;",
        "        const frameFriction = Math.pow(config.friction, deltaMultiplier);",
        "",
        "        for (const particle of shellParticles) {",
        "            const projection = getShellProjection(particle, currentTime);",
        "            const renderX = projection.x + particle.offsetX;",
        "            const renderY = projection.y + particle.offsetY;",
        "",
        "            if (pointerActive) {",
        "                const deltaX = renderX - pointerX;",
        "                const deltaY = renderY - pointerY;",
        "                const distanceSquared = deltaX * deltaX + deltaY * deltaY;",
        "",
        "                if (distanceSquared > 0.001 && distanceSquared < pointerRadiusSquared) {",
        "                    const distance = Math.sqrt(distanceSquared);",
        "                    const influence = 1 - distance / pointerRadius;",
        "                    const force = influence * influence * config.repulsionStrength * deltaMultiplier;",
        "                    particle.velocityX += (deltaX / distance) * force;",
        "                    particle.velocityY += (deltaY / distance) * force;",
        "                }",
        "            }",
        "",
        "            particle.velocityX += -particle.offsetX * config.springStrength * deltaMultiplier;",
        "            particle.velocityY += -particle.offsetY * config.springStrength * deltaMultiplier;",
        "            particle.velocityX *= frameFriction;",
        "            particle.velocityY *= frameFriction;",
        "            particle.offsetX += particle.velocityX * deltaMultiplier;",
        "            particle.offsetY += particle.velocityY * deltaMultiplier;",
        "        }",
        "    }",
        "",
        "    function updateFlowParticles(deltaMultiplier) {",
        "        for (const particle of flowParticles) {",
        "            const acceleration = 1 + Math.pow(clamp((particle.progress - 0.62) / 0.38, 0, 1), 2) * config.flowAcceleration;",
        "            particle.progress += particle.speed * acceleration * deltaMultiplier * 0.01;",
        "",
        "            if (particle.progress > 1.18) {",
        "                resetFlowParticle(particle, false);",
        "            }",
        "        }",
        "    }",
        "",
        "    function drawShellParticles(currentTime, pulseState, drawFront, shellRgb, pulseRgb) {",
        "        const seconds = currentTime * 0.001;",
        "",
        "        for (const particle of shellParticles) {",
        "            const projection = getShellProjection(particle, currentTime);",
            "            const isFront = projection.frontFactor >= 0.5;",
        "            if (isFront !== drawFront) continue;",
        "",
        "            const renderX = projection.x + particle.offsetX;",
        "            const renderY = projection.y + particle.offsetY;",
        "            const pulseDistance = getDistanceFromPulse(renderX, renderY);",
        "            const cursorReveal = getCursorReveal(renderX, renderY);",
        "            const pulseReveal = getPulseReveal(pulseDistance, pulseState);",
        "            const reveal = Math.max(cursorReveal, pulseReveal);",
        "            const visibility = config.maskEnabled === 'on' ? config.baseVisibility + (1 - config.baseVisibility) * reveal : 1;",
        "            const flicker = 0.78 + (Math.sin(seconds * particle.flickerSpeed + particle.flickerPhase) + 1) * 0.18;",
        "            const blinkWave = Math.max(0, Math.sin(seconds * particle.blinkSpeed + particle.blinkPhase));",
        "            const blink = Math.pow(blinkWave, 24);",
        "            const pulse = getPulseAppearance(pulseDistance, pulseState);",
        "            const depthBrightness = lerp(0.5, 1.2, projection.frontFactor);",
        "            const baseContribution = particle.alpha * flicker * depthBrightness + blink * 0.18;",
        "            const pulseContribution = pulse.brightness * config.pulseColorOpacity;",
        "            const alpha = Math.min(1, (baseContribution + pulseContribution) * visibility);",
        "            const size = particle.size * projection.scale * lerp(0.8, 1.18, projection.frontFactor) * (1 + blink * 0.55) * (1 + pulse.sizeBoost);",
        "            const pulseMix = alpha > 0 ? clamp((pulseContribution * visibility) / alpha, 0, 1) : 0;",
        "            const rgb = {",
        "                r: Math.round(lerp(shellRgb.r, pulseRgb.r, pulseMix)),",
        "                g: Math.round(lerp(shellRgb.g, pulseRgb.g, pulseMix)),",
        "                b: Math.round(lerp(shellRgb.b, pulseRgb.b, pulseMix))",
        "            };",
        "",
        "            drawParticle(renderX, renderY, size, alpha, rgb);",
        "        }",
        "    }",
        "",
        "    function drawFlowParticles(currentTime, pulseState, flowRgb, pulseRgb) {",
        "        for (const particle of flowParticles) {",
        "            const projection = getFlowProjection(particle, currentTime);",
        "            const pulseDistance = getDistanceFromPulse(projection.x, projection.y);",
        "            const cursorReveal = getCursorReveal(projection.x, projection.y);",
        "            const pulseReveal = getPulseReveal(pulseDistance, pulseState);",
        "            const reveal = Math.max(cursorReveal, pulseReveal);",
        "            const visibility = config.maskEnabled === 'on' ? 0.44 + reveal * 0.56 : 1;",
        "            const pulse = getPulseAppearance(pulseDistance, pulseState);",
        "            const depthBrightness = lerp(0.72, 1.22, projection.frontFactor);",
        "            const entryFade = particle.progress < 0 ? easeInOut(clamp((particle.progress + 0.22) / 0.22, 0, 1)) : 1;",
        "            const exitFade = particle.progress > 0.9 ? 1 - easeInOut(clamp((particle.progress - 0.9) / 0.28, 0, 1)) : 1;",
        "            const streamFade = entryFade * exitFade;",
        "            const baseContribution = particle.alpha * depthBrightness;",
        "            const pulseContribution = pulse.brightness * config.pulseColorOpacity;",
        "            const alpha = Math.min(1, (baseContribution + pulseContribution) * visibility * streamFade);",
        "            const size = particle.size * projection.scale * lerp(0.86, 1.18, projection.frontFactor) * (1 + pulse.sizeBoost) * lerp(0.86, 1, streamFade);",
        "            const pulseMix = alpha > 0 ? clamp((pulseContribution * visibility) / alpha, 0, 1) : 0;",
        "            const rgb = {",
        "                r: Math.round(lerp(flowRgb.r, pulseRgb.r, pulseMix)),",
        "                g: Math.round(lerp(flowRgb.g, pulseRgb.g, pulseMix)),",
        "                b: Math.round(lerp(flowRgb.b, pulseRgb.b, pulseMix))",
        "            };",
        "",
        "            drawParticle(projection.x, projection.y, size, alpha, rgb);",
        "        }",
        "    }",
        "",
        "    function draw(currentTime, pulseState) {",
        "        ctx.clearRect(0, 0, width, height);",
        "        cursorRevealOpacity += (targetCursorRevealOpacity - cursorRevealOpacity) * config.cursorRevealFadeSpeed;",
        "",
        "        const shellRgb = hexToRgb(config.particleColor);",
        "        const flowRgb = hexToRgb(config.flowColor);",
        "        const pulseRgb = hexToRgb(config.pulseColor);",
        "",
        "        drawShellParticles(currentTime, pulseState, false, shellRgb, pulseRgb);",
        "        drawFlowParticles(currentTime, pulseState, flowRgb, pulseRgb);",
        "        drawShellParticles(currentTime, pulseState, true, shellRgb, pulseRgb);",
        "    }",
        "",
        "    function animate(currentTime) {",
        "        animationFrameId = requestAnimationFrame(animate);",
        "        const elapsed = currentTime - lastFrameTime;",
        "        lastFrameTime = currentTime;",
        "        const deltaMultiplier = Math.min(elapsed / 16.667 || 1, 2);",
        "",
        "        updateRotation();",
        "",
        "        if (config.pulseEnabled === 'on' && pointerActive && currentTime >= nextPulseTime) {",
        "            triggerPulse(currentTime);",
        "        }",
        "",
        "        const pulseState = getPulseState(currentTime);",
        "        updateShellParticles(deltaMultiplier, currentTime);",
        "        updateFlowParticles(deltaMultiplier);",
        "        draw(currentTime, pulseState);",
        "    }",
        "",
        "    wrap.addEventListener('pointerenter', function (event) {",
        "        updatePointer(event);",
        "        pointerActive = true;",
        "        targetCursorRevealOpacity = config.maskEnabled === 'on' ? 1 : 0;",
        "        if (hoverPulseArmed) {",
        "            triggerPulse(performance.now());",
        "        }",
        "    });",
        "",
        "    wrap.addEventListener('pointermove', function (event) {",
        "        updatePointer(event);",
        "        pointerActive = true;",
        "        targetCursorRevealOpacity = config.maskEnabled === 'on' ? 1 : 0;",
        "        if (hoverPulseArmed) {",
        "            triggerPulse(performance.now());",
        "        }",
        "    });",
        "",
        "    wrap.addEventListener('pointerleave', function () {",
        "        pointerActive = false;",
        "        targetCursorRevealOpacity = 0;",
        "        targetRotationX = 0;",
        "        targetRotationY = 0;",
        "        nextPulseTime = Infinity;",
        "        hoverPulseArmed = true;",
        "    });",
        "",
        "    wrap.addEventListener('pointerdown', function (event) {",
        "        updatePointer(event);",
        "        pointerActive = true;",
        "        targetCursorRevealOpacity = config.maskEnabled === 'on' ? 1 : 0;",
        "        triggerPulse(performance.now());",
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

function generateFooterEmbedCode(settings) {
    const color = normalizeHexColor(settings.particleColor);
    const pulseColor = normalizeHexColor(settings.pulseColor);
    const backgroundColor = normalizeHexColor(settings.backgroundColor);
    const backgroundStyle = getEffectiveBackgroundStyle(settings);
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
        `        backgroundStyle: ${JSON.stringify(backgroundStyle)},`,
        `        particleColor: ${JSON.stringify(color)},`,
        `        pulseColor: ${JSON.stringify(pulseColor)},`,
        `        pulseColorOpacity: ${formatNumber(settings.pulseColorOpacity, 2)},`,
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
        `        backgroundDotsOpacity: ${formatNumber(settings.backgroundDotsOpacity, 2)},`,
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
        "    wrap.style.backgroundColor = config.backgroundStyle;",
        "    wrap.style.overflow = 'hidden';",
        "    wrap.style.cursor = 'default';",
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
        "                const baseX = x + (Math.random() - 0.5) * jitter;",
        "                const baseY = y + (Math.random() - 0.5) * jitter;",
        "                const isInteractive = isInsideLogo(baseX, baseY);",
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
        "                    isInteractive,",
        "                    isBorder: isInteractive && isOnLogoBorder(baseX, baseY),",
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
        "        if (config.pulseVariant === 'none') return false;",
        "        if (Number.isFinite(nextPulseTime) && currentTime < nextPulseTime) return false;",
        "        activePulses.push({",
        "            startTime: currentTime,",
        "            originX: pointerX,",
        "            originY: pointerY,",
        "            maximumDistance: calculateMaximumPulseDistance(pointerX, pointerY)",
        "        });",
        "        nextPulseTime = currentTime + config.pulseRepeatDelay;",
        "        return true;",
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
        "            if (particle.isInteractive && logoHoverActive) {",
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
        "            const cursorReveal = particle.isInteractive ? getCursorMask(particle) : 0;",
        "            const pulseReveal = particle.isInteractive ? getPulseReveal(particle, pulseStates) : 0;",
        "            const reveal = Math.max(cursorReveal, pulseReveal);",
        "            const visibility = particle.isInteractive ? (config.maskEnabled === 'on' ? config.baseVisibility + (1 - config.baseVisibility) * reveal : 1) : config.backgroundDotsOpacity;",
        "            const flickerWave = (Math.sin(seconds * particle.flickerSpeed + particle.flickerPhase) + 1) * 0.5;",
        "            const flickerMultiplier = 1 - particle.flickerDepth + flickerWave * particle.flickerDepth * 2;",
        "            const blinkWave = Math.max(0, Math.sin(seconds * particle.blinkSpeed + particle.blinkPhase));",
        "            const sharpBlink = Math.pow(blinkWave, 22) * particle.blinkStrength;",
        "            const pulse = particle.isInteractive ? getPulseValues(particle, pulseStates) : { brightness: 0, sizeBoost: 0 };",
        "            const baseContribution = (particle.baseAlpha * flickerMultiplier + sharpBlink) * visibility;",
        "            const pulseContribution = pulse.brightness * config.pulseColorOpacity * visibility;",
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
        "        }",
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

        let migratedFooterPresets = false;
        const normalizedSavedPatterns = savedPatterns.map((pattern) => {
            if (
                pattern.animationType === FOOTER_ANIMATION &&
                Number(pattern.settings.backgroundDotsOpacity) === 1
            ) {
                migratedFooterPresets = true;
                return {
                    ...pattern,
                    settings: {
                        ...pattern.settings,
                        backgroundDotsOpacity: 0.3
                    }
                };
            }

            return pattern;
        });

        if (migratedFooterPresets) {
            persistPatterns(normalizedSavedPatterns);
        }

        return [...builtInPatterns, ...normalizedSavedPatterns];
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
        `background-color: ${getEffectiveBackgroundStyle(settings)}`,
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

function formatColorWithAlpha(value, alpha = 1) {
    const rgb = hexToRgb(value);
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${formatNumber(clamp(alpha, 0, 1), 2)})`;
}

function getEffectiveBackgroundOpacity(settings) {
    if (!settings || settings.backgroundEnabled === "off") {
        return 0;
    }

    return clamp(settings.backgroundOpacity, 0, 1);
}

function getEffectiveBackgroundStyle(settings) {
    const alpha = getEffectiveBackgroundOpacity(settings);

    if (alpha <= 0.0001) {
        return "transparent";
    }

    return formatColorWithAlpha(settings.backgroundColor, alpha);
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
