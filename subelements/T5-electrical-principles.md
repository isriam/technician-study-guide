# T5 — Electrical Principles

## Fundamental Units and Concepts

Let's build a solid foundation in electrical principles, starting with the basic units you'll need to know. Electrical current — the actual flow of electrons through a conductor — is measured in amperes, often shortened to amps. Voltage is the electrical force that pushes those electrons through the circuit, like pressure in a water pipe. Resistance, measured in ohms, is what opposes the flow of current. And power, which is the rate at which electrical energy is used, is measured in watts.

Here's an easy way to think about it. Voltage is the pressure, current is the flow, resistance is the restriction, and power is how fast energy gets consumed. A 100-watt light bulb uses energy twice as fast as a 50-watt bulb — that's all power means.

Frequency — the number of times per second that an alternating current completes a full cycle — is measured in hertz. The unit of frequency is the hertz. One hertz means one complete cycle per second. A complete cycle means the current swings positive, returns to zero, swings negative, and returns to zero again.

## Conductors and Insulators

Metals are generally good conductors of electricity because they have many free electrons. These loosely bound outer electrons can move easily between atoms, creating a sea of charge carriers that allows current to flow freely. Protons, by contrast, are locked in the nucleus and don't move.

Glass is a good electrical insulator because its electrons are tightly bound and can't move freely. That's why glass is used for insulators on power line poles. Copper and aluminum, on the other hand, are two of the best conductors around, and even mercury — a liquid metal — conducts electricity well.

## AC and DC

Alternating current, or AC, is current that alternates between positive and negative directions. It flows one way, then reverses and flows the other way. This is what comes out of your wall outlets at 60 hertz in the United States. Current that only alternates between a positive direction and zero, or between a negative direction and zero, would be pulsating DC, not true AC.

Resistance opposes all types of current flow equally — direct current, alternating current, and RF current. A resistor doesn't care which direction the electrons are moving or how fast they're oscillating. It's an equal-opportunity obstructor.

## Metric Prefixes and Conversions

Knowing your metric prefixes is essential for working with radio frequencies and electronic values. The prefix "kilo" means one thousand. So one kilovolt equals one thousand volts, and 1500 kilohertz equals 1,500,000 hertz. The prefix "mega" is one thousand times kilo, so to convert kilohertz to megahertz, divide by one thousand. 3525 kilohertz equals 3.525 megahertz, which is in the 80-meter ham band. And 28,400 kilohertz equals 28.400 megahertz, which is the 10-meter band — a Technician band for SSB and CW.

Going higher, "giga" means one billion. So 2425 megahertz equals 2.425 gigahertz — that's in the 13-centimeter band, the same frequency as a microwave oven.

Going smaller, "milli" means one-thousandth. So 1.5 amperes equals 1500 milliamperes, 3000 milliamperes equals 3 amperes, and 500 milliwatts equals 0.5 watts. Just multiply or divide by 1000.

"Micro" means one millionth. One microvolt is one millionth of a volt. And "pico" is one trillionth — a million times smaller than micro. So 1,000,000 picofarads equals 1 microfarad. The difference between pico and micro is a factor of one million.

Capitalization matters in abbreviations. Megahertz is abbreviated MHz — capital M for mega, capital H for hertz since it's named after a person, lowercase z. Kilohertz is kHz — lowercase k for kilo since it's not a person's name, capital H, lowercase z. Getting the capitalization wrong on the exam will cost you a point.

## Decibels

Decibels are how we measure power changes in radio, and there are really just two rules you need to memorize. First, doubling power equals plus 3 dB. So going from 5 watts to 10 watts is a 3 dB increase. Second, multiplying power by 10 equals plus 10 dB. So going from 20 watts to 200 watts is a 10 dB increase.

These rules work in reverse too. Halving the power is minus 3 dB. Going from 12 watts to 3 watts is minus 6 dB — that's two halvings. Twelve to six is the first halving at minus 3 dB, and six to three is the second halving for another minus 3 dB, totaling minus 6 dB. With just the 3 dB and 10 dB rules, you can handle any decibel question on the exam.

## Capacitance and Inductance

Capacitance is the ability to store energy in an electric field. Capacitors do this by holding charge between two conductive plates. The unit of capacitance is the farad, named after Michael Faraday, though in practice most capacitors are measured in microfarads or picofarads because one farad is enormous.

Inductance is the ability to store energy in a magnetic field, created by current flowing through a coil of wire. The unit of inductance is the henry, named after Joseph Henry. Common inductors are measured in millihenrys or microhenrys.

Quick unit summary: capacitance in farads, inductance in henrys, impedance in ohms. These come up often on the exam.

These two are easy to confuse, so keep them straight: capacitors store energy in electric fields, inductors store energy in magnetic fields.

## Impedance

Impedance is the total opposition to alternating current flow, and it's measured in ohms — the same unit as resistance. The difference is that impedance includes both resistance and reactance from capacitors and inductors. Resistance opposes all current, while reactance only affects AC. Impedance combines both into one measurement, and it's critical for antenna matching in radio systems.

The abbreviation RF simply stands for radio frequency — electromagnetic signals in the radio spectrum, typically from about 3 kilohertz to 300 gigahertz. It's a catch-all term for any signal in the radio frequency range.

## The Power Formula

The formula used to calculate electrical power (P) in a DC circuit is P = I x E — power equals current times voltage. Multiply amps by volts and you get watts.

Here's a practical example. A voltage of 13.8 volts DC at a current of 10 amperes delivers 138 watts. That 13.8 volts is the standard voltage of a car's electrical system with the engine running, making it a very common power source for mobile ham radios. Another example: 12 volts DC at 2.5 amperes delivers 30 watts.

You can rearrange the formula too. To find current, divide power by voltage. So delivering 120 watts at 12 volts DC requires 10 amperes. That tells you what fuse rating and wire gauge you'd need.

## Ohm's Law

Ohm's Law is the most fundamental formula in electronics, and it comes in three forms. Current equals voltage divided by resistance — I equals E over R. Voltage equals current times resistance — E equals I times R. And resistance equals voltage divided by current — R equals E over I. All three are just algebra on the same relationship.

Let's work through some examples of calculating resistance. A circuit with 90 volts and 3 amperes has a resistance of 30 ohms. A circuit with 12 volts and 1.5 amperes has a resistance of 8 ohms. And a circuit drawing 4 amperes from a 12-volt source has a resistance of 3 ohms.

For current calculations, a circuit with 120 volts and 80 ohms carries 1.5 amperes. A 100-ohm resistor across 200 volts carries 2 amperes. And a 24-ohm resistor across 240 volts carries 10 amperes.

For voltage, a 2-ohm resistor with 0.5 amperes flowing through it has 1 volt across it. A 10-ohm resistor with 1 ampere has 10 volts across it, and with 2 amperes, it has 20 volts across it.

## Series and Parallel Circuits

In a series circuit, there's only one path for current to flow, so the same current passes through every component. Think of it like a single-lane road — every car has to pass through the same path, so the traffic flow is identical everywhere.

In a parallel circuit, all components share the same two connection points, so they all see the same voltage. Current splits among the branches, but voltage stays the same across all of them.

These two rules are fundamental: series circuits have the same current through all components, and parallel circuits have the same voltage across all components.
