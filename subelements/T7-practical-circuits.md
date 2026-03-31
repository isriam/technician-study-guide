# T7 — Practical Circuits

## Radio Station Equipment

Let's explore the practical circuits and equipment that make up an amateur radio station. At the heart of most stations is a transceiver — a device that combines a receiver and transmitter into one box. Almost all modern amateur radios are transceivers. The word itself is a mashup of transmitter and receiver.

Two important receiver characteristics come up often. Sensitivity is how well a receiver can detect weak signals — the lower the signal it can pick up, the more sensitive it is. Selectivity, on the other hand, is the receiver's ability to discriminate between multiple signals on nearby frequencies. Think of it this way: sensitivity is about detection, selectivity is about discrimination. A good receiver needs both.

Inside a receiver, a mixer is used to convert a signal from one frequency to another. It combines two signals to produce sum and difference frequencies, and this is how superheterodyne receivers convert incoming RF to an intermediate frequency for processing.

An oscillator is a circuit that generates a signal at a specific frequency. Every transmitter needs one to create its carrier frequency. Modulators modify signals, filters pass or block them, but the oscillator is the source — the clock and tone generator of radio.

Modulation is the process of combining speech or other information with an RF carrier signal for transmission. AM, FM, and SSB are all types of modulation. Without modulation, you'd just transmit a blank carrier with no information on it.

The PTT input on a transceiver — that stands for Push To Talk — switches the transceiver from receive to transmit when grounded. When you press the microphone button, the PTT line is grounded, and the radio switches to transmit mode. Release it and you're back to receive.

A transverter is a device that converts the RF input and output of a transceiver to another band. For example, it can let an HF radio operate on VHF. The name combines transceiver and converter. Don't confuse this with filters, which pass or block frequencies without converting them.

When you need more power, an RF power amplifier increases the transmitted output power from a transceiver. These are sometimes called linear amps. Voltage dividers reduce voltage, and impedance networks match impedances — neither one increases transmitted power.

The Variable Frequency Oscillator, or VFO, circuit in a transceiver sets the receive and transmit frequency. It's the heart of frequency control — when you turn the tuning dial, you're adjusting the VFO.

The SSB/CW-FM switch on a VHF power amplifier sets the amplifier for proper operation in the selected mode. SSB and CW require linear amplification, while FM can use more efficient non-linear amplification. This switch doesn't change the transmitted mode itself — it just optimizes the amplifier's bias and operating parameters for whichever mode you've selected.

## Interference and Troubleshooting

Interference is an inevitable part of radio, so knowing how to identify and fix it is essential. Let's start with FM-specific issues. If you're told your FM handheld or mobile transceiver is over-deviating, the fix is to talk farther away from the microphone. Over-deviation means too much frequency swing, caused by too much audio input. Talking louder would make it worse — you want less audio level, not more.

If a broadcast AM or FM radio is receiving your amateur radio transmission unintentionally, the problem is fundamental overload. The consumer receiver is unable to reject strong signals outside its intended band because it has poor front-end filtering. The problem is with the receiver, not your transmitter.

There are three main causes of radio frequency interference: fundamental overload, which swamps nearby receivers; harmonics, which are multiples of your transmit frequency that land on other services; and spurious emissions, which are unintended signals from your transmitter. All three are sources of interference you should understand.

High SWR is a common cause of low RF power output from a solid-state transceiver. Most modern rigs automatically reduce power to protect their output transistors when SWR is elevated, so a bad antenna match can drastically cut your actual radiated power.

A ferrite choke is the go-to fix for distorted audio caused by RF current on the shield of a microphone cable. Adding a clip-on ferrite "choke" to the microphone cable prevents the transmitted signal from feeding back into the transmitter, which can eliminate distorted voice transmissions. When the exam asks what eliminates distorted voice transmissions, the ferrite choke on the mic cable is the answer.

When a non-amateur radio or TV receiver is experiencing fundamental overload from your amateur signal, the fix goes at the receiver, not the transmitter. Block the amateur signal with a filter at the antenna input of the affected receiver. This lets the desired broadcast signals through while rejecting your amateur signal.

If a neighbor tells you that your station is causing interference to their radio or TV, the first step is to make sure your own station is functioning properly. Check whether it causes interference to your own radio or television when tuned to the same channel. If your equipment is clean, the problem is likely the neighbor's receiver. And never install a harmonic doubler — that would create more interference, not less.

A band-reject filter can reduce overload of a VHF transceiver by a nearby commercial FM station. It's tuned to block the specific commercial FM frequency while passing the desired VHF frequencies. An RF preamplifier would make the overload worse by amplifying everything, including the interference.

If something in a neighbor's home is causing harmful interference to your amateur station, you should work with your neighbor to identify the offending device, politely inform them that FCC rules prohibit the use of devices that cause harmful interference, and make sure your own station meets the standards of good amateur practice. Being diplomatic is key.

For non-fiber optic cable TV interference caused by your amateur radio transmission, the very first step is to make sure all TV feed line coaxial connectors are installed properly. Loose or corroded connectors on the cable TV system are a common cause of RF leakage. Fix the easy stuff before reaching for filters.

