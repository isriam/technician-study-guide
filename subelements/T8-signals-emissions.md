# T8 — Signals and Emissions
*4 questions on the exam from a pool of 48*

## Group T8A — Modulation Modes and Bandwidth

### T8A01
**Which of the following is a form of amplitude modulation?**
- A) Spread spectrum
- B) Packet radio
- **C) Single sideband** ✅
- D) Phase shift keying (PSK)

> SSB (Single Sideband) is a form of AM where the carrier and one sideband are removed, leaving only one sideband. It's more efficient than full AM but is still fundamentally amplitude modulation. PSK modulates phase, not amplitude.

### T8A02
**What type of modulation is commonly used for VHF packet radio transmissions?**
- **A) FM or PM** ✅
- B) SSB
- C) AM
- D) PSK

> VHF packet radio typically uses FM (or PM, which is closely related) because VHF FM repeater infrastructure is widespread and FM handles the digital data well. Packet on VHF runs at 1200 baud using audio tones over FM.

### T8A03
**Which type of voice mode is often used for long-distance (weak signal) contacts on the VHF and UHF bands?**
- A) FM
- B) DRM
- **C) SSB** ✅
- D) PM

> SSB is preferred for weak signal VHF/UHF work because it concentrates all transmitter power into the signal (no wasted carrier), has a narrower bandwidth, and is more effective for marginal path conditions than FM.

### T8A04
**Which type of modulation is commonly used for VHF and UHF voice repeaters?**
- A) AM
- B) SSB
- C) PSK
- **D) FM or PM** ✅

> FM is the standard mode for VHF/UHF voice repeaters. FM provides clear audio, is resistant to amplitude noise, and works well with the channelized repeater system. When you key up a 2-meter repeater, you're using FM.

### T8A05
**Which of the following types of signal has the narrowest bandwidth?**
- A) FM voice
- B) SSB voice
- **C) CW** ✅
- D) Slow-scan TV

> CW (Morse code) has the narrowest bandwidth at about 150 Hz. Compare: SSB voice ≈ 3 kHz, FM voice ≈ 10-15 kHz, and SSTV is wider still. Narrower bandwidth means CW can get through when other modes can't.

### T8A06
**Which sideband is normally used for 10 meter HF, VHF, and UHF single-sideband communications?**
- **A) Upper sideband** ✅
- B) Lower sideband
- C) Suppressed sideband
- D) Inverted sideband

> By convention, upper sideband (USB) is used on 10 meters and above (VHF/UHF). Lower sideband (LSB) is used on 40 meters and below. The dividing line is at 10 MHz — above it, use USB. This is a convention, not a regulation, but it's universally followed.

### T8A07
**What is a characteristic of single sideband (SSB) compared to FM?**
- A) SSB signals are easier to tune in correctly
- B) SSB signals are less susceptible to interference
- **C) SSB signals have narrower bandwidth** ✅
- D) All these choices are correct

> SSB bandwidth is about 3 kHz versus 10-15 kHz for FM — that's significantly narrower. SSB is actually harder to tune than FM (you have to nail the frequency precisely), and FM is more resistant to interference due to its capture effect. Only the bandwidth claim is true.

### T8A08
**What is the approximate bandwidth of a typical single sideband (SSB) voice signal?**
- A) 1 kHz
- **B) 3 kHz** ✅
- C) 6 kHz
- D) 15 kHz

> SSB voice bandwidth is approximately 3 kHz (300 Hz to 3000 Hz). This covers the essential voice frequencies. Full AM would be 6 kHz (both sidebands), but SSB removes one sideband and the carrier, halving the bandwidth.

### T8A09
**What is the approximate bandwidth of a VHF repeater FM voice signal?**
- A) Less than 500 Hz
- B) About 150 kHz
- **C) Between 10 and 15 kHz** ✅
- D) Between 50 and 125 kHz

> A VHF FM voice signal occupies between 10 and 15 kHz of bandwidth. This is determined by the maximum deviation (±5 kHz for narrowband FM) plus the audio bandwidth. FM is wider than SSB (3 kHz) but narrower than fast-scan TV (6 MHz).

### T8A10
**What is the approximate bandwidth of AM fast-scan TV transmissions?**
- A) More than 10 MHz
- **B) About 6 MHz** ✅
- C) About 3 MHz
- D) About 1 MHz

