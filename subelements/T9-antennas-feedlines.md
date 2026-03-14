# T9 — Antennas and Feed Lines
*2 questions on the exam from a pool of 24*

## Group T9A — Antenna Types and Their Characteristics

### T9A01
**What is a beam antenna?**
- A) An antenna built from aluminum I-beams
- B) An omnidirectional antenna invented by Clarence Beam
- **C) An antenna that concentrates signals in one direction** ✅
- D) An antenna that reverses the phase of received signals

> A beam antenna (like a Yagi) focuses RF energy in a specific direction, providing gain in that direction at the expense of coverage in other directions. Think of it like a flashlight versus a bare light bulb. The name refers to the "beam" of signal it creates.

### T9A02
**Which of the following describes a type of antenna loading?**
- **A) Electrically lengthening by inserting inductors in radiating elements** ✅
- B) Inserting a resistor in the radiating portion of the antenna to make it resonant
- C) Installing a spring in the base of a mobile vertical antenna to make it more flexible
- D) Strengthening the radiating elements of a beam antenna to better resist wind damage

> Loading an antenna means making it electrically longer than its physical size by adding inductors (coils). This lets you use a physically shorter antenna that behaves as if it were full-size. Loading coils are common on mobile HF antennas. Springs and reinforcement are mechanical, not electrical.

### T9A03
**Which of the following describes a simple dipole oriented parallel to Earth's surface?**
- A) A ground-wave antenna
- **B) A horizontally polarized antenna** ✅
- C) A travelling-wave antenna
- D) A vertically polarized antenna

> A dipole parallel to the ground is horizontally polarized — the electric field of the radio wave is horizontal. Polarization matches the orientation of the antenna's elements. Horizontal dipole = horizontal polarization. Vertical antenna = vertical polarization.

### T9A04
**What is a disadvantage of the short, flexible antenna supplied with most handheld radio transceivers, compared to a full-sized quarter-wave antenna?**
- **A) It has low efficiency** ✅
- B) It transmits only circularly polarized signals
- C) It is mechanically fragile
- D) All these choices are correct

> The "rubber duck" antenna on handheld radios is a compromise — it's convenient but inefficient. Much of the transmitter power is lost as heat rather than radiated. A full quarter-wave antenna is significantly more efficient but less portable. The rubber duck is actually quite durable (not fragile).

### T9A05
**Which of the following increases the resonant frequency of a dipole antenna?**
- A) Lengthening it
- B) Inserting coils in series with radiating wires
- **C) Shortening it** ✅
- D) Adding capacitive loading to the ends of the radiating wires

> Shorter antenna = higher frequency. This is because resonant frequency is inversely proportional to antenna length. Making an antenna longer lowers its resonant frequency, and adding coils or capacitive loading also electrically lengthens it (lowering frequency). Only shortening raises the frequency.

### T9A06
**Which of the following types of antenna offers the greatest gain?**
- A) 5/8 wave vertical
- B) Isotropic
- C) J pole
- **D) Yagi** ✅

> A Yagi antenna provides the most gain of these options through its multiple directional elements (reflector, driven element, directors). More elements = more gain. An isotropic antenna has 0 dBi gain by definition (it's the theoretical reference). A J-pole and 5/8 wave vertical have modest gain.

### T9A07
**What is a disadvantage of using a handheld VHF transceiver with a flexible antenna inside a vehicle?**
- **A) Signal strength is reduced due to the shielding effect of the vehicle** ✅
- B) The bandwidth of the antenna will decrease, increasing SWR
- C) The SWR might decrease, decreasing the signal strength
- D) All these choices are correct

> A vehicle's metal body acts as a Faraday cage, blocking and absorbing RF energy. Using a handheld inside a car significantly reduces signal strength in both directions. For reliable mobile operation, use an external antenna mounted on the vehicle.

### T9A08
**What is the approximate length, in inches, of a quarter-wavelength vertical antenna for 146 MHz?**
- A) 112
- B) 50
- **C) 19** ✅
- D) 12

