# T8 — Signals and Emissions

## Modulation Modes

Understanding modulation is fundamental to radio communication. Modulation is how we impress information — voice, data, or code — onto an RF carrier signal. The different types of modulation each have their own characteristics and uses.

Single sideband, or SSB, is a form of amplitude modulation. In full AM, the signal contains a carrier and two sidebands. SSB removes the carrier and one sideband, leaving only one sideband to carry the information. This makes it more efficient than full AM but it's still fundamentally amplitude modulation.

FM — frequency modulation — is the standard mode for VHF and UHF voice repeaters. When you key up a two-meter repeater, you're using FM. It provides clear audio, is resistant to amplitude noise, and works well with the channelized repeater system. VHF packet radio also typically uses FM or PM — phase modulation — because VHF FM repeater infrastructure is widespread and handles digital data well.

For long-distance weak signal contacts on VHF and UHF, SSB is the preferred voice mode. It concentrates all transmitter power into the signal with no wasted carrier, has a narrower bandwidth than FM, and is more effective for marginal path conditions.

Now let's compare SSB and FM directly. SSB signals have narrower bandwidth — about 3 kilohertz versus 10 to 15 kilohertz for FM. SSB is actually harder to tune than FM because you have to nail the frequency precisely, and FM is more resistant to interference due to its capture effect. But FM has a key disadvantage: because of the capture effect, only one signal can be received at a time on a given frequency. The strongest signal captures the receiver and suppresses weaker ones. With SSB, you can hear multiple signals simultaneously.

By convention, upper sideband is used for 10-meter HF, VHF, and UHF single-sideband communications. Lower sideband is used on 40 meters and below. The dividing line is at 10 megahertz — above it, use upper sideband. This is a convention, not a regulation, but it's universally followed.

## Bandwidth

Different modes occupy different amounts of spectrum, and you should know the approximate bandwidth of each. CW — Morse code — has the narrowest bandwidth of any common amateur mode at about 150 hertz. This extreme efficiency is why CW can get through when other modes fail completely.

SSB voice occupies approximately 3 kilohertz, from about 300 hertz to 3000 hertz. Full AM would be 6 kilohertz since it includes both sidebands, but SSB removes one sideband and the carrier, halving the bandwidth.

A VHF repeater FM voice signal occupies between 10 and 15 kilohertz. This is determined by the maximum deviation — plus or minus 5 kilohertz for narrowband FM — plus the audio bandwidth.

At the wide end of the spectrum, AM fast-scan TV transmissions use about 6 megahertz of bandwidth — the same as a commercial broadcast TV channel. This is why amateur television is only practical on UHF and above, where there's enough spectrum available.

## Satellite Operations

Amateur radio satellites are fascinating and accessible. Let's cover what you need to know about working through them.

Satellite beacons transmit telemetry about the satellite's health and status — things like battery voltage, temperature, and transponder status. This lets ground stations monitor the satellite's condition. A satellite beacon is simply a transmission from a satellite that contains this status information.

Amateur satellites use many different modes including SSB, FM, CW, and various digital modes. Different satellites support different modes — some have FM repeaters, others have linear transponders for SSB and CW, and many support digital data.

When you hear that a satellite is operating in U/V mode, the U refers to the uplink band and V refers to the downlink band. U means UHF — the 70-centimeter band at 440 megahertz — and V means VHF — the two-meter band at 146 megahertz. The letter before the slash is always the uplink, the letter after is the downlink.

LEO means Low Earth Orbit — a satellite in low earth orbit, typically 200 to 2000 kilometers altitude, which has a period of around 100 minutes. LEO satellites are only accessible for short pass windows of 5 to 15 minutes each orbit. Most amateur satellites are LEO.

Doppler shift is an observed change in signal frequency caused by relative motion between the satellite and your earth station. As the satellite approaches, its signal appears higher in frequency. As it moves away, the frequency drops — just like a passing ambulance siren. Operators must compensate for this shift to stay on frequency during a pass.

Spin fading occurs because the satellite is tumbling or rotating, causing its antenna pattern to change orientation relative to your ground station. The signal fades in and out as the antenna alternately points toward and away from you.

Satellite tracking programs are essential tools for satellite operators. They provide maps showing the real-time position of the satellite track over Earth, the time and elevation of pass predictions, and the apparent frequency corrected for Doppler shift. The essential input for these programs is the Keplerian elements — also called two-line elements or TLEs — which are the orbital parameters describing the satellite's orbit.

