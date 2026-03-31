# T4 — Amateur Radio Practices

## Station Setup and Power

Let's cover the practical side of setting up and operating an amateur radio station. Starting with power supplies — a typical 50-watt output mobile FM transceiver needs a power supply rated at 13.8 volts at 12 amperes. Mobile radios run on 13.8 volts DC, which is standard automotive voltage. On transmit, a 50-watt radio draws roughly 10 or more amps, so a 12-amp supply is appropriate. Four amps would be way too little, and 24 volts is the wrong voltage entirely for standard mobile gear.

Short, heavy-gauge wires are used for a transceiver's DC power connection to minimize voltage drop when transmitting. Heavy gauge and short length both minimize resistance, which reduces voltage loss under the high current draw during transmission. Running thin, long wires to a radio pulling 10 or more amps would cause significant voltage drop, leading to reduced power output or radio malfunction.

When installing the negative power return of a mobile transceiver in a vehicle, connect it directly at the 12-volt battery chassis ground — the most direct, low-resistance path. Don't connect to random metal parts of the vehicle, the antenna mount, or through the mounting bracket. Poor grounding leads to noise, voltage drops, and RF interference.

To determine how long a battery can power your equipment, divide the battery's ampere-hour rating by the average current draw of the equipment. For example, a 10 amp-hour battery powering equipment that draws 2 amps average will last about 5 hours. Use average current, not peak, and divide amp-hours by amps to get hours.

## Feed Line and RF Measurement

An RF power meter should be installed in the feed line, between the transmitter and antenna — that's where the RF power actually flows. Not at the power supply output, which measures DC, and not in parallel with anything.

When selecting an accessory SWR meter, the important consideration is the frequency and power level at which the measurements will be made. SWR meters must be rated for your frequency range and power level. An HF SWR meter won't work properly at UHF, and a low-power meter can't handle 100 watts. Distance from the antenna and modulation type are not significant factors.

## RF Grounding and Bonding

For RF bonding, flat copper strap is the preferred conductor. At radio frequencies, current flows mostly on the surface of a conductor due to skin effect. Flat strap has the most surface area relative to its size, which means lower RF impedance. Round wire, steel wire, and copper braid from coaxial cable all have less effective surface area.

## Digital Mode Setup

For FT8 operation, the transceiver's audio input and output connect to the audio input and output of a computer running WSJT-X software. The radio's audio output goes to the computer's audio input so the computer can decode received signals, and the computer's audio output goes to the radio's audio input so it can generate transmit signals. There's no special FT8 conversion unit or website needed.

A computer-radio interface for digital mode operation uses three key signals: receive audio from the radio to the computer, transmit audio from the computer to the radio, and a transmitter keying signal to tell the radio when to transmit. That's audio in, audio out, and a key line.

When connecting a computer to a transceiver for digital modes, the computer's "line in" connects to the transceiver's speaker connector. The radio speaks and the computer listens — speaker output to line input. Not the other way around.

## Digital Voice and Hotspots

A digital mode hotspot performs communication with a digital voice or data network for nearby transceivers. It connects your handheld DMR, D-STAR, or Fusion radio to the internet, giving you access to digital voice networks worldwide. It's a tiny, low-power device that acts as your personal digital repeater gateway to internet-linked systems.

An electronic keyer is a device that assists in manual sending of Morse code. It generates properly timed dots and dashes when you squeeze a paddle, making CW sending easier and more consistent than using a straight key. It's not an antenna switch or a voice-activated switching device.

## Operating Controls

When it comes to operating your radio, knowing the controls matters. You set your transceiver's operating frequency using the keypad for direct entry or the VFO knob for tuning. CTCSS and DTMF encoders are tone systems, and automatic frequency control tracks frequency drift — none of those set your operating frequency.

Memory channels store your favorite frequencies for one-touch recall. This is the way to enable quick access to a favorite frequency or channel. Frequency offset is for repeater operation, VOX is voice-activated transmit, and scan mode cycles through frequencies automatically.

The scanning function of an FM transceiver tunes through a range of frequencies to check for activity. When it finds a signal that breaks squelch, it stops so you can listen. Think of it as channel surfing for radio.

## Squelch and Filtering

Squelch is adjusted to hear a weak FM signal by setting the squelch threshold so that receiver output audio is on all the time. Opening the squelch all the way means you'll hear background noise between signals, but you won't miss weak transmissions that would otherwise fall below the squelch threshold. Turning up the volume doesn't affect the squelch behavior.

Having multiple receive bandwidth choices on a multimode transceiver lets you reduce noise or interference by selecting a bandwidth that matches the mode you're using. CW needs only about 500 hertz of bandwidth, SSB needs about 2400 hertz, and FM needs about 15 kilohertz. A narrower filter passes less noise, improving your signal-to-noise ratio.

The best filter bandwidth for SSB reception is 2400 hertz. This matches the bandwidth of an SSB voice signal. A 500-hertz filter would cut off too much voice audio, and a 5000-hertz filter would pass unnecessary noise. Match the filter to the signal for the best results.

## SSB and FM Operation

If the voice pitch of a single-sideband signal seems too high or low, the control to adjust is the RIT, or Receiver Incremental Tuning, also called the Clarifier. It adjusts your receive frequency slightly without changing your transmit frequency, correcting pitch issues caused by the other station being slightly off frequency. AGC controls signal level, not pitch.

Excessive microphone gain on SSB transmissions causes distorted transmitted audio. Too much mic gain creates splatter, where your signal spreads beyond its intended bandwidth. It won't cause frequency instability or change your SWR. The fix is simple — turn down the mic gain and speak at a normal level.

What does an FM signal sound like when received slightly off frequency? The audio becomes distorted. FM demodulation requires being tuned to the exact center frequency. Off-tuning means the discriminator can't properly decode the frequency modulation. Unlike SSB where off-tuning changes the voice pitch, FM just distorts.

## DMR and Digital Voice

A DMR "code plug" is configuration data loaded onto your radio to access repeaters and talkgroups. It contains repeater frequencies, color codes, talkgroup IDs, contact lists, and zone configurations. Think of it as a programming file that tells your radio how to access the DMR network. It doesn't contain codec software or CW identification information.

A specific group of stations is selected on a digital voice transceiver by entering the group's identification code. Digital voice systems like DMR, D-STAR, and Fusion use identification codes such as talkgroup IDs or reflectors to select groups, not CTCSS tones. You program the group's code into your radio to join their channel.

Before transmitting on a D-STAR digital transceiver, you must program in your call sign. D-STAR embeds your call sign in the digital data stream and uses it for routing and identification. Power settings and codec type are handled separately — the call sign is the critical programming requirement.
