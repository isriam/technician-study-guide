# T3 — Radio Wave Characteristics

## Radio Wave Characteristics

Let's talk about how radio waves actually behave in the real world. One of the most common experiences for VHF operators is noticing that signal strength can vary dramatically when you move your antenna just a few feet. This happens because of multipath propagation — your signal arrives via multiple paths, bouncing off buildings, hills, and other objects. These copies of the signal either cancel each other out through destructive interference or reinforce each other through constructive interference. At VHF wavelengths around 2 meters, moving just a few feet can shift you from a deep null to a strong peak.

This same multipath effect causes what's called "picket fencing" — that rapid flutter you hear on mobile VHF and UHF signals. As a vehicle moves, it passes through alternating nulls and peaks created by multipath propagation. The signal rapidly cuts in and out, sounding like someone talking from behind a picket fence. It's one of the signature sounds of mobile VHF communication.

Multipath propagation also has a significant impact on data transmissions. When copies of a signal arrive at different times via different paths, they create inter-symbol interference, which increases error rates. Digital modes designed for multipath conditions can mitigate this, but the fundamental effect is more errors in your data.

Irregular fading of signals propagated by the ionosphere happens for a similar reason — signals take multiple paths through the ionosphere and arrive at slightly different times and phases. When these signals combine randomly, the signal strength fluctuates unpredictably.

## Polarization

Polarization is defined by the orientation of the electric field of a radio wave. If the electric field oscillates vertically, the wave is vertically polarized. If horizontally, it's horizontally polarized. The magnetic field is always perpendicular to the electric field, but it's the electric field that defines polarization.

For long-distance CW and SSB contacts on VHF and UHF, horizontal polarization is the standard. Vertical polarization is used for FM. This convention exists because horizontal antennas like Yagis tend to pick up less man-made noise and are standard for directional weak-signal work.

The effect of antenna cross-polarization over a line-of-sight VHF or UHF path is that received signal strength is reduced — potentially by 20 decibels or more for a 90-degree mismatch. This is why both stations should use the same polarization. Cross-polarization won't invert sidebands or create echoes; it just weakens the signal.

An interesting exception happens with ionospheric propagation. The ionosphere rotates signal polarization through a process called Faraday rotation, making the arriving signal elliptically polarized. Because of this, either vertically or horizontally polarized antennas may be used for transmission or reception on ionospheric paths. The polarization mismatch penalty is less severe because the signal has components in both planes.

## Signal Absorption and Weather Effects

Vegetation absorbs signals, leading to poor reception of weak signals at UHF and microwave frequencies. The water content in leaves is particularly effective at soaking up these higher frequencies. This is why signals degrade when passing through wooded areas — absorption is the key word.

Weather has different effects depending on frequency. At microwave frequencies, precipitation — rain, snow, and other moisture — absorbs and scatters signals, reducing range. This rain fade effect increases with frequency and becomes significant above about 10 gigahertz. However, at lower frequencies like the 10 meter and 6 meter bands, fog and rain have very little effect. The wavelengths at those frequencies are long enough that weather just doesn't matter.

## Signal Path Techniques

When using a directional antenna and buildings or obstructions are blocking your direct line of sight to a repeater, you can try to find a path that reflects signals to the repeater. Aim your antenna at a reflective surface like a building, hillside, or water tower to bounce your signal around the obstruction. This is intentional use of signal reflection. Increasing your antenna's SWR would make things worse, not better.

Knife-edge diffraction is another way signals can travel beyond obstructions. When a signal passes over a sharp obstacle like a mountain ridge or building edge, it bends around it, similar to how ocean waves bend around a breakwater. This effect can allow communications when there's no direct line of sight.

## Electromagnetic Wave Properties

A radio wave is made up of two components: an electric field and a magnetic field. These two fields are always at right angles to each other and both perpendicular to the direction of travel. This is fundamental electromagnetic theory.

All radio waves travel at the speed of light in free space — approximately 300 million meters per second, or 300,000,000 meters per second. Every type of electromagnetic radiation, whether radio, light, or X-rays, travels at the same speed in a vacuum regardless of frequency. This means all radio frequencies travel at the same velocity in free space — a 2 meter VHF signal moves at exactly the same speed as a 10 meter HF signal or a 70 centimeter UHF signal. Frequency affects wavelength, not velocity.

