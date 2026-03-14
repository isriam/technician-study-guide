# T3 — Radio Wave Propagation
*3 questions on the exam from a pool of 34*

## Group T3A — Radio wave characteristics; how a radio signal travels; fading; multipath; polarization; knife-edge diffraction; absorption; weather and frequency effects

### T3A01
**Why do VHF signal strengths sometimes vary greatly when the antenna is moved only a few feet?**
- A) The signal path encounters different concentrations of water vapor
- B) VHF ionospheric propagation is very sensitive to path length
- **C) Multipath propagation cancels or reinforces signals** ✅
- D) All these choices are correct

> Multipath propagation causes signals arriving via different paths to either cancel (destructive interference) or reinforce (constructive interference) each other. Moving just a fraction of a wavelength can shift from a null to a peak. At VHF wavelengths (~2 meters), a few feet makes a big difference.

### T3A02
**What is the effect of vegetation on UHF and microwave signals?**
- A) Knife-edge diffraction
- **B) Absorption** ✅
- C) Amplification
- D) Polarization rotation

> Trees and vegetation absorb UHF and microwave signals. The water content in leaves is particularly effective at soaking up these higher frequencies. This is why signals degrade when passing through wooded areas.

### T3A03
**What antenna polarization is normally used for long-distance CW and SSB contacts on the VHF and UHF bands?**
- A) Right-hand circular
- B) Left-hand circular
- **C) Horizontal** ✅
- D) Vertical

> Horizontal polarization is standard for weak-signal VHF/UHF work (CW and SSB). Vertical is used for FM. The convention exists because horizontal antennas (like Yagis) tend to have less man-made noise pickup and are standard for directional work.

### T3A04
**What happens when antennas at opposite ends of a VHF or UHF line of sight radio link are not using the same polarization?**
- A) The modulation sidebands might become inverted
- **B) Received signal strength is reduced** ✅
- C) Signals have an echo effect
- D) Nothing significant will happen

> Cross-polarization (mismatched polarization) reduces signal strength — potentially by 20 dB or more for a 90° mismatch. This is why both stations should use the same polarization. It won't invert sidebands or create echoes.

### T3A05
**When using a directional antenna, how might your station be able to communicate with a distant repeater if buildings or obstructions are blocking the direct line of sight path?**
- A) Change from vertical to horizontal polarization
- **B) Try to find a path that reflects signals to the repeater** ✅
- C) Try the long path
- D) Increase the antenna SWR

> If the direct path is blocked, aim your antenna at a reflective surface (building, hillside, water tower) to bounce your signal around the obstruction. This is signal reflection/multipath used intentionally. Increasing SWR would make things worse, not better.

### T3A06
**What is the meaning of the term "picket fencing"?**
- A) Alternating transmissions during a net operation
- **B) Rapid flutter on mobile signals due to multipath propagation** ✅
- C) A type of ground system used with vertical antennas
- D) Local vs long-distance communications

> Picket fencing is the rapid flutter effect you hear on mobile VHF/UHF signals — the signal rapidly cuts in and out as the moving vehicle passes through alternating multipath nulls and peaks. It sounds like someone talking behind a picket fence.

### T3A07
**What weather condition might decrease range at microwave frequencies?**
- A) High winds
- B) Low barometric pressure
- **C) Precipitation** ✅
- D) Colder temperatures

> Rain, snow, and other precipitation absorb and scatter microwave signals, reducing range. This effect increases with frequency — it's significant above about 10 GHz. Wind and pressure don't directly affect microwave propagation.

### T3A08
**What is a likely cause of irregular fading of signals propagated by the ionosphere?**
- A) Frequency shift due to Faraday rotation
- B) Interference from thunderstorms
- C) Intermodulation distortion
- **D) Random combining of signals arriving via different paths** ✅

> Ionospheric fading happens because signals take multiple paths through the ionosphere and arrive at slightly different times and phases. When they combine randomly, signal strength fluctuates unpredictably. This is multipath fading at HF.

### T3A09
**Which of the following results from the fact that signals propagated by the ionosphere are elliptically polarized?**
- A) Digital modes are unusable
- **B) Either vertically or horizontally polarized antennas may be used for transmission or reception** ✅
- C) FM voice is unusable
- D) Both the transmitting and receiving antennas must be of the same polarization