If you receive reports that your audio through an FM repeater is distorted or unintelligible, several things could be wrong. Your transmitter might be slightly off frequency, your batteries might be running low, or you might be in a bad location causing multipath and weak signal issues. Any of these can cause poor audio quality through a repeater.

RF feedback in a transmitter is a specific problem where RF energy gets back into the audio circuits, creating a feedback loop. The symptom is garbled, distorted, or unintelligible voice transmissions. The RF signal ends up modulating itself, which is different from SWR problems or frequency drift. To eliminate this, add a clip-on ferrite choke to the microphone cable — this blocks RF from feeding back into the transmitter's audio input.

## Antenna Measurements and Feed Lines

A dummy load is a device that prevents transmitting signals over the air when you're making tests. It absorbs your transmitter's RF power as heat instead of radiating it, acting as a non-radiating substitute for an antenna. A typical RF dummy load consists of a 50-ohm non-inductive resistor mounted on a heat sink. The resistor must be non-inductive to present a pure resistance at RF frequencies.

An antenna analyzer is the tool used to determine if an antenna is resonant at the desired operating frequency. It measures impedance and SWR across a range of frequencies, showing you exactly where the antenna is resonant. It's the primary instrument for antenna testing and adjustment.

SWR — standing wave ratio — tells you how well your antenna system is matched. An SWR reading of 1 to 1 indicates a perfect impedance match between the antenna and the feed line, meaning all power goes to the antenna with no reflected power. An SWR of 4 to 1, on the other hand, indicates a significant impedance mismatch. At that level, a substantial amount of power is being reflected back to the transmitter.

Most solid-state transmitters automatically reduce output power as SWR increases beyond a certain level. This protects the output amplifier transistors from damage caused by reflected power. It's a built-in safety feature, not an FCC requirement.

A directional wattmeter is the instrument used to determine SWR. It measures both forward and reflected power, allowing you to calculate the ratio. The exam includes "iambic pentameter" as a joke answer — that's a poetry meter, not a radio instrument.

Power lost in a feed line is converted into heat through resistive losses in the conductor and dielectric. This is why lower-loss cable is important for long runs and at higher frequencies. The power doesn't disappear — it just becomes waste heat.

Moisture contamination is the primary cause of coaxial cable failure. Water getting into coax dramatically increases loss and eventually corrodes the conductors. This is why weatherproofing connectors and using UV-resistant cable outdoors is critical. Speaking of which, the outer jacket of coaxial cable should be resistant to ultraviolet light because UV from sunlight degrades the jacket over time, causing it to crack and allow water to enter the cable.

Foam-dielectric coaxial cable has an advantage over solid-dielectric cable — it has less loss per foot. The air pockets in the foam reduce the dielectric constant, lowering losses. Air-insulated hardline takes this even further with the lowest loss of all, but it requires special techniques to prevent moisture from entering the cable because the interior is hollow.

## Multimeters and Measurements

Let's talk about the instruments you'll use to measure electrical quantities. A voltmeter measures electric potential — that is, voltage. An ammeter measures electric current. And an ohmmeter measures resistance — it works by applying a small current through the component being tested and measuring the resulting voltage. From this voltage and the known current, the meter calculates resistance using Ohm's Law. A multimeter combines all three functions into one instrument, measuring voltage, current, and resistance. It does not measure signal strength, noise, impedance, or reactance — those require specialized instruments.

How you connect a meter depends on what you're measuring. A voltmeter connects in parallel — across the component — to sense the voltage difference without significantly affecting circuit operation. An ammeter connects in series so that all the current flows through it. Connecting an ammeter in parallel would create a short circuit and likely blow the fuse or damage the meter. Remember: parallel for voltage, series for current.

Be careful with your multimeter settings. Attempting to measure voltage when using the resistance setting can damage the meter, because the resistance mode uses a small internal battery — external voltage can overload and destroy the meter's circuitry. Always verify your meter is set to the correct function before connecting it to a circuit.

When measuring in-circuit resistance with an ohmmeter, always make sure the circuit is not powered first. The ohmmeter uses its own internal battery to measure, and external voltage from a powered circuit will give false readings and can damage the meter.

When you connect an ohmmeter across a large, discharged capacitor, you'll see the resistance increase over time. This happens because the ohmmeter's internal battery gradually charges the capacitor. Initially the current flows freely and resistance reads low, then as the capacitor charges up, current decreases and resistance rises. This behavior is actually a useful diagnostic technique for testing capacitors.

## Soldering

For electronics work, always use rosin-core solder. Acid-core solder is meant for plumbing and should never be used for radio and electronic applications. The acid flux is corrosive and will damage electronic components and circuit boards over time.

A good solder joint should look smooth, shiny, and concave. A cold solder joint — one where the solder didn't flow properly — has a characteristic rough or lumpy surface. If your solder joint looks like a tiny mountain instead of a smooth dome, it may have a poor electrical connection and needs to be reheated.