Wavelength and frequency have an inverse relationship — as frequency increases, wavelength gets shorter. More cycles per second means each cycle takes up less physical space. The formula for converting frequency to wavelength is simple: wavelength in meters equals 300 divided by frequency in megahertz. This is one of the most important formulas to know.

Let's put that formula to work. The 2 meter band is at 146 megahertz. Divide 300 by 146 and you get about 2.05 meters — hence the name "2 meter band." The 70 centimeter band is at 440 megahertz — 300 divided by 440 gives about 0.68 meters, or 68 centimeters. Amateur bands are identified by their approximate wavelength, which is why we say "2 meters" or "70 centimeters" instead of using channel numbers or letter designators.

## Frequency Bands

The radio spectrum is divided into named bands, and three of them come up frequently on the exam. HF, or High Frequency, covers 3 to 30 megahertz. This is the classic shortwave range where long-distance ionospheric propagation happens. VHF, or Very High Frequency, covers 30 to 300 megahertz. This includes the 6 meter, 2 meter, and 1.25 meter amateur bands. UHF, or Ultra High Frequency, covers 300 to 3000 megahertz. This includes the 70 centimeter, 33 centimeter, and 23 centimeter amateur bands. Notice each range spans a factor of 10, and UHF starts right where VHF ends at 300 megahertz.

## Ionospheric Propagation

The ionosphere is the region of the atmosphere that can reflect HF radio waves. Located between about 60 and 600 kilometers altitude, it contains ionized gases that can refract radio waves back to Earth, enabling long-distance communication.

HF communication's big advantage compared to VHF and higher frequencies is that long-distance ionospheric propagation is far more common on HF. Signals can bounce off the ionosphere for thousands of miles. VHF and UHF are mostly limited to line-of-sight. HF does have more atmospheric noise and static, and HF antennas are larger, not smaller.

Simplex UHF signals are rarely heard beyond their radio horizon because UHF frequencies are generally too high to be refracted by the ionosphere — they pass right through it into space. There's no FCC distance limit involved, and the D region absorbs HF, not UHF.

The radio horizon for VHF and UHF signals extends slightly beyond the visual horizon because the atmosphere refracts radio waves slightly downward. This bending allows signals to follow Earth's curvature a bit farther than you can see — roughly 15 percent beyond the optical horizon. Radio waves do not travel faster than the speed of light.

## Sporadic E and F Region Propagation

Sporadic E propagation occurs when dense patches of ionization form in the E layer of the ionosphere. These patches can reflect signals from the 10 meter, 6 meter, and sometimes even the 2 meter bands over long distances. It's called "sporadic" because it's unpredictable, but when it happens, it can produce remarkably strong signals from beyond the normal radio horizon.

During the peak of the sunspot cycle, the F region of the ionosphere becomes ionized enough to refract signals up to about 50 megahertz, enabling long-distance propagation on the 6 meter and 10 meter bands. UHF bands like 70 centimeters and 23 centimeters are too high in frequency to be refracted even during solar maximum.

The best time for long-distance 10 meter band propagation via the F region is from dawn to shortly after sunset during periods of high sunspot activity. You need both strong solar ionization, which happens during daytime, and high sunspot activity to create enough F-region ionization for the 10 meter band to open up.

## Tropospheric Ducting

Tropospheric ducting is responsible for allowing over-the-horizon VHF and UHF communications to ranges of approximately 300 miles on a regular basis. It occurs when temperature inversions in the atmosphere — where warm air sits on top of cool air — create a boundary that acts like a waveguide, trapping and channeling signals well beyond the normal horizon. Sunspots and solar activity affect the ionosphere, not the troposphere.

## Other Propagation Modes

VHF signals received via auroral backscatter are distorted, with a characteristic raspy sound. The aurora borealis acts as an irregular, moving reflective surface that causes significant distortion. CW is often the only usable mode because voice becomes too garbled by the raspy distortion.

The 6 meter band is best suited for communicating via meteor scatter. The ionized trails left by meteors effectively reflect signals at 50 megahertz. Higher frequencies don't scatter as well from meteor trails, and lower frequencies don't need the meteor trail to propagate.
