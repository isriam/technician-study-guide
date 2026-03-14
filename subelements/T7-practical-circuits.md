# T7 — Practical Circuits
*4 questions on the exam from a pool of 43*

## Group T7A — Radio Station Equipment: Receivers, Transmitters, Transceivers

### T7A01
**Which term describes the ability of a receiver to detect the presence of a signal?**
- A) Linearity
- **B) Sensitivity** ✅
- C) Selectivity
- D) Total Harmonic Distortion

> Sensitivity is how well a receiver can pick up weak signals — the lower the signal it can detect, the more sensitive it is. Don't confuse with selectivity, which is the ability to separate signals on nearby frequencies. Sensitivity = detection, Selectivity = discrimination.

### T7A02
**What is a transceiver?**
- **A) A device that combines a receiver and transmitter** ✅
- B) A device for matching feed line impedance to 50 ohms
- C) A device for automatically sending and decoding Morse code
- D) A device for converting receiver and transmitter frequencies to another band

> A transceiver = transmitter + receiver in one box. Almost all modern amateur radios are transceivers. The word itself is a portmanteau: TRANSmitter + reCEIVER = TRANSCEIVER.

### T7A03
**Which of the following is used to convert a signal from one frequency to another?**
- A) Phase splitter
- **B) Mixer** ✅
- C) Inverter
- D) Amplifier

> A mixer combines two signals to produce sum and difference frequencies — this is how receivers convert incoming RF to an intermediate frequency (IF) for processing. Mixers are the heart of superheterodyne receivers.

### T7A04
**Which term describes the ability of a receiver to discriminate between multiple signals?**
- A) Discrimination ratio
- B) Sensitivity
- **C) Selectivity** ✅
- D) Harmonic distortion

> Selectivity is the ability to pick out one signal while rejecting others on nearby frequencies. Think of it as the receiver's ability to "select" one station from many. Sensitivity detects weak signals; selectivity separates close signals.

### T7A05
**What is the name of a circuit that generates a signal at a specific frequency?**
- A) Reactance modulator
- B) Phase modulator
- C) Low-pass filter
- **D) Oscillator** ✅

> An oscillator generates a continuous signal at a specific frequency. It's the clock and tone generator of radio — every transmitter needs one to create its carrier frequency. Modulators modify signals, filters pass/block them.

### T7A06
**What device converts the RF input and output of a transceiver to another band?**
- A) High-pass filter
- B) Low-pass filter
- **C) Transverter** ✅
- D) Phase converter

> A transverter converts a transceiver's frequency to a different band — for example, letting an HF radio operate on VHF. The name combines TRANSceiver + conVERTER. Don't confuse with filters, which pass or block frequencies without converting them.

### T7A07
**What is the function of a transceiver's PTT input?**
- A) Input for a key used to send CW
- **B) Switches transceiver from receive to transmit when grounded** ✅
- C) Provides a transmit tuning tone when grounded
- D) Input for a preamplifier tuning tone

> PTT = Push To Talk. When the PTT line is grounded (by pressing the mic button), the transceiver switches from receive mode to transmit mode. Releasing it returns to receive. This is the most basic transmit control on any radio.

### T7A08
**Which of the following describes combining speech with an RF carrier signal?**
- A) Impedance matching
- B) Oscillation
- **C) Modulation** ✅
- D) Low-pass filtering

> Modulation is the process of combining information (like voice) with an RF carrier signal for transmission. AM, FM, and SSB are all types of modulation. Without modulation, you'd just transmit a blank carrier with no information.

### T7A09
**What is the function of the SSB/CW-FM switch on a VHF power amplifier?**
- A) Change the mode of the transmitted signal
- **B) Set the amplifier for proper operation in the selected mode** ✅
- C) Change the frequency range of the amplifier to operate in the proper segment of the band
- D) Reduce the received signal noise

> This switch configures the amplifier's bias and operating parameters for the selected mode. SSB/CW requires linear amplification (Class AB), while FM can use more efficient non-linear amplification (Class C). It doesn't change the mode itself — just optimizes the amp for it.