> Fast-scan amateur TV (ATV) uses about 6 MHz of bandwidth — the same as a commercial broadcast TV channel. This is why ATV is only practical on UHF and above where there's enough spectrum. You won't fit a 6 MHz signal on HF.

### T8A11
**What is the approximate bandwidth required to transmit a CW signal?**
- A) 2.4 kHz
- **B) 150 Hz** ✅
- C) 1000 Hz
- D) 15 kHz

> CW (Morse code) needs only about 150 Hz of bandwidth — the narrowest of any common amateur mode. This extreme efficiency is why CW can be copied under conditions where voice modes fail completely.

### T8A12
**Which of the following is a disadvantage of FM compared with single sideband?**
- A) Voice quality is poorer
- **B) Only one signal can be received at a time** ✅
- C) FM signals are harder to tune
- D) All these choices are correct

> FM exhibits the "capture effect" — the strongest signal captures the receiver and suppresses weaker ones. This means only one signal can be received at a time on a given frequency. SSB allows multiple signals to be heard simultaneously. FM actually has better voice quality and is easier to tune than SSB.

## Group T8B — Satellite Operations

### T8B01
**What telemetry information is typically transmitted by satellite beacons?**
- A) The signal strength of received signals
- B) Time of day accurate to plus or minus 1/10 second
- **C) Health and status of the satellite** ✅
- D) All these choices are correct

> Satellite beacons transmit telemetry about the satellite's health and status — battery voltage, temperature, transponder status, etc. This data lets ground stations monitor the satellite's condition. It's not a time signal or signal strength report.

### T8B02
**What is the impact of using excessive effective radiated power on a satellite uplink?**
- A) Possibility of commanding the satellite to an improper mode
- **B) Blocking access by other users** ✅
- C) Overloading the satellite batteries
- D) Possibility of rebooting the satellite control computer

> Using too much power on a satellite uplink can capture the transponder and block other users from being heard. Satellite transponders are shared resources — excessive power is rude and harmful. Use only enough power for your signal to be heard.

### T8B03
**Which of the following are provided by satellite tracking programs?**
- A) Maps showing the real-time position of the satellite track over Earth
- B) The time, azimuth, and elevation of the start, maximum altitude, and end of a pass
- C) The apparent frequency of the satellite transmission, including effects of Doppler shift
- **D) All these choices are correct** ✅

> Modern satellite tracking software provides all of these: real-time maps, pass predictions (AOS/LOS times, elevations), and Doppler-corrected frequencies. Programs like GPREDICT and SatPC32 are popular among satellite operators.

### T8B04
**What mode of transmission is commonly used by amateur radio satellites?**
- A) SSB
- B) FM
- C) CW/data
- **D) All these choices are correct** ✅

> Amateur satellites use many modes including SSB, FM, CW, and various digital modes. Different satellites support different modes — some have FM repeaters, others have linear transponders (SSB/CW), and many support digital data.

### T8B05
**What is a satellite beacon?**
- A) The primary transmit antenna on the satellite
- B) An indicator light that shows where to point your antenna
- C) A reflective surface on the satellite
- **D) A transmission from a satellite that contains status information** ✅

> A satellite beacon is a continuous transmission that carries telemetry data about the satellite's health and status. It helps operators find the satellite and verify it's functioning. It's a signal, not a physical object on the satellite.

### T8B06
**Which of the following are inputs to a satellite tracking program?**
- A) The satellite transmitted power
- **B) The Keplerian elements** ✅
- C) The last observed time of zero Doppler shift
- D) All these choices are correct

> Keplerian elements (also called TLEs — Two-Line Elements) are the orbital parameters that describe a satellite's orbit. They're the essential input for tracking programs to predict when and where the satellite will appear in the sky.

### T8B07
**What is Doppler shift in reference to satellite communications?**
- A) A change in the satellite orbit
- B) A mode where the satellite receives signals on one band and transmits on another
- **C) An observed change in signal frequency caused by relative motion between the satellite and Earth station** ✅
- D) A special digital communications mode for some satellites

> Doppler shift causes the satellite's signal to appear higher in frequency as it approaches and lower as it moves away — just like a passing ambulance siren. Operators must compensate for this shift to stay on frequency during a pass.

### T8B08
**What is meant by the statement that a satellite is operating in U/V mode?**
- A) The satellite uplink is in the 15 meter band and the downlink is in the 10 meter band
- **B) The satellite uplink is in the 70 centimeter band and the downlink is in the 2 meter band** ✅
- C) The satellite operates using ultraviolet frequencies
- D) The satellite frequencies are usually variable

