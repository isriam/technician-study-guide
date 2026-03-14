# T4 — Amateur Radio Practices
*2 questions on the exam from a pool of 24*

## Group T4A — Station setup; connecting a transceiver; power source; connecting digital equipment; RF grounding

### T4A01
**Which of the following is an appropriate power supply rating for a typical 50 watt output mobile FM transceiver?**
- A) 24.0 volts at 4 amperes
- B) 13.8 volts at 4 amperes
- C) 24.0 volts at 12 amperes
- **D) 13.8 volts at 12 amperes** ✅

> Mobile transceivers run on 13.8 volts DC (standard automotive voltage). A 50-watt radio draws roughly 10+ amps on transmit, so a 12-amp supply is appropriate. 4 amps is way too little, and 24 volts is the wrong voltage for standard mobile radios.

### T4A02
**Which of the following should be considered when selecting an accessory SWR meter?**
- **A) The frequency and power level at which the measurements will be made** ✅
- B) The distance that the meter will be located from the antenna
- C) The types of modulation being used at the station
- D) All these choices are correct

> SWR meters must be rated for the frequency range and power level you're using. An HF SWR meter won't work properly at UHF, and a QRP meter can't handle 100 watts. Distance from the antenna and modulation type aren't significant factors.

### T4A03
**Why are short, heavy-gauge wires used for a transceiver's DC power connection?**
- **A) To minimize voltage drop when transmitting** ✅
- B) To provide a good counterpoise for the antenna
- C) To avoid RF interference
- D) All these choices are correct

> Heavy-gauge, short wires minimize resistance, which minimizes voltage drop under the high current draw during transmission. A 50-watt radio pulling 10+ amps through thin, long wires would suffer significant voltage loss, causing reduced power output or radio malfunction.

### T4A04
**How are the transceiver audio input and output connected in a station configured to operate using FT8?**
- A) To a computer running a terminal program and connected to a terminal node controller unit
- **B) To the audio input and output of a computer running WSJT-X software** ✅
- C) To an FT8 conversion unit, a keyboard, and a computer monitor
- D) To a computer connected to the FT8converter.com website

> FT8 uses WSJT-X software on a computer. The radio's audio output connects to the computer's audio input (so the computer can decode), and the computer's audio output connects to the radio's audio input (so the computer can transmit). There's no special "FT8 conversion unit."

### T4A05
**Where should an RF power meter be installed?**
- **A) In the feed line, between the transmitter and antenna** ✅
- B) At the power supply output
- C) In parallel with the push-to-talk line and the antenna
- D) In the power supply cable, as close as possible to the radio

> RF power meters go in series in the feed line between the transmitter and antenna — that's where the RF power flows. Not at the power supply (that measures DC), and not in parallel with anything.

### T4A06
**What signals are used in a computer-radio interface for digital mode operation?**
- A) Receive and transmit mode, status, and location
- B) Antenna and RF power
- **C) Receive audio, transmit audio, and transmitter keying** ✅
- D) NMEA GPS location and DC power

> A digital mode interface needs three things: receive audio (from radio to computer), transmit audio (from computer to radio), and a PTT/keying signal (to tell the radio when to transmit). That's it — audio in, audio out, and a key line.

### T4A07
**Which of the following connections is made between a computer and a transceiver to use computer software when operating digital modes?**
- A) Computer "line out" to transceiver push-to-talk
- B) Computer "line in" to transceiver push-to-talk
- **C) Computer "line in" to transceiver speaker connector** ✅
- D) Computer "line out" to transceiver speaker connector

> The computer's "line in" (audio input) connects to the transceiver's speaker/audio output. This allows the computer to hear what the radio receives. Think about it: the radio speaks, the computer listens — speaker to line-in.

### T4A08
**Which of the following conductors is preferred for bonding at RF?**
- A) Copper braid removed from coaxial cable
- B) Steel wire
- C) Twisted-pair cable
- **D) Flat copper strap** ✅