### T7A10
**What device increases the transmitted output power from a transceiver?**
- A) A voltage divider
- **B) An RF power amplifier** ✅
- C) An impedance network
- D) All these choices are correct

> An RF power amplifier (or "linear amp") boosts the transceiver's output power. Voltage dividers reduce voltage, and impedance networks match impedances — neither increases transmitted power.

### T7A11
**Where is an RF preamplifier installed?**
- **A) Between the antenna and receiver** ✅
- B) At the output of the transmitter power amplifier
- C) Between the transmitter and the antenna tuner
- D) At the output of the receiver audio amplifier

> An RF preamplifier goes between the antenna and receiver to boost weak signals before they reach the receiver's front end. Placing it anywhere else would be pointless or harmful. "Pre" means before — it amplifies before the receiver processes the signal.

## Group T7B — Interference, Troubleshooting, and RF Feedback

### T7B01
**What can you do if you are told your FM handheld or mobile transceiver is over-deviating?**
- A) Talk louder into the microphone
- B) Let the transceiver cool off
- C) Change to a higher power level
- **D) Talk farther away from the microphone** ✅

> Over-deviation means too much frequency swing in FM, caused by too much audio input. The fix is to talk farther from the mic to reduce audio level. Talking louder (answer A) would make it worse. Deviation is about audio level, not RF power or temperature.

### T7B02
**What would cause a broadcast AM or FM radio to receive an amateur radio transmission unintentionally?**
- **A) The receiver is unable to reject strong signals outside the AM or FM band** ✅
- B) The microphone gain of the transmitter is turned up too high
- C) The audio amplifier of the transmitter is overloaded
- D) The deviation of an FM transmitter is set too low

> This is fundamental overload — the consumer receiver's front end can't reject strong nearby signals outside its intended band. The problem is with the receiver, not your transmitter. Consumer radios often have poor front-end filtering.

### T7B03
**Which of the following can cause radio frequency interference?**
- A) Fundamental overload
- B) Harmonics
- C) Spurious emissions
- **D) All these choices are correct** ✅

> All three cause RFI. Fundamental overload swamps nearby receivers, harmonics are multiples of your transmit frequency that land on other services, and spurious emissions are unintended signals from your transmitter. All are sources of interference.

### T7B04
**Which of the following could you use to cure distorted audio caused by RF current on the shield of a microphone cable?**
- A) Band-pass filter
- B) Low-pass filter
- C) Preamplifier
- **D) Ferrite choke** ✅

> A ferrite choke (snap-on ferrite bead) placed on the mic cable blocks RF current from flowing on the cable shield, which eliminates the RF pickup causing distorted audio. Ferrite chokes are the go-to fix for RF getting into audio cables.

### T7B05
**How can fundamental overload of a non-amateur radio or TV receiver by an amateur signal be reduced or eliminated?**
- **A) Block the amateur signal with a filter at the antenna input of the affected receiver** ✅
- B) Block the interfering signal with a filter on the amateur transmitter
- C) Switch the transmitter from FM to SSB
- D) Switch the transmitter to a narrow-band mode

> Fundamental overload is a receiver problem — the fix goes at the receiver, not the transmitter. A filter at the affected receiver's antenna input blocks the amateur signal while passing the desired broadcast signals.

### T7B06
**Which of the following actions should you take if a neighbor tells you that your station's transmissions are interfering with their radio or TV reception?**
- **A) Make sure that your station is functioning properly and that it does not cause interference to your own radio or television when it is tuned to the same channel** ✅
- B) Immediately turn off your transmitter and contact the nearest FCC office for assistance
- C) Install a harmonic doubler on the output of your transmitter and tune it until the interference is eliminated
- D) All these choices are correct

> First step: verify your own station is clean by checking if it interferes with your own TV/radio on the same channel. If your equipment is clean, the problem is likely the neighbor's receiver. A "harmonic doubler" would create MORE interference — that's a trap answer.