> U/V means Uplink on UHF (70 cm / 440 MHz) and Downlink on VHF (2 m / 146 MHz). The letter before the slash is the uplink band, the letter after is the downlink. U = UHF, V = VHF. It has nothing to do with ultraviolet.

### T8B09
**What causes spin fading of satellite signals?**
- A) Circular polarized noise interference radiated from the sun
- **B) Rotation of the satellite and its antennas** ✅
- C) Doppler shift of the received signal
- D) Interfering signals within the satellite uplink band

> Spin fading occurs because the satellite is tumbling or rotating, causing its antenna pattern to change orientation relative to your ground station. The signal fades in and out as the antenna alternately points toward and away from you.

### T8B10
**What is a LEO satellite?**
- A) A sun synchronous satellite
- B) A highly elliptical orbit satellite
- C) A satellite in low energy operation mode
- **D) A satellite in low earth orbit** ✅

> LEO = Low Earth Orbit, typically 200-2000 km altitude. LEO satellites orbit the Earth in about 90 minutes and are only visible (accessible) for short pass windows of 5-15 minutes. Most amateur satellites are LEO.

### T8B11
**Who may receive telemetry from a space station?**
- **A) Anyone** ✅
- B) A licensed radio amateur with a transmitter equipped for interrogating the satellite
- C) A licensed radio amateur who has been certified by the protocol developer
- D) A licensed radio amateur who has registered for an access code from AMSAT

> Anyone may receive (listen to) satellite telemetry — no license is needed to receive radio signals. You only need a license to transmit. This applies to all radio reception, not just satellites.

### T8B12
**Which of the following is a way to determine whether your satellite uplink power is neither too low nor too high?**
- A) Check your signal strength report in the telemetry data
- B) Listen for distortion on your downlink signal
- **C) Your signal strength on the downlink should be about the same as the beacon** ✅
- D) All these choices are correct

> Compare your downlink signal strength to the satellite's beacon. If your signal is about the same strength as the beacon, your power is appropriate. Much stronger means you're using too much power; much weaker means not enough.

## Group T8C — VoIP, Internet Linking, Contesting, and Special Operations

### T8C01
**Which of the following methods is used to locate sources of noise interference or jamming?**
- A) Echolocation
- B) Doppler radar
- **C) Radio direction finding** ✅
- D) Phase locking

> Radio direction finding (RDF or "fox hunting") uses directional antennas to triangulate the source of a signal. This technique locates jammers, interference sources, and hidden transmitters. Echolocation is for bats, not radios.

### T8C02
**Which of these items would be useful for a hidden transmitter hunt?**
- A) Calibrated SWR meter
- **B) A directional antenna** ✅
- C) A calibrated noise bridge
- D) All these choices are correct

> A directional antenna (like a Yagi or loop) is essential for fox hunting — you rotate it to find the direction of strongest signal, then walk toward it. SWR meters and noise bridges don't help you find a hidden transmitter's location.

### T8C03
**What operating activity involves contacting as many stations as possible during a specified period?**
- A) Simulated emergency exercises
- B) Net operations
- C) Public service events
- **D) Contesting** ✅

> Contesting (radiosport) is competitive operating where you try to contact as many stations as possible in a set time period. Points are scored for contacts, multipliers for different areas/countries. It's amateur radio's version of competitive sports.

### T8C04
**Which of the following is good procedure when contacting another station in a contest?**
- A) Sign only the last two letters of your call if there are many other stations calling
- B) Contact the station twice to be sure that you are in his log
- **C) Send only the minimum information needed for proper identification and the contest exchange** ✅
- D) All these choices are correct

> In contests, efficiency is key — send your full call sign and the required exchange, nothing more. Never abbreviate your call sign (it's an FCC violation), and don't make duplicate contacts. Keep it brief and move on.

### T8C05
**What is a grid locator?**
- **A) A letter-number designator assigned to a geographic location** ✅
- B) A letter-number designator assigned to an azimuth and elevation
- C) An instrument for neutralizing a final amplifier
- D) An instrument for radio direction finding

> A grid locator (Maidenhead grid square) is a code like "DM33" that identifies a geographic location. It divides the world into grid squares and is used in VHF/UHF contesting and weak signal work to identify locations concisely.

### T8C06
**How is over the air access to IRLP nodes accomplished?**
- A) By obtaining a password that is sent via voice to the node
- **B) By using DTMF signals** ✅
- C) By entering the proper internet password
- D) By using CTCSS tone codes