Using too much power on a satellite uplink can block access by other users. Satellite transponders are shared resources, and excessive power captures the transponder at the expense of everyone else. Use only enough power for your signal to be heard. A good way to check is to compare your downlink signal strength to the satellite's beacon — your signal should be about the same strength as the beacon.

Anyone may receive telemetry from a space station. No license is needed to receive radio signals — you only need a license to transmit. This applies to all radio reception, not just satellites.

## Internet Linking and VoIP

Voice Over Internet Protocol, or VoIP, is a method of delivering voice communications over the internet using digital techniques. In amateur radio, systems like IRLP, EchoLink, and AllStar use VoIP to link repeaters and stations across the internet.

The Internet Radio Linking Project — IRLP — connects amateur radio systems such as repeaters via the internet using VoIP. It allows you to talk through a local repeater and be heard on a repeater across the world. Access to IRLP nodes is accomplished by using DTMF signals — the touch-tone signals from your radio. You key in a node number to connect or disconnect from remote repeaters.

EchoLink is unique because it enables an amateur station to transmit through a repeater without using a radio to initiate the transmission. You can connect to repeaters using a computer or smartphone app — no radio needed. However, you must register your call sign and provide proof of license before using the EchoLink system.

A gateway is an amateur radio station that connects other amateur stations to the internet. It's the bridge between RF and IP networks. IRLP nodes and EchoLink stations are examples of gateways. This is different from a repeater, which retransmits RF signals, or a digipeater, which relays digital packets.

## Contesting and Direction Finding

Contesting — sometimes called radiosport — is the operating activity that involves contacting as many stations as possible during a specified period. Points are scored for contacts, with multipliers for different areas or countries. When operating in a contest, send only the minimum information needed for proper identification and the contest exchange. Never abbreviate your call sign — that's an FCC violation. Keep it brief and move on to the next contact.

A grid locator is a letter-number designator assigned to a geographic location. Also called a Maidenhead grid square, it divides the world into grid squares and is used in VHF and UHF contesting and weak signal work to identify locations concisely.

Radio direction finding — sometimes called fox hunting — is the method used to locate sources of noise interference or jamming. It uses directional antennas to triangulate the source of a signal. For a hidden transmitter hunt, a directional antenna like a Yagi or loop is essential — you rotate it to find the direction of strongest signal, then walk toward it.

## Digital Modes and Data Communications

Amateur radio uses many digital communication methods. Packet radio, IEEE 802.11 — which is Wi-Fi used in amateur mesh networks — and FT8 are all digital modes.

FT8, which stands for Franke-Taylor 8-FSK, is a digital mode capable of low signal-to-noise operation. It can decode signals well below the noise floor, using 15-second transmission cycles. FT8 has become wildly popular on HF since its introduction in 2017. It's part of the WSJT-X software suite, which also supports earth-moon-earth communication, weak signal propagation beacons, and meteor scatter.

CW — continuous wave — is another name for Morse code transmission. The carrier is keyed on and off to form dots and dashes. Despite its age, CW remains one of the most effective weak-signal modes in amateur radio.

PSK stands for Phase Shift Keying, a digital modulation method that encodes data by shifting the phase of the carrier signal. PSK31 is a popular amateur digital mode using this technique.

DMR — Digital Mobile Radio — uses a technique for time-multiplexing two digital voice signals on a single 12.5 kilohertz repeater channel. By alternating time slots, it doubles the capacity of each repeater channel.

APRS — the Automatic Packet Reporting System — can transmit GPS position data, text messages, weather data, and more. Its primary application is providing real-time tactical digital communications in conjunction with a map showing the locations of stations. This makes it perfect for events like marathons, search and rescue, or severe weather spotting.

NTSC stands for National Television System Committee, and in amateur radio it refers to an analog fast-scan color TV signal. It's the same standard used in North American broadcast television.

Packet radio transmissions include several important features: a checksum that permits error detection, a header containing the call sign of the station being addressed, and automatic repeat request in case of error. These features make packet reliable for data communications.

An ARQ transmission system — which stands for Automatic Repeat Request — is an error correction method in which the receiving station detects errors and sends a request for retransmission. This ensures reliable data delivery over imperfect radio links.

Amateur radio mesh networks use commercial Wi-Fi equipment with modified firmware operating on amateur frequencies. They create self-healing, self-configuring data networks useful for emergency communications and community networking.