### T7B07
**Which of the following can reduce overload of a VHF transceiver by a nearby commercial FM station?**
- A) Installing an RF preamplifier
- B) Using double-shielded coaxial cable
- C) Installing bypass capacitors on the microphone cable
- **D) Installing a band-reject filter** ✅

> A band-reject (notch) filter tuned to the commercial FM station's frequency blocks that specific signal while passing the desired VHF frequencies. A preamplifier would make overload worse by amplifying everything, including the interference.

### T7B08
**What should you do if something in a neighbor's home is causing harmful interference to your amateur station?**
- A) Work with your neighbor to identify the offending device
- B) Politely inform your neighbor that FCC rules prohibit the use of devices that cause interference
- C) Make sure your station meets the standards of good amateur practice
- **D) All these choices are correct** ✅

> All three approaches are appropriate. Work cooperatively, inform them about FCC rules (Part 15 devices must not cause harmful interference), and verify your own station is up to standard. Being diplomatic is key.

### T7B09
**What should be the first step to resolve non-fiber optic cable TV interference caused by your amateur radio transmission?**
- A) Add a low-pass filter to the TV antenna input
- B) Add a high-pass filter to the TV antenna input
- C) Add a preamplifier to the TV antenna input
- **D) Be sure all TV feed line coaxial connectors are installed properly** ✅

> Before adding filters, check the basics — loose or corroded coax connectors on the cable TV system are a common cause of RF leakage and interference. Proper connections are always the first thing to verify. Fix the easy stuff first.

### T7B10
**What might be a problem if you receive a report that your audio signal through an FM repeater is distorted or unintelligible?**
- A) Your transmitter is slightly off frequency
- B) Your batteries are running low
- C) You are in a bad location
- **D) All these choices are correct** ✅

> All of these can cause distorted audio through a repeater. Off-frequency transmission causes poor FM demodulation, low batteries cause weak/distorted transmissions, and a bad location causes multipath and weak signal issues.

### T7B11
**What is a symptom of RF feedback in a transmitter or transceiver?**
- A) Excessive SWR at the antenna connection
- B) The transmitter will not stay on the desired frequency
- **C) Reports of garbled, distorted, or unintelligible voice transmissions** ✅
- D) Frequent blowing of power supply fuses

> RF feedback occurs when RF energy from the transmitter gets back into the audio circuits, causing a feedback loop that garbles your voice. The RF signal modulates itself, creating distorted, unintelligible audio. This is different from SWR problems or frequency drift.

## Group T7C — Antenna Measurements, Feed Lines, and Test Equipment

### T7C01
**What is the primary purpose of a dummy load?**
- **A) To prevent transmitting signals over the air when making tests** ✅
- B) To prevent over-modulation of a transmitter
- C) To improve the efficiency of an antenna
- D) To improve the signal-to-noise ratio of a receiver

> A dummy load absorbs your transmitter's RF power as heat instead of radiating it, letting you test and tune without putting signals on the air. It's a non-radiating substitute for an antenna — essential for testing without causing interference.

### T7C02
**Which of the following is used to determine if an antenna is resonant at the desired operating frequency?**
- A) A VTVM
- **B) An antenna analyzer** ✅
- C) A Q meter
- D) A frequency counter

> An antenna analyzer measures the impedance and SWR of an antenna across a range of frequencies, showing where it's resonant. It's the primary tool for antenna testing and adjustment. A frequency counter measures frequency, not antenna characteristics.

### T7C03
**What does a dummy load consist of?**
- A) A high-gain amplifier and a TR switch
- **B) A non-inductive resistor mounted on a heat sink** ✅
- C) A low-voltage power supply and a DC relay
- D) A 50-ohm reactance used to terminate a transmission line

> A dummy load is a non-inductive resistor (typically 50 ohms) on a heat sink, often immersed in oil for cooling. It must be non-inductive to present a pure resistance at RF frequencies. Note: answer D says "reactance" — a dummy load should have zero reactance.