> Flat copper strap is preferred for RF bonding because it has the most surface area relative to its size. At RF frequencies, current flows mostly on the surface (skin effect), so more surface = lower impedance. Round wire and braid have less surface area for their weight.

### T4A09
**How can you determine the length of time that equipment can be powered from a battery?**
- A) Divide the watt-hour rating of the battery by the peak power consumption of the equipment
- **B) Divide the battery ampere-hour rating by the average current draw of the equipment** ✅
- C) Multiply the watts per hour consumed by the equipment by the battery power rating
- D) Multiply the square of the current rating of the battery by the input resistance of the equipment

> Battery life = Amp-hours ÷ Average current draw. A 10 Ah battery powering equipment drawing 2A average = 5 hours. Use average current (not peak), and use amp-hours (not watt-hours) divided by current.

### T4A10
**What function is performed with a transceiver and a digital mode hot spot?**
- **A) Communication using digital voice or data systems via the internet** ✅
- B) FT8 digital communications via AFSK
- C) RTTY encoding and decoding without a computer
- D) High-speed digital communications for meteor scatter

> A digital hotspot connects your handheld DMR/D-STAR/Fusion radio to the internet, giving you access to digital voice networks worldwide. It's a tiny, low-power device that acts as your personal digital repeater gateway to internet-linked systems.

### T4A11
**Where should the negative power return of a mobile transceiver be connected in a vehicle?**
- **A) At the 12 volt battery chassis ground** ✅
- B) At the antenna mount
- C) To any metal part of the vehicle
- D) Through the transceiver's mounting bracket

> Connect the negative lead directly to the battery's chassis ground point — the most direct, low-resistance path. Don't use random metal parts, the antenna mount, or the mounting bracket. Poor grounding causes noise, voltage drops, and RF interference.

### T4A12
**What is an electronic keyer?**
- A) A device for switching antennas from transmit to receive
- B) A device for voice activated switching from receive to transmit
- **C) A device that assists in manual sending of Morse code** ✅
- D) An interlock to prevent unauthorized use of a radio

> An electronic keyer helps send Morse code by generating properly timed dots and dashes when you squeeze a paddle. It makes CW sending easier and more consistent than a straight key. It's not an antenna switch (that's a T/R switch) and not VOX.

---

## Group T4B — Operating controls; tuning; use of filters; squelch; AGC; repeater access; DMR operation

### T4B01
**What is the effect of excessive microphone gain on SSB transmissions?**
- A) Frequency instability
- **B) Distorted transmitted audio** ✅
- C) Increased SWR
- D) All these choices are correct

> Too much mic gain causes audio distortion and splatter (your signal spreads beyond its intended bandwidth). It won't cause frequency instability or change your SWR. The fix is simple: turn down the mic gain and speak normally.

### T4B02
**Which of the following can be used to enter a transceiver's operating frequency?**
- **A) The keypad or VFO knob** ✅
- B) The CTCSS or DTMF encoder
- C) The Automatic Frequency Control
- D) All these choices are correct

> You set frequency using the keypad (direct entry) or VFO knob (tuning dial). CTCSS and DTMF are tone systems, and AFC automatically tracks frequency drift — neither is used to set the operating frequency.

### T4B03
**How is squelch adjusted so that a weak FM signal can be heard?**
- **A) Set the squelch threshold so that receiver output audio is on all the time** ✅
- B) Turn up the audio level until it overcomes the squelch threshold
- C) Turn on the anti-squelch function
- D) Enable squelch enhancement

> To hear weak signals, open the squelch all the way so audio is always on (you'll hear noise between signals). This ensures you don't miss weak transmissions that fall below the squelch threshold. Volume level doesn't affect squelch.

### T4B04
**What is a way to enable quick access to a favorite frequency or channel on your transceiver?**
- A) Enable the frequency offset
- **B) Store it in a memory channel** ✅
- C) Enable the VOX
- D) Use the scan mode to select the desired frequency