> The ionosphere rotates signal polarization (Faraday rotation), making the arriving signal elliptically polarized. This means either vertical or horizontal antennas work for reception — the polarization mismatch penalty is less severe because the signal has components in both planes.

### T3A10
**What effect does multi-path propagation have on data transmissions?**
- A) Transmission rates must be increased by a factor equal to the number of separate paths observed
- B) Transmission rates must be decreased by a factor equal to the number of separate paths observed
- C) No significant changes will occur if the signals are transmitted using FM
- **D) Error rates are likely to increase** ✅

> Multipath causes copies of the signal to arrive at different times, creating inter-symbol interference in data transmissions. This increases error rates. Digital modes designed for multipath conditions (like OFDM) mitigate this, but the basic effect is more errors.

### T3A11
**Which region of the atmosphere can refract or bend HF and VHF radio waves?**
- A) The stratosphere
- B) The troposphere
- **C) The ionosphere** ✅
- D) The mesosphere

> The ionosphere (60-600 km altitude) contains ionized gases that can refract radio waves back to Earth. This is the key to long-distance HF communication. The troposphere can bend VHF/UHF via ducting, but the ionosphere is the primary answer for refracting both HF and VHF.

### T3A12
**What is the effect of fog and rain on signals in the 10 meter and 6 meter bands?**
- A) Absorption
- **B) There is little effect** ✅
- C) Deflection
- D) Range increase

> At 10 meter and 6 meter frequencies (28-54 MHz), the wavelengths are long enough that fog and rain have negligible effect. Weather absorption becomes significant only at microwave frequencies (above several GHz). Low frequencies punch through weather.

---

## Group T3B — Electromagnetic wave properties; the electromagnetic spectrum; frequency and wavelength calculations

### T3B01
**What is the relationship between the electric and magnetic fields of an electromagnetic wave?**
- A) They travel at different speeds
- B) They are in parallel
- C) They revolve in opposite directions
- **D) They are at right angles** ✅

> The electric and magnetic fields of an electromagnetic wave are perpendicular (at right angles) to each other and both perpendicular to the direction of travel. This is fundamental electromagnetic theory — they're always at 90° to each other.

### T3B02
**What property of a radio wave defines its polarization?**
- **A) The orientation of the electric field** ✅
- B) The orientation of the magnetic field
- C) The ratio of the energy in the magnetic field to the energy in the electric field
- D) The ratio of the velocity to the wavelength

> Polarization is defined by the orientation of the electric field (E-field). If the E-field is vertical, it's vertically polarized. If horizontal, horizontally polarized. The magnetic field is always perpendicular to it but doesn't define polarization.

### T3B03
**What are the two components of a radio wave?**
- A) Impedance and reactance
- B) Voltage and current
- **C) Electric and magnetic fields** ✅
- D) Ionizing and non-ionizing radiation

> Radio waves consist of electric and magnetic fields oscillating together. They're electromagnetic waves — "electro" (electric field) + "magnetic" (magnetic field). Not voltage/current (those are circuit concepts) and not radiation types.

### T3B04
**What is the velocity of a radio wave traveling through free space?**
- **A) Speed of light** ✅
- B) Speed of sound
- C) Speed inversely proportional to its wavelength
- D) Speed that increases as the frequency increases

> Radio waves travel at the speed of light in free space — approximately 300,000,000 meters per second. All electromagnetic radiation (radio, light, X-rays) travels at the same speed in a vacuum, regardless of frequency.

### T3B05
**What is the relationship between wavelength and frequency?**
- A) Wavelength gets longer as frequency increases
- **B) Wavelength gets shorter as frequency increases** ✅
- C) Wavelength and frequency are unrelated
- D) Wavelength and frequency increase as path length increases

> Wavelength and frequency are inversely related. As frequency goes up, wavelength goes down. Think of it: more cycles per second means each cycle takes up less space. The formula: wavelength = 300 / frequency(MHz).