### T7C04
**What reading on an SWR meter indicates a perfect impedance match between the antenna and the feed line?**
- A) 50:50
- B) Zero
- **C) 1:1** ✅
- D) Full Scale

> An SWR of 1:1 means perfect match — all power goes to the antenna with no reflected power. Higher SWR numbers indicate increasing mismatch. An SWR of zero is impossible, and full scale would indicate a severe mismatch or open/short circuit.

### T7C05
**Why do most solid-state transmitters reduce output power as SWR increases beyond a certain level?**
- **A) To protect the output amplifier transistors** ✅
- B) To comply with FCC rules on spectral purity
- C) Because power supplies cannot supply enough current at high SWR
- D) To lower the SWR on the transmission line

> High SWR means reflected power comes back to the transmitter, which can overheat and destroy the output transistors. Automatic power reduction (foldback) protects these expensive components. This is a built-in safety feature, not an FCC requirement.

### T7C06
**What does an SWR reading of 4:1 indicate?**
- A) Loss of -4 dB
- B) Good impedance match
- C) Gain of +4 dB
- **D) Impedance mismatch** ✅

> An SWR of 4:1 indicates a significant impedance mismatch between the feed line and antenna. A perfect match is 1:1; anything above about 2:1 warrants investigation. At 4:1, a substantial amount of power is being reflected back.

### T7C07
**What happens to power lost in a feed line?**
- A) It increases the SWR
- B) It is radiated as harmonics
- **C) It is converted into heat** ✅
- D) It distorts the signal

> Feed line loss converts RF power into heat through resistive losses in the conductor and dielectric. This is why lower-loss cable is important for long runs and higher frequencies. The power doesn't disappear — it just becomes waste heat.

### T7C08
**Which instrument can be used to determine SWR?**
- A) Voltmeter
- B) Ohmmeter
- C) Iambic pentameter
- **D) Directional wattmeter** ✅

> A directional wattmeter measures both forward and reflected power, allowing you to calculate SWR. "Iambic pentameter" is a poetry meter, not a radio instrument — a classic trick answer. Voltmeters and ohmmeters can't measure SWR.

### T7C09
**Which of the following causes failure of coaxial cables?**
- **A) Moisture contamination** ✅
- B) Solder flux contamination
- C) Rapid fluctuation in transmitter output power
- D) Operation at 100% duty cycle for an extended period

> Water getting into coax is the #1 killer of feed lines. Moisture dramatically increases loss and eventually corrodes the conductors. This is why weatherproofing connectors and using UV-resistant jacket cable outdoors is critical.

### T7C10
**Why should the outer jacket of coaxial cable be resistant to ultraviolet light?**
- A) Ultraviolet resistant jackets prevent harmonic radiation
- B) Ultraviolet light can increase losses in the cable's jacket
- C) Ultraviolet and RF signals can mix, causing interference
- **D) Ultraviolet light can damage the jacket and allow water to enter the cable** ✅

> UV from sunlight degrades the outer jacket over time, causing it to crack and allow water intrusion — which then destroys the cable from the inside. UV resistance is about physical protection, not electrical performance. The other answers are nonsensical.

### T7C11
**What is a disadvantage of air core coaxial cable when compared to foam or solid dielectric types?**
- A) It has more loss per foot
- B) It cannot be used for VHF or UHF antennas
- **C) It requires special techniques to prevent moisture in the cable** ✅
- D) It cannot be used at below freezing temperatures

> Air-dielectric coax has lower loss than foam or solid types (advantage!), but it's hollow — so keeping moisture out requires special pressurization or sealing techniques. Air core is actually excellent for VHF/UHF and works in all temperatures.

## Group T7D — Multimeters, Soldering, and Basic Measurements

### T7D01
**Which instrument would you use to measure electric potential?**
- A) An ammeter
- **B) A voltmeter** ✅
- C) A wavemeter
- D) An ohmmeter

