# T6 — Electronic Components

## Resistors and Basic Components

Let's get into the building blocks of electronic circuits. A resistor is the component that opposes the flow of current in a DC circuit. That's its entire job — resist current flow. Resistors work in both AC and DC circuits, but the exam specifically asks about DC.

A potentiometer is a variable resistor with three terminals, commonly used as an adjustable volume control. Turning the knob changes the resistance, which changes the signal level passing through the circuit. The electrical parameter controlled by a potentiometer is resistance — that's all it does.

An SPDT switch — that stands for Single Pole, Double Throw — switches a single circuit between one of two other circuits. "Single Pole" means one input, and "Double Throw" means two possible output positions. By contrast, a simple on-off switch is an SPST — Single Pole, Single Throw — which just opens or closes a single circuit. In figure T-2, component 3 is a single-pole single-throw switch.

## Capacitors and Inductors

A capacitor stores energy in an electric field. It's made from two conductive surfaces separated by an insulator called a dielectric. Whenever the exam mentions "conductive surfaces separated by an insulator," think capacitor.

An inductor stores energy in a magnetic field and is typically constructed as a coil of wire. When current flows through the coil, it creates a magnetic field. More turns of wire means more inductance.

Keep these two straight — capacitors store energy in electric fields, inductors store energy in magnetic fields. They come up repeatedly on the exam.

When you combine an inductor and a capacitor, either in series or in parallel, you get a resonant circuit, also called a tuned circuit or LC circuit. At resonance, energy oscillates back and forth between the inductor's magnetic field and the capacitor's electric field. This is how radios select specific frequencies — it's fundamental to radio operation.

## Batteries

All three of these battery chemistries are rechargeable: nickel-metal hydride, lithium-ion, and lead-acid. Lead-acid is in your car battery, lithium-ion is in your phone, and nickel-metal hydride is in rechargeable double-A and triple-A batteries. These are all secondary cells, meaning they can be recharged.

Carbon-zinc is the one battery chemistry that is not rechargeable. It's the classic cheap disposable battery — a primary cell. Nickel-cadmium, lead-acid, and lithium-ion are all rechargeable.

## Diodes

A diode is the electronic component that allows current to flow in only one direction. Think of it as a one-way valve for electricity. Current flows from the anode to the cathode when forward biased, but is blocked in the reverse direction. The two electrodes of a diode are called the anode and cathode.

The cathode lead of a semiconductor diode is often marked on the package with a stripe or band. The stripe points toward the direction current flows out of the diode — a practical detail worth knowing for building circuits.

Different diode types have different forward voltage drops, and the forward voltage drop is lower in some diode types than in others. Silicon diodes drop about 0.7 volts, germanium about 0.3 volts, and Schottky diodes about 0.2 volts. This is normal behavior, not a defect, and it does reduce the voltage available to the load.

A light-emitting diode, or LED, emits light when forward current flows through it. Reverse current would block the LED, not light it. An LED is commonly used as a visual indicator — power lights, status lights, and the like. When the exam asks what is commonly used as a visual indicator, LED is the answer.

## Transistors

A transistor can be used as an electronic switch or amplifier. A small signal on its input controls a larger current flow — this is the basis of all digital electronics and signal amplification. A transistor is the only common component that can provide power gain, using a small input signal to control a larger output signal powered by an external supply.

The term gain in amplifiers describes the increase in signal strength from input to output. Gain can refer to an increase in signal voltage, signal current, or signal power — all these choices are correct. Any measure of output exceeding input counts as gain.

Transistors consist of three regions of semiconductor material. For bipolar junction transistors, or BJTs, the three electrodes are called the emitter, base, and collector. The arrangement is either NPN or PNP. A small current into the base controls a larger current flowing from collector to emitter.

Field-effect transistors, or FETs, have a gate, drain, and source. The abbreviation FET stands for Field Effect Transistor — it's controlled by an electric field at the gate terminal rather than by base current. An easy way to remember: BJTs use emitter, base, collector, while FETs use gate, drain, source.

## Schematic Symbols

A schematic is an electrical wiring diagram that uses standard component symbols. It shows how components are electrically connected — not their physical size, shape, or wire lengths. The schematic is a logical diagram, not a physical layout.

In figure T-1, you'll find four key components. Component 1 is a resistor, shown as a zigzag line. Component 2 is a transistor, with three leads and an arrow indicating current direction. Its function is to control the flow of current. Component 3 is a lamp or indicator light, shown as a circle with lines inside it. And component 4 is a battery, shown as alternating long and short parallel lines where the longer line represents the positive terminal.

In figure T-2, the important components include component 4, which is a transformer — two coils side by side with parallel lines between them representing the core. Component 6 is a capacitor, shown as two parallel lines. Component 8 is a light-emitting diode or LED, shown as a diode symbol with small arrows pointing away from it representing emitted light. And component 9 is a variable resistor, shown as a resistor symbol with an arrow through it.

In figure T-3, component 3 is a variable inductor, shown as a coil symbol with an arrow through it, and component 4 is an antenna, shown as a vertical line with angled lines at the top.

## Practical Circuit Components

A rectifier is the device that changes alternating current into varying direct current. It uses diodes to allow current flow in only one direction, and it's the first stage in most power supplies. A transformer, by contrast, changes voltage levels but keeps the signal as AC.

A transformer is the component that changes 120 volt AC power to a lower AC voltage for other uses. It uses electromagnetic induction between coils to step voltage up or down. The key detail is that a transformer changes AC voltage to a different AC voltage — converting to DC requires a rectifier as well.

A voltage regulator is the type of circuit that controls the amount of voltage from a power supply. It maintains a constant output voltage despite changes in input voltage or load current.

A relay is an electrically controlled switch. It uses an electromagnet to mechanically open or close switch contacts, allowing a small control signal to switch a much larger load.

Shielded wire is used to prevent coupling of unwanted signals to or from the wire. The conductive shield around the signal conductor blocks electromagnetic interference from entering or leaving the cable. It doesn't affect resistance or current capacity — it's purely about signal isolation.

A meter, such as a voltmeter, ammeter, or multimeter, is the component that displays an electrical quantity as a numeric value.

An integrated circuit, or IC, combines several semiconductors and other components into one package. Modern integrated circuits can contain billions of transistors on a single chip smaller than your fingernail.