### T3B06
**What is the formula for converting frequency to approximate wavelength in meters?**
- A) Wavelength in meters equals frequency in hertz multiplied by 300
- B) Wavelength in meters equals frequency in hertz divided by 300
- C) Wavelength in meters equals frequency in megahertz divided by 300
- **D) Wavelength in meters equals 300 divided by frequency in megahertz** ✅

> λ (meters) = 300 / f (MHz). This is the essential formula. 300 comes from the speed of light (300,000,000 m/s) converted to work with MHz. Example: 146 MHz → 300/146 ≈ 2.05 meters (the "2 meter" band).

### T3B07
**In addition to frequency, which of the following is used to identify amateur radio bands?**
- **A) The approximate wavelength in meters** ✅
- B) Traditional letter/number designators
- C) Channel numbers
- D) All these choices are correct

> Amateur bands are identified by wavelength — "2 meters," "70 centimeters," "10 meters," etc. We don't use channel numbers (that's CB/FRS) or letter/number designators (that's military radar bands).

### T3B08
**What frequency range is referred to as VHF?**
- A) 30 kHz to 300 kHz
- **B) 30 MHz to 300 MHz** ✅
- C) 300 kHz to 3000 kHz
- D) 300 MHz to 3000 MHz

> VHF (Very High Frequency) = 30 MHz to 300 MHz. This includes the 6 meter (50 MHz), 2 meter (144 MHz), and 1.25 meter (222 MHz) amateur bands. Remember the pattern: each range spans a factor of 10.

### T3B09
**What frequency range is referred to as UHF?**
- A) 30 to 300 kHz
- B) 30 to 300 MHz
- C) 300 to 3000 kHz
- **D) 300 to 3000 MHz** ✅

> UHF (Ultra High Frequency) = 300 MHz to 3000 MHz. This includes the 70 cm (440 MHz), 33 cm (902 MHz), and 23 cm (1296 MHz) amateur bands. UHF starts where VHF ends — at 300 MHz.

### T3B10
**What frequency range is referred to as HF?**
- A) 300 to 3000 MHz
- B) 30 to 300 MHz
- **C) 3 to 30 MHz** ✅
- D) 300 to 3000 kHz

> HF (High Frequency) = 3 to 30 MHz. This is the classic "shortwave" range that includes bands from 80 meters down to 10 meters. HF is where long-distance ionospheric propagation happens.

### T3B11
**What is the approximate velocity of a radio wave in free space?**
- A) 150,000 meters per second
- **B) 300,000,000 meters per second** ✅
- C) 300,000,000 miles per hour
- D) 150,000 miles per hour

> Radio waves travel at approximately 300,000,000 meters per second (3 × 10⁸ m/s) — the speed of light. Note the units: meters per second, not miles per hour. This number is also why 300 appears in the wavelength formula.

---

## Group T3C — Propagation modes; ionospheric layers; sporadic E; tropospheric ducting; meteor scatter

### T3C01
**Why are simplex UHF signals rarely heard beyond their radio horizon?**
- A) They are too weak to go very far
- B) FCC regulations prohibit them from going more than 50 miles
- **C) UHF signals are usually not propagated by the ionosphere** ✅
- D) UHF signals are absorbed by the ionospheric D region

> UHF frequencies are generally too high to be refracted by the ionosphere — they pass right through it into space. This limits UHF to line-of-sight range (plus some bending by the troposphere). There's no FCC distance limit, and the D region absorbs HF, not UHF.

### T3C02
**What is a characteristic of HF communication compared with communications on VHF and higher frequencies?**
- A) HF antennas are generally smaller
- B) HF accommodates wider bandwidth signals
- **C) Long-distance ionospheric propagation is far more common on HF** ✅
- D) There is less atmospheric interference (static) on HF

> HF's big advantage is ionospheric propagation — signals bounce off the ionosphere for long-distance (thousands of miles) communication. VHF/UHF are mostly line-of-sight. HF actually has more static/atmospheric noise, and HF antennas are bigger, not smaller.

### T3C03
**What is a characteristic of VHF signals received via auroral backscatter?**
- A) They are often received from 10,000 miles or more
- **B) They are distorted and signal strength varies considerably** ✅
- C) They occur only during winter nighttime hours
- D) They are generally strongest when your antenna is aimed west