> Electric potential = voltage, and a voltmeter measures voltage. Ammeters measure current, ohmmeters measure resistance, and wavemeters measure frequency. Match the measurement to the meter: Volts = Voltmeter.

### T7D02
**How is a voltmeter connected to a component to measure applied voltage?**
- A) In series
- **B) In parallel** ✅
- C) In quadrature
- D) In phase

> A voltmeter connects in parallel (across) the component being measured. This lets it sense the voltage difference across the component without significantly affecting circuit operation. An ammeter goes in series; a voltmeter goes in parallel.

### T7D03
**When configured to measure current, how is a multimeter connected to a component?**
- **A) In series** ✅
- B) In parallel
- C) In quadrature
- D) In phase

> An ammeter (multimeter in current mode) connects in series so all the current flows through it. Connecting an ammeter in parallel would create a short circuit and likely blow the fuse or damage the meter. Series for current, parallel for voltage.

### T7D04
**Which instrument is used to measure electric current?**
- A) An ohmmeter
- B) An electrometer
- C) A voltmeter
- **D) An ammeter** ✅

> An ammeter measures current (amperes). The name tells you: Amp-meter = ammeter. Ohmmeters measure resistance, voltmeters measure voltage, and electrometers measure very small currents or charges (not a standard answer).

### T7D06
**Which of the following can damage a multimeter?**
- A) Attempting to measure resistance using the voltage setting
- B) Failing to connect one of the probes to ground
- **C) Attempting to measure voltage when using the resistance setting** ✅
- D) Not allowing it to warm up properly

> Measuring voltage while set to resistance (ohms) can damage the meter because the resistance mode uses a small internal battery to measure — external voltage can overload and destroy the meter's circuitry. Always verify your meter is set to the correct function.

### T7D07
**Which of the following measurements are made using a multimeter?**
- A) Signal strength and noise
- B) Impedance and reactance
- **C) Voltage and resistance** ✅
- D) All these choices are correct

> A standard multimeter measures voltage, current, and resistance (hence "multi"). It does NOT measure signal strength, noise, impedance, or reactance — those require specialized instruments like spectrum analyzers or impedance bridges.

### T7D08
**Which of the following types of solder should not be used for radio and electronic applications?**
- **A) Acid-core solder** ✅
- B) Lead-tin solder
- C) Rosin-core solder
- D) Tin-copper solder

> Acid-core solder is for plumbing, not electronics. The acid flux is corrosive and will damage electronic components and circuit boards over time. Always use rosin-core solder for electronics work. This is a critical practical knowledge question.

### T7D09
**What is the characteristic appearance of a cold tin-lead solder joint?**
- A) Dark black spots
- B) A bright or shiny surface
- **C) A rough or lumpy surface** ✅
- D) Excessive solder

> A cold solder joint looks rough, lumpy, or grainy — it indicates the solder didn't flow properly and may have a poor electrical connection. A good solder joint is smooth, shiny, and concave. If it looks like a tiny mountain instead of a smooth dome, reheat it.

### T7D10
**What reading indicates that an ohmmeter is connected across a large, discharged capacitor?**
- **A) Increasing resistance with time** ✅
- B) Decreasing resistance with time
- C) Steady full-scale reading
- D) Alternating between open and short circuit

> When an ohmmeter is connected across a discharged capacitor, the meter's internal battery charges the cap. Initially the resistance reads low (current flowing), then increases as the capacitor charges and current decreases. This is a useful diagnostic technique.

### T7D11
**Which of the following precautions should be taken when measuring in-circuit resistance with an ohmmeter?**
- A) Ensure that the applied voltages are correct
- **B) Ensure that the circuit is not powered** ✅
- C) Ensure that the circuit is grounded
- D) Ensure that the circuit is operating at the correct frequency

> Always turn off power before measuring resistance. The ohmmeter uses its own internal battery to measure — external voltage from a powered circuit will give false readings and can damage the meter. Power off first, then measure.
