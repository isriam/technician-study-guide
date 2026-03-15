# T9 — Antennas and Feed Lines

## Antenna Types and Characteristics

Let's talk about antennas — the part of your station that actually puts your signal into the air and pulls signals back out. Understanding antenna types and how they work is fundamental to getting the most out of your radio.

A beam antenna is one that concentrates signals in one direction, like a flashlight compared to a bare light bulb. The most common example is a Yagi antenna, which uses multiple elements — a reflector, a driven element, and one or more directors — to focus RF energy into a directional beam. Of the common antenna types, a Yagi offers the greatest gain. More elements means more gain. By comparison, an isotropic antenna has zero dBi gain by definition since it's just a theoretical reference point, and antennas like a J-pole or five-eighths wave vertical have only modest gain.

So what exactly is antenna gain? It's the increase in signal strength in a specified direction compared to a reference antenna. Gain doesn't create power from nothing — it concentrates the existing power in a preferred direction by taking from other directions. Think of squeezing a balloon: you get more in one spot by reducing coverage elsewhere. Gain is measured in dBi when compared to an isotropic antenna, or dBd when compared to a dipole.

Now let's look at the simple dipole. A dipole oriented parallel to Earth's surface is a horizontally polarized antenna — the electric field of the radio wave is horizontal, matching the orientation of the antenna elements. The polarization of your antenna should match the polarization of the station you're communicating with for the best signal. A half-wave dipole radiates its strongest signal broadside to the antenna — that means perpendicular to the wire. Picture a donut shape around the wire: maximum radiation comes from the sides, with nulls off the ends. This is important for pointing your antenna toward the stations you want to reach.

The resonant frequency of a dipole is determined by its length. Shortening a dipole increases its resonant frequency because frequency is inversely proportional to length. Conversely, making it longer lowers the frequency. Adding coils in series or capacitive loading to the ends electrically lengthens the antenna, also lowering its resonant frequency. Only physically shortening the antenna raises the frequency.

Speaking of antenna loading — this is the technique of electrically lengthening an antenna by inserting inductors, or coils, into the radiating elements. Loading lets you use a physically shorter antenna that behaves as if it were full-size. This is very common on mobile HF antennas where a full-size antenna would be impractically long. Springs and structural reinforcement are mechanical modifications, not electrical loading.

For VHF and UHF mobile service, a five-eighths wavelength whip antenna has an advantage over a quarter-wave antenna — it has more gain. Specifically, about 3 decibels more, with a lower radiation angle that's better for ground-level mobile communications. It does not have 10 times the power gain though — that would be 10 decibels. The gain comes from concentrating radiation at a lower angle toward the horizon where other stations actually are.

The short, flexible antenna supplied with most handheld transceivers — often called a rubber duck — has a significant disadvantage compared to a full-sized quarter-wave antenna: low efficiency. Much of the transmitter's power is wasted as heat rather than being radiated. A full quarter-wave antenna is significantly more efficient but less portable. The rubber duck is actually quite durable mechanically — it's the electrical efficiency that suffers.

Using a handheld VHF transceiver with a flexible antenna inside a vehicle creates another problem. The vehicle's metal body acts like a Faraday cage, shielding and absorbing RF energy. Signal strength is significantly reduced in both transmit and receive directions. For reliable mobile operation, you really need an external antenna mounted on the vehicle's exterior.

## Antenna Dimensions

Knowing the approximate physical size of antennas for different frequencies is practical knowledge you'll use when building or buying antennas.

A quarter-wavelength vertical antenna for 146 megahertz is approximately 19 inches long. At 146 megahertz, a full wavelength is about 80 inches — roughly 2 meters. A quarter of that is about 20 inches, and with velocity factor adjustment it works out to approximately 19 inches. The formula is: length in inches equals 2808 divided by the frequency in megahertz.

A half-wavelength 6-meter dipole antenna is approximately 112 inches long, which is about 9 and a third feet. The name "6 meters" refers to the full wavelength, and the dipole is half of that — about 3 meters or 118 inches, adjusted down to about 112 inches for velocity factor.