> Memory channels store your favorite frequencies for one-touch recall. Frequency offset is for repeater operation, VOX is voice-activated transmit, and scan mode cycles through frequencies — none of those quickly select a specific frequency.

### T4B05
**What does the scanning function of an FM transceiver do?**
- A) Checks incoming signal deviation
- B) Prevents interference to nearby repeaters
- **C) Tunes through a range of frequencies to check for activity** ✅
- D) Checks for messages left on a digital bulletin board

> The scan function steps through frequencies or memory channels looking for signals. When it finds activity (a signal breaking squelch), it stops so you can listen. It's like a radio version of channel surfing.

### T4B06
**Which of the following controls could be used if the voice pitch of a single-sideband signal returning to your CQ call seems too high or low?**
- A) The AGC or limiter
- B) The bandwidth selection
- C) The tone squelch
- **D) The RIT or Clarifier** ✅

> The RIT (Receiver Incremental Tuning) or Clarifier adjusts your receive frequency slightly without changing your transmit frequency. This corrects voice pitch issues on SSB caused by the other station being slightly off frequency. AGC controls signal level, not pitch.

### T4B07
**What does a DMR "code plug" contain?**
- A) Your call sign in CW for automatic identification
- **B) Access information for repeaters and talkgroups** ✅
- C) The codec for digitizing audio
- D) The DMR software version

> A DMR code plug is a configuration file containing repeater frequencies, color codes, talkgroup IDs, contact lists, and zone configurations. It's essentially a programming file that tells your radio how to access the DMR network. It doesn't contain codec software or CW ID info.

### T4B08
**What is the advantage of having multiple receive bandwidth choices on a multimode transceiver?**
- A) Permits monitoring several modes at once by selecting a separate filter for each mode
- **B) Permits noise or interference reduction by selecting a bandwidth matching the mode** ✅
- C) Increases the number of frequencies that can be stored in memory
- D) Increases the amount of offset between receive and transmit frequencies

> Matching your receiver bandwidth to the signal mode reduces noise and adjacent-signal interference. CW needs only ~500 Hz, SSB needs ~2.4 kHz, FM needs ~15 kHz. A narrower filter passes less noise. It doesn't affect memory channels or offset.

### T4B09
**How is a specific group of stations selected on a digital voice transceiver?**
- A) By retrieving the frequencies from transceiver memory
- B) By enabling the group's CTCSS tone
- **C) By entering the group's identification code** ✅
- D) By activating automatic identification

> Digital voice systems (DMR, D-STAR, Fusion) use identification codes (talkgroup IDs, reflectors) to select groups, not CTCSS tones (which are analog). You program the group's code into your radio to join their channel.

### T4B10
**Which of the following receiver filter bandwidths provides the best signal-to-noise ratio for SSB reception?**
- A) 500 Hz
- B) 1000 Hz
- **C) 2400 Hz** ✅
- D) 5000 Hz

> 2400 Hz (2.4 kHz) matches the bandwidth of an SSB voice signal. A 500 Hz filter would cut off voice audio, and a 5000 Hz filter would pass unnecessary noise. Match the filter to the signal for optimal signal-to-noise ratio.

### T4B11
**Which of the following must be programmed into a D-STAR digital transceiver before transmitting?**
- **A) Your call sign** ✅
- B) Your output power
- C) The codec type being used
- D) All these choices are correct

> D-STAR requires your call sign programmed into the radio because it's embedded in the digital data stream — the system uses it for routing and identification. Power and codec are set automatically or by other means.

### T4B12
**What is the result of tuning an FM receiver above or below a signal's frequency?**
- A) Change in audio pitch
- B) Sideband inversion
- C) Generation of a heterodyne tone
- **D) Distortion of the signal's audio** ✅

> FM demodulation requires being tuned to the exact center frequency. Off-tuning causes audio distortion because the discriminator can't properly decode the frequency-modulated signal. Unlike SSB, where off-tuning changes pitch, FM just distorts.