> At 146 MHz, a full wavelength is about 80 inches (2 meters). A quarter wavelength is about 19 inches (80 ÷ 4 ≈ 20, with adjustment for velocity factor). The formula is: length (inches) = 2808 / frequency (MHz). For 146 MHz: 2808/146 ≈ 19.2 inches.

### T9A09
**What is the approximate length, in inches, of a half-wavelength 6 meter dipole antenna?**
- A) 6
- B) 50
- **C) 112** ✅
- D) 236

> A 6-meter band dipole is a half wavelength on 6 meters. Half of 6 meters ≈ 3 meters ≈ 118 inches, with velocity factor adjustment ≈ 112 inches (about 9.3 feet). The name "6 meters" refers to the full wavelength; the dipole is half that.

### T9A10
**In which direction does a half-wave dipole antenna radiate the strongest signal?**
- A) Equally in all directions
- B) Off the ends of the antenna
- C) In the direction of the feed line
- **D) Broadside to the antenna** ✅

> A dipole radiates strongest broadside (perpendicular) to the wire, with nulls off the ends. Picture a donut around the antenna wire — maximum radiation is from the sides, minimum from the tips. This is critical for orienting your antenna toward desired stations.

### T9A11
**What is antenna gain?**
- A) The additional power that is added to the transmitter power
- B) The additional power that is required in the antenna when transmitting on a higher frequency
- **C) The increase in signal strength in a specified direction compared to a reference antenna** ✅
- D) The increase in impedance on receive or transmit compared to a reference antenna

> Antenna gain doesn't create power from nothing — it concentrates existing power in a preferred direction compared to a reference antenna (usually isotropic or dipole). It's like squeezing a balloon: you get more in one direction by taking from others. It's measured in dBi or dBd.

### T9A12
**What is an advantage of a 5/8 wavelength whip antenna for VHF or UHF mobile service?**
- **A) It has more gain than a 1/4-wavelength antenna** ✅
- B) It radiates at a very high angle
- C) It eliminates distortion caused by reflected signals
- D) It has 10 times the power gain of a 1/4 wavelength whip

> A 5/8-wave antenna has about 3 dB more gain than a quarter-wave whip, with a lower radiation angle that's better for ground-level mobile communications. It does NOT have 10× power gain (that would be 10 dB). The gain comes from concentrating radiation at a lower angle toward the horizon.

## Group T9B — Feed Lines, Connectors, and SWR

### T9B01
**What is a benefit of low SWR?**
- A) Reduced television interference
- **B) Reduced signal loss** ✅
- C) Less antenna wear
- D) All these choices are correct

> Low SWR means good impedance matching, which means more of your power reaches the antenna and less is reflected back and wasted as heat in the feed line. It doesn't directly reduce TVI or antenna wear. Low SWR = efficient power transfer.

### T9B02
**What is the most common impedance of coaxial cables used in amateur radio?**
- A) 8 ohms
- **B) 50 ohms** ✅
- C) 600 ohms
- D) 12 ohms

> 50 ohms is the standard impedance for amateur radio coaxial cable (RG-58, RG-213, LMR-400, etc.). Most amateur transceivers are designed for 50-ohm loads. Consumer TV cable is 75 ohms, and old open-wire feed line is 300-600 ohms.

### T9B03
**Why is coaxial cable the most common feed line for amateur radio antenna systems?**
- **A) It is easy to use and requires few special installation considerations** ✅
- B) It has less loss than any other type of feed line
- C) It can handle more power than any other type of feed line
- D) It is less expensive than any other type of feed line

> Coax is popular because it's easy — you can run it through walls, along the ground, bury it, and it doesn't need special spacing like open-wire line. It does NOT have the lowest loss (open-wire line beats it) or handle the most power (hardline does). Convenience is its killer feature.

### T9B04
**What is the major function of an antenna tuner (antenna coupler)?**
- **A) It matches the antenna system impedance to the transceiver's output impedance** ✅
- B) It helps a receiver automatically tune in weak stations
- C) It allows an antenna to be used on both transmit and receive
- D) It automatically selects the proper antenna for the frequency band being used

