# Cram Sheet

Read this the morning of your exam. Key facts, formulas, and numbers that show up repeatedly.

---

## Formulas

| Formula | What It Means |
|---------|---------------|
| **E = I × R** | Voltage = Current × Resistance (Ohm's Law) |
| **I = E / R** | Current = Voltage / Resistance |
| **R = E / I** | Resistance = Voltage / Current |
| **P = E × I** | Power = Voltage × Current |
| **P = I² × R** | Power = Current² × Resistance |
| **P = E² / R** | Power = Voltage² / Resistance |
| **λ = 300 / f(MHz)** | Wavelength (meters) = 300 / frequency in MHz |

## Decibels

| dB Change | Power Change |
|-----------|-------------|
| **+3 dB** | Double power |
| **-3 dB** | Half power |
| **+10 dB** | 10× power |
| **-10 dB** | 1/10 power |
| **+20 dB** | 100× power |

## Metric Prefixes

| Prefix | Symbol | Value |
|--------|--------|-------|
| Giga | G | 1,000,000,000 |
| Mega | M | 1,000,000 |
| Kilo | k | 1,000 |
| Milli | m | 0.001 |
| Micro | µ | 0.000001 |
| Pico | p | 0.000000000001 |

## Band Privileges (Technician)

| Band | Frequencies | Modes | Max Power |
|------|------------|-------|-----------|
| **80m** | 3.525–3.600 MHz | CW only | 200W PEP |
| **40m** | 7.025–7.125 MHz | CW only | 200W PEP |
| **15m** | 21.025–21.200 MHz | CW only | 200W PEP |
| **10m** | 28.000–28.300 MHz | CW, RTTY, data | 200W PEP |
| **10m** | 28.300–28.500 MHz | CW, SSB | 200W PEP |
| **6m** | 50–54 MHz | All modes | 1500W PEP |
| **2m** | 144–148 MHz | All modes | 1500W PEP |
| **1.25m** | 222–225 MHz | All modes | 1500W PEP |
| **70cm** | 420–450 MHz | All modes | 1500W PEP |
| **23cm** | 1240–1300 MHz | All modes | 1500W PEP |

> VHF/UHF = full privileges. HF = limited (CW only on 80/40/15, CW+SSB+data on 10m).

## Key Frequencies

| Frequency | What |
|-----------|------|
| 146.520 MHz | 2m FM national calling frequency |
| 446.000 MHz | 70cm FM national calling frequency |
| 52.525 MHz | 6m FM national calling frequency |
| 28.200–28.300 MHz | HF beacon sub-band (10m) |
| 156.800 MHz | NOT amateur — marine channel 16 (emergency) |

## Repeater Offsets

| Band | Standard Offset |
|------|----------------|
| 2m (144–148 MHz) | ± 600 kHz |
| 70cm (420–450 MHz) | ± 5 MHz |
| 1.25m (222–225 MHz) | −1.6 MHz |
| 6m (50–54 MHz) | −1 MHz or −500 kHz |

## License Rules

| Fact | Answer |
|------|--------|
| Call sign format (Technician) | **Group D** — two-by-three (e.g., KF1XXX) |
| License term | **10 years** |
| Grace period after expiration | **2 years** (can renew but can't transmit) |
| Minimum age | **None** |
| Who can grant a license | **The FCC** |
| Who gives the exam | **Volunteer Examiners (VEs)** |
| Control operator requirement | **Must be present or remote** |
| Station ID | **Every 10 minutes and at end of contact** |
| ID method | **Phone (voice) or CW** |
| Max power (general rule) | **Use minimum necessary** |
| Technician HF CW power | **200W PEP** |
| VHF/UHF max power | **1500W PEP** |
| Third-party traffic | **Allowed with countries that have agreements** |
| Prohibited transmissions | **Music, obscenity, false signals, encryption to hide meaning** |
| Encryption allowed when | **Only for space station or radio control craft commands** |
| When can you transmit without ID | **Only when power is below 0.1 watt** (e.g., model craft) |
| On-air test transmissions | **Must identify the transmitting station** |
| License renewal window | **Up to 90 days before expiration** |
| Operating another person's station | **Allowed — your privileges apply** |

## Propagation

| Mode | What It Is |
|------|-----------|
| **Line of sight** | VHF/UHF normal — limited by horizon |
| **Sporadic E** | Surprise VHF skip via E-layer patches |
| **Tropospheric ducting** | VHF/UHF bending in weather inversions |
| **Meteor scatter** | Brief VHF reflections off meteor trails |
| **RF velocity** | All radio frequencies travel at the same speed in free space (~300,000,000 m/s) |
| **F-layer skip** | HF signals bounce off F-layer (10m and below) |

## Safety

| Rule | Key Fact |
|------|----------|
| RF exposure | **Perform an RF exposure evaluation** for every station |
| Power line clearance | **At least 10 feet** from power lines for any antenna |
| Lightning protection | **Disconnect feedlines** when not in use |
| Tower climbing | **Never climb alone** — always have a ground helper |
| Electrical safety | **Turn off and lock out** power before working on equipment |
| RF burns | Caused by **touching an antenna during transmission** |

## Components

| Component | What It Does |
|-----------|-------------|
| **Resistor** | Opposes current flow (unit: Ohm) |
| **Capacitor** | Stores energy in electric field (unit: Farad) |
| **Inductor** | Stores energy in magnetic field (unit: Henry) |
| **Diode** | Allows current in one direction only |
| **LED** | Diode that emits light |
| **Transistor** | Amplifies or switches signals |
| **Fuse** | Protects circuit by breaking on overcurrent |
| **Regulator** | Maintains constant voltage |
| **Ohmmeter** | Measures resistance by passing small current and measuring voltage |

## Modulation Types

| Type | What |
|------|------|
| **FM** | Frequency varies with signal — most VHF/UHF voice |
| **AM** | Amplitude varies — airband, some HF |
| **SSB** | Single sideband — efficient HF voice (USB above 10 MHz, LSB below) |
| **CW** | Morse code — most efficient, narrowest bandwidth |
| **FT8** | Digital weak-signal mode — very popular |
| **DMR** | Digital Mobile Radio — digital voice on FM channels |
| **Talkgroup** | DMR identifier that organizes radio traffic into groups |
| **Winlink** | Email over radio using amateur callsign-based addresses |

## Common Traps

- **RACES vs ARES** — RACES requires civil defense agency certification; ARES is purely voluntary
- **"All these choices are correct"** — usually wrong unless it really is all of them
- **Power in watts vs. dBm** — exam always means watts unless it says otherwise
- **Wavelength formula** — it's 300/MHz, not 300×MHz
- **Ohm's Law** — know all three forms cold: E=IR, I=E/R, R=E/I
- **Band edges** — Technicians can use 28.0–28.5 MHz, not all of 10m
- **"Minimum power necessary"** — FCC says use the least power needed for communication