## Feed Lines and Connectors

The feed line connects your radio to your antenna, and choosing the right one matters more than many new hams realize. Coaxial cable is the most common feed line for amateur radio antenna systems because it is easy to use and requires few special installation considerations. You can run coax through walls, along the ground, or even bury it. It doesn't need the special spacing that open-wire line requires. However, coax does not have the lowest loss of all feed line types — open-wire line beats it there. And it doesn't handle the most power — hardline does. Convenience is the main advantage of coax.

The most common impedance of coaxial cables used in amateur radio is 50 ohms. Cables like RG-58, RG-213, and LMR-400 are all 50-ohm cables, and most amateur transceivers are designed for 50-ohm loads. Consumer TV cable is 75 ohms, and old-style open-wire feed line is 300 to 600 ohms.

There's an important electrical difference between RG-58 and RG-213 coaxial cable: RG-213 has less loss at a given frequency. It achieves this because it's a larger diameter cable with a bigger center conductor and more shielding. RG-58 is thinner and more flexible, making it easier to work with, but it's lossier. Both are 50-ohm cables, but RG-213 is the better performer and handles more power.

As the frequency of a signal passing through coaxial cable increases, the loss increases. This is why VHF and UHF stations need lower-loss cable than HF stations — at 440 megahertz, cheap cable like RG-58 can lose half your signal over a moderate run length. The characteristic impedance, however, stays the same regardless of frequency.

For the lowest loss at VHF and UHF, air-insulated hardline is the best choice. Air is the best dielectric with the lowest loss, and the rigid copper construction minimizes conductor losses. It's expensive and difficult to install, but when loss matters most, it's the gold standard.

There are multiple sources of loss in coaxial feed line. Water intrusion into connectors is perhaps the worst — it dramatically increases loss and eventually corrodes the cable. High SWR also increases effective loss because power travels back and forth through the lossy cable multiple times. And each connector in the line adds a small amount of loss. All three of these are real sources of feed line loss.

Let's talk connectors. PL-259 connectors and their SO-239 mates are the most common amateur radio connectors. They're commonly used at HF and VHF frequencies. They are not watertight, not suitable for microwave frequencies, and they use a threaded coupling — not bayonet style like a BNC connector.

For frequencies above 400 megahertz, Type N connectors are most suitable. They maintain consistent impedance and low loss at UHF and microwave frequencies. Despite the name "UHF connector," the PL-259 and SO-239 actually perform poorly above 400 megahertz due to their non-constant impedance design. The Type N was specifically designed for precision RF work at higher frequencies.

## SWR and Impedance Matching

Standing wave ratio, or SWR, is a measure of how well a load is matched to a transmission line. A perfect match gives you a 1 to 1 SWR. Higher numbers indicate greater mismatch, with more power being reflected back toward the transmitter. SWR tells you about impedance matching — it says nothing about amplifier efficiency or ground quality.

A benefit of low SWR is reduced signal loss. Good impedance matching means more of your transmitter power reaches the antenna and is radiated, rather than being reflected back and wasted as heat in the feed line. Low SWR doesn't directly reduce television interference or antenna wear — it's about efficient power transfer.

An antenna tuner, also called an antenna coupler, matches the antenna system impedance to the transceiver's output impedance. It transforms whatever impedance the antenna presents into the 50 ohms your radio expects to see. An important point: the tuner doesn't actually make the antenna more efficient or change its resonant frequency. It just makes the transceiver see a matched load so it can deliver full power without folding back.

If you're seeing erratic changes in SWR — readings that jump around unpredictably — the cause is almost certainly a loose connection in the antenna or feed line. A bad solder joint, corroded connector, or broken conductor that makes and breaks contact will cause the SWR to fluctuate. Stable problems produce stable SWR readings. Only intermittent faults cause erratic behavior. Thunderstorms, overmodulation, and strong local stations don't cause SWR changes.