> IRLP (Internet Radio Linking Project) nodes are controlled by sending DTMF tones (touch-tone signals) from your radio. You key in a node number using DTMF to connect or disconnect from remote repeaters via the internet.

### T8C07
**What is Voice Over Internet Protocol (VoIP)?**
- A) A set of rules specifying how to identify your station when linked over the internet to another station
- B) A technique employed to "spot" DX stations via the internet
- C) A technique for measuring the modulation quality of a transmitter using remote sites monitored via the internet
- **D) A method of delivering voice communications over the internet using digital techniques** ✅

> VoIP converts analog voice to digital data and transmits it over the internet. In amateur radio, systems like IRLP, EchoLink, and AllStar use VoIP to link repeaters and stations across the internet. It's the same technology behind phone apps like Skype.

### T8C08
**What is the Internet Radio Linking Project (IRLP)?**
- **A) A technique to connect amateur radio systems, such as repeaters, via the internet using Voice Over Internet Protocol (VoIP)** ✅
- B) A system for providing access to websites via amateur radio
- C) A system for informing amateurs in real time of the frequency of active DX stations
- D) A technique for measuring signal strength of an amateur transmitter via the internet

> IRLP uses VoIP to link repeaters and simplex nodes over the internet, allowing you to talk through a local repeater and be heard on a repeater across the world. It requires a radio — you can't access it from a computer alone (that's EchoLink).

### T8C09
**Which of the following protocols enables an amateur station to transmit through a repeater without using a radio to initiate the transmission?**
- A) IRLP
- B) D-STAR
- C) DMR
- **D) EchoLink** ✅

> EchoLink allows you to connect to repeaters using a computer or smartphone app — no radio needed to initiate the transmission. IRLP requires a radio to access nodes, and D-STAR/DMR are digital voice modes that require radio equipment.

### T8C10
**What is required before using the EchoLink system?**
- A) Complete the required EchoLink training
- B) Purchase a license to use the EchoLink software
- **C) Register your call sign and provide proof of license** ✅
- D) All these choices are correct

> You must register your call sign and verify your amateur radio license to use EchoLink. The software is free, and no special training is required. The verification ensures only licensed amateurs use the system.

### T8C11
**What is an amateur radio station that connects other amateur stations to the internet?**
- **A) A gateway** ✅
- B) A repeater
- C) A digipeater
- D) A beacon

> A gateway bridges amateur radio and the internet — it's the link point between RF and IP networks. IRLP nodes and EchoLink stations are examples of gateways. Repeaters retransmit RF signals, digipeaters relay digital packets, and beacons transmit identification signals.

## Group T8D — Digital Modes, APRS, and Data Communications

### T8D01
**Which of the following is a digital communications mode?**
- A) Packet radio
- B) IEEE 802.11
- C) FT8
- **D) All these choices are correct** ✅

> All three are digital modes. Packet radio is an AX.25 digital protocol, IEEE 802.11 is Wi-Fi (used in amateur mesh networks), and FT8 is a modern weak-signal digital mode. Amateur radio uses many digital communication methods.

### T8D02
**What is a "talkgroup" on a digital repeater?**
- A) A group of operators sharing common interests
- **B) A way for groups of users to share a channel at different times without hearing other users on the channel** ✅
- C) A protocol that increases the signal-to-noise ratio when multiple repeaters are linked together
- D) A net that meets at a specified time

> A talkgroup is a virtual channel on DMR and other digital repeater systems. Multiple talkgroups share the same physical repeater frequency but are separated digitally — you only hear users in your selected talkgroup. Think of it as a digital sub-channel.

### T8D03
**What kind of data can be transmitted by APRS?**
- A) GPS position data
- B) Text messages
- C) Weather data
- **D) All these choices are correct** ✅

> APRS (Automatic Packet Reporting System) can transmit GPS positions, text messages, weather station data, telemetry, and more. It's a versatile digital system commonly used for position tracking and tactical communications.

### T8D04
**What type of transmission is indicated by the term "NTSC?"**
- A) A Normal Transmission mode in Static Circuit
- B) A special mode for satellite uplink
- **C) An analog fast-scan color TV signal** ✅
- D) A frame compression scheme for TV signals

> NTSC (National Television System Committee) is the analog color TV standard used in North America. In amateur radio, NTSC refers to fast-scan amateur television (ATV). The acronym has nothing to do with "Normal Transmission" or satellites.