> Auroral backscatter reflects VHF signals off the aurora borealis, but the irregular, moving surface of the aurora causes significant distortion and signal variation. CW is often the only usable mode because voice becomes garbled.

### T3C04
**Which of the following types of propagation is most commonly associated with occasional strong signals on the 10, 6, and 2 meter bands from beyond the radio horizon?**
- A) Backscatter
- **B) Sporadic E** ✅
- C) D region absorption
- D) Gray-line propagation

> Sporadic E (Es) propagation occurs when dense patches of ionization form in the E layer, reflecting signals from 10, 6, and sometimes 2 meter frequencies over long distances. It's "sporadic" because it's unpredictable, and it can produce remarkably strong signals.

### T3C05
**Which of the following effects may allow radio signals to travel beyond obstructions between the transmitting and receiving stations?**
- **A) Knife-edge diffraction** ✅
- B) Faraday rotation
- C) Quantum tunneling
- D) Doppler shift

> Knife-edge diffraction occurs when a signal passes over a sharp obstacle (like a mountain ridge or building edge) and bends around it. It's similar to how ocean waves bend around a breakwater. Faraday rotation, Doppler shift, and quantum tunneling don't help signals get past obstructions.

### T3C06
**What type of propagation is responsible for allowing over-the-horizon VHF and UHF communications to ranges of approximately 300 miles on a regular basis?**
- **A) Tropospheric ducting** ✅
- B) D region refraction
- C) F2 region refraction
- D) Faraday rotation

> Tropospheric ducting traps VHF/UHF signals in a "duct" formed by temperature inversions in the lower atmosphere, carrying them well beyond the horizon. The ~300 mile range is characteristic of tropospheric ducting. The D region doesn't refract — it absorbs.

### T3C07
**What band is best suited for communicating via meteor scatter?**
- A) 33 centimeters
- **B) 6 meters** ✅
- C) 2 meters
- D) 70 centimeters

> The 6 meter band (50 MHz) is ideal for meteor scatter communication. The ionized trails left by meteors effectively reflect signals at these frequencies. Higher frequencies don't scatter as well, and lower frequencies don't need the meteor trail.

### T3C08
**What causes tropospheric ducting?**
- A) Discharges of lightning during electrical storms
- B) Sunspots and solar flares
- C) Updrafts from hurricanes and tornadoes
- **D) Temperature inversions in the atmosphere** ✅

> Temperature inversions — where warm air sits on top of cool air — create a boundary that acts like a waveguide, trapping and channeling VHF/UHF signals. This is tropospheric ducting. Sunspots affect the ionosphere, not the troposphere.

### T3C09
**What is generally the best time for long-distance 10 meter band propagation via the F region?**
- **A) From dawn to shortly after sunset during periods of high sunspot activity** ✅
- B) From shortly after sunset to dawn during periods of high sunspot activity
- C) From dawn to shortly after sunset during periods of low sunspot activity
- D) From shortly after sunset to dawn during periods of low sunspot activity

> 10 meter propagation needs both strong solar ionization (daytime + high sunspot activity) to create enough F-region ionization. The band opens during daylight hours when the sun is ionizing the atmosphere, during solar maximum years.

### T3C10
**Which of the following bands may provide long-distance communications via the ionosphere's F region during the peak of the sunspot cycle?**
- **A) 6 and 10 meters** ✅
- B) 23 centimeters
- C) 70 centimeters and 1.25 meters
- D) All these choices are correct

> During sunspot maximum, the F region becomes ionized enough to refract signals up to about 50 MHz. This means 10 meters (28 MHz) and occasionally 6 meters (50 MHz) can produce long-distance ionospheric propagation. UHF bands (70 cm, 23 cm) are too high to be refracted.

### T3C11
**Why is the radio horizon for VHF and UHF signals more distant than the visual horizon?**
- A) Radio signals move somewhat faster than the speed of light
- B) Radio waves are not blocked by dust particles
- **C) The atmosphere refracts radio waves slightly** ✅
- D) Radio waves are blocked by dust particles

> The atmosphere bends (refracts) radio waves slightly downward, allowing them to follow Earth's curvature a bit beyond the visual horizon. This extends the radio horizon by roughly 15% compared to the optical horizon. Radio waves do NOT travel faster than light.