> An antenna tuner (coupler) transforms the impedance presented by the antenna system to the 50 ohms your transceiver expects. It doesn't actually tune the antenna — it makes the transceiver "see" a matched load. The antenna's actual efficiency doesn't change.

### T9B05
**What happens as the frequency of a signal in coaxial cable is increased?**
- A) The characteristic impedance decreases
- B) The loss decreases
- C) The characteristic impedance increases
- **D) The loss increases** ✅

> Coaxial cable loss increases with frequency. This is why VHF/UHF stations need lower-loss cable than HF stations — at 440 MHz, cheap cable like RG-58 can lose half your signal in a moderate run. The characteristic impedance stays the same regardless of frequency.

### T9B06
**Which of the following RF connector types is most suitable for frequencies above 400 MHz?**
- A) UHF (PL-259/SO-239)
- **B) Type N** ✅
- C) RS-213
- D) DB-25

> Type N connectors maintain consistent impedance and low loss at UHF and microwave frequencies. Despite its name, the "UHF connector" (PL-259/SO-239) actually performs poorly above 400 MHz due to its non-constant impedance design. The Type N was designed for precision RF work.

### T9B07
**Which of the following is true of PL-259 type coax connectors?**
- A) They are preferred for microwave operation
- B) They are watertight
- **C) They are commonly used at HF and VHF frequencies** ✅
- D) They are a bayonet-type connector

> PL-259 connectors (and their SO-239 mates) are the most common amateur radio connector for HF and VHF. They're NOT watertight, NOT suitable for microwave, and they're threaded (not bayonet — that's BNC). They're ubiquitous but imperfect.

### T9B08
**Which of the following is a source of loss in coaxial feed line?**
- A) Water intrusion into coaxial connectors
- B) High SWR
- C) Multiple connectors in the line
- **D) All these choices are correct** ✅

> All three cause feed line loss. Water intrusion is the worst — it dramatically increases loss and eventually corrodes the cable. High SWR increases the effective loss because power travels back and forth through the lossy cable multiple times. Each connector adds a small amount of loss.

### T9B09
**What can cause erratic changes in SWR?**
- A) Local thunderstorm
- **B) Loose connection in the antenna or feed line** ✅
- C) Over-modulation
- D) Overload from a strong local station

> Erratic (jumping around) SWR almost always indicates a loose or intermittent connection — a bad solder joint, corroded connector, or broken conductor. Stable problems cause stable SWR readings; only intermittent faults cause erratic readings. Thunderstorms, overmodulation, and overload don't cause SWR changes.

### T9B10
**What is the electrical difference between RG-58 and RG-213 coaxial cable?**
- A) There is no significant difference between the two types
- B) RG-58 cable has two shields
- **C) RG-213 cable has less loss at a given frequency** ✅
- D) RG-58 cable can handle higher power levels

> RG-213 has lower loss than RG-58 because it's a larger diameter cable with a bigger center conductor and more shielding. RG-58 is thinner and more flexible but lossier. Both are 50-ohm cables, but RG-213 is the better performer (and handles more power).

### T9B11
**Which of the following types of feed line has the lowest loss at VHF and UHF?**
- A) 50-ohm flexible coax
- B) Multi-conductor unbalanced cable
- **C) Air-insulated hardline** ✅
- D) 75-ohm flexible coax

> Air-insulated hardline has the lowest loss because air is the best dielectric (lowest loss). The rigid copper construction also minimizes conductor losses. It's expensive and difficult to install, but for VHF/UHF where loss matters most, it's the gold standard.

### T9B12
**What is standing wave ratio (SWR)?**
- **A) A measure of how well a load is matched to a transmission line** ✅
- B) The ratio of amplifier power output to input
- C) The transmitter efficiency ratio
- D) An indication of the quality of your station's ground connection

> SWR measures impedance matching between the antenna (load) and the feed line. A 1:1 SWR = perfect match. Higher numbers indicate mismatch, with more power reflected back. It tells you nothing about amplifier efficiency or ground quality.