### T8D05
**Which of the following is an application of APRS?**
- **A) Providing real-time tactical digital communications in conjunction with a map showing the locations of stations** ✅
- B) Showing automatically the number of packets transmitted via PACTOR during a specific time interval
- C) Providing voice over internet connection between repeaters
- D) Providing information on the number of stations signed into a repeater

> APRS overlays station positions on maps in real time — perfect for events like marathons, search and rescue, or severe weather spotting. Stations appear on the map at their GPS coordinates with associated data. It's not a voice system or packet counter.

### T8D06
**What does the abbreviation "PSK" mean?**
- A) Pulse Shift Keying
- **B) Phase Shift Keying** ✅
- C) Packet Short Keying
- D) Phased Slide Keying

> PSK = Phase Shift Keying, a digital modulation method that encodes data by shifting the phase of the carrier signal. PSK31 is a popular amateur digital mode using this technique. The other options are made-up terms.

### T8D07
**Which of the following describes DMR?**
- **A) A technique for time-multiplexing two digital voice signals on a single 12.5 kHz repeater channel** ✅
- B) An automatic position tracking mode for FM mobiles communicating through repeaters
- C) An automatic computer logging technique for hands-off logging when communicating while operating a vehicle
- D) A digital technique for transmitting on two repeater inputs simultaneously for automatic error correction

> DMR (Digital Mobile Radio) uses TDMA (Time Division Multiple Access) to fit two simultaneous voice conversations on a single 12.5 kHz channel by alternating time slots. This doubles the capacity of each repeater channel.

### T8D08
**Which of the following is included in packet radio transmissions?**
- A) A check sum that permits error detection
- B) A header that contains the call sign of the station to which the information is being sent
- C) Automatic repeat request in case of error
- **D) All these choices are correct** ✅

> Packet radio includes all three: checksums for error detection, headers with addressing (call signs), and ARQ (Automatic Repeat Request) for error correction. These features make packet reliable for data communications.

### T8D09
**What is CW?**
- A) A type of electromagnetic propagation
- B) A digital mode used primarily on 2 meter FM
- C) A technique for coil winding
- **D) Another name for a Morse code transmission** ✅

> CW stands for Continuous Wave, which is the technical term for Morse code transmission. The carrier is keyed on and off to form dots and dashes. Despite its age, CW remains one of the most effective weak-signal modes in amateur radio.

### T8D10
**Which of the following operating activities is supported by digital mode software in the WSJT-X software suite?**
- A) Earth-Moon-Earth
- B) Weak signal propagation beacons
- C) Meteor scatter
- **D) All these choices are correct** ✅

> WSJT-X (developed by Nobel laureate Joe Taylor, K1JT) supports EME (moonbounce), WSPR (weak signal beacons), meteor scatter, and modes like FT8/FT4. It's designed specifically for weak signal and extreme path communications.

### T8D11
**What is an ARQ transmission system?**
- A) A special transmission format limited to video signals
- B) A system used to encrypt command signals to an amateur radio satellite
- **C) An error correction method in which the receiving station detects errors and sends a request for retransmission** ✅
- D) A method of compressing data using autonomous reiterative Q codes prior to final encoding

> ARQ = Automatic Repeat reQuest. When the receiving station detects an error (via checksum), it requests the sending station to retransmit that data block. This ensures reliable data delivery over imperfect radio links.

### T8D12
**Which of the following best describes an amateur radio mesh network?**
- **A) An amateur-radio based data network using commercial Wi-Fi equipment with modified firmware** ✅
- B) A wide-bandwidth digital voice mode employing DMR protocols
- C) A satellite communications network using modified commercial satellite TV hardware
- D) An internet linking protocol used to network repeaters

> Amateur mesh networks (like AREDN) use modified commercial Wi-Fi routers with custom firmware operating on amateur frequencies. They create self-healing, self-configuring data networks for emergency communications and community networking.

### T8D13
**What is FT8?**
- A) A wideband FM voice mode
- **B) A digital mode capable of low signal-to-noise operation** ✅
- C) An eight channel multiplex mode for FM repeaters
- D) A digital slow-scan TV mode with forward error correction and automatic color compensation

> FT8 (Franke-Taylor 8-FSK) is a digital mode designed for making contacts with very weak signals — it can decode signals well below the noise floor. It uses 15-second transmission cycles and has become wildly popular on HF since its introduction in 2017.
