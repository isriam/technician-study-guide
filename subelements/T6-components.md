# T6 — Electronic and Electrical Components
*4 questions on the exam from a pool of 47*

## Group T6A — Basic Electronic Components and Their Functions

### T6A01
**What electrical component opposes the flow of current in a DC circuit?**
- A) Inductor
- **B) Resistor** ✅
- C) Inverter
- D) Transformer

> A resistor's entire purpose is to oppose (resist) the flow of current. The key word is "DC circuit" — inductors oppose changes in current in AC circuits, but resistors oppose current flow in both AC and DC. Remember: Resistor = Resistance = opposes current.

### T6A02
**What type of component is often used as an adjustable volume control?**
- A) Fixed resistor
- B) Power resistor
- **C) Potentiometer** ✅
- D) Transformer

> A potentiometer ("pot") is a variable resistor with three terminals, commonly used as a volume knob. Turning the knob changes the resistance, which changes the signal level. Don't confuse it with a fixed resistor — volume controls need to be adjustable.

### T6A03
**What electrical parameter is controlled by a potentiometer?**
- A) Inductance
- **B) Resistance** ✅
- C) Capacitance
- D) Field strength

> A potentiometer is a type of variable resistor. It controls resistance — that's all it does. The name comes from "potential" (voltage) and "meter" (measure), since varying resistance allows you to vary voltage in a circuit.

### T6A04
**What electrical component stores energy in an electric field?**
- A) Varistor
- **B) Capacitor** ✅
- C) Inductor
- D) Diode

> Capacitors store energy in an electric field between their plates. Key memory trick: Capacitor = electric field, Inductor = magnetic field. These two are often confused on the exam — keep them straight.

### T6A05
**What type of electrical component consists of conductive surfaces separated by an insulator?**
- A) Resistor
- B) Potentiometer
- C) Oscillator
- **D) Capacitor** ✅

> A capacitor is built from two conductive plates separated by an insulator (called a dielectric). This physical construction is what allows it to store energy in an electric field. If you see "conductive surfaces + insulator" think capacitor.

### T6A06
**What type of electrical component stores energy in a magnetic field?**
- A) Varistor
- B) Capacitor
- **C) Inductor** ✅
- D) Diode

> Inductors store energy in a magnetic field created by current flowing through their coil of wire. Remember the pair: Capacitor = electric field, Inductor = magnetic field.

### T6A07
**What electrical component is typically constructed as a coil of wire?**
- A) Switch
- B) Capacitor
- C) Diode
- **D) Inductor** ✅

> An inductor is a coil of wire. When current flows through the coil, it creates a magnetic field that stores energy. The coiled shape is what gives it its inductance — more turns = more inductance.

### T6A08
**What is the function of an SPDT switch?**
- A) A single circuit is opened or closed
- B) Two circuits are opened or closed
- **C) A single circuit is switched between one of two other circuits** ✅
- D) Two circuits are each switched between one of two other circuits

> SPDT = Single Pole, Double Throw. "Single Pole" means one input circuit. "Double Throw" means two possible output positions. So it switches one circuit between two paths. An SPST (Single Pole, Single Throw) is the simple on/off version — answer A.

### T6A09
**What electrical component is used to protect other circuit components from current overloads?**
- **A) Fuse** ✅
- B) Thyratron
- C) Varactor
- D) All these choices are correct

> A fuse is a sacrificial device that melts and opens the circuit when too much current flows, protecting other components from damage. Thyratrons are gas-filled tubes and varactors are variable-capacitance diodes — neither is a protection device.

### T6A10
**Which of the following battery chemistries is rechargeable?**
- A) Nickel-metal hydride
- B) Lithium-ion
- C) Lead-acid
- **D) All these choices are correct** ✅

> NiMH, Li-ion, and lead-acid are all rechargeable battery chemistries. Lead-acid is in your car, Li-ion is in your phone, and NiMH is in rechargeable AA/AAA batteries. All three are secondary (rechargeable) cells.

### T6A11
**Which of the following battery chemistries is not rechargeable?**
- A) Nickel-cadmium
- **B) Carbon-zinc** ✅
- C) Lead-acid
- D) Lithium-ion

> Carbon-zinc is a primary (non-rechargeable) battery — the classic cheap disposable battery. NiCd, lead-acid, and Li-ion are all rechargeable. If it sounds old-school and cheap, it's probably disposable.

### T6A12
**What type of switch is represented by component 3 in figure T-2?**
- **A) Single-pole single-throw** ✅
- B) Single-pole double-throw
- C) Double-pole single-throw
- D) Double-pole double-throw

> In figure T-2, component 3 is an SPST switch — the simplest switch type with one input and one output, either open or closed. On the schematic, it appears as a single line that can connect or disconnect two points.

## Group T6B — Semiconductor Components: Diodes, Transistors, and LEDs

### T6B01
**Which is true about forward voltage drop in a diode?**
- **A) It is lower in some diode types than in others** ✅
- B) It is proportional to peak inverse voltage
- C) It indicates that the diode is defective
- D) It has no impact on the voltage delivered to the load

> Different diode types have different forward voltage drops — silicon diodes drop about 0.7V, germanium about 0.3V, and Schottky diodes about 0.2V. A forward voltage drop is normal, not a defect, and it definitely reduces the voltage available to the load.

### T6B02
**What electronic component allows current to flow in only one direction?**
- A) Resistor
- B) Fuse
- **C) Diode** ✅
- D) Driven element

> A diode is a one-way valve for electricity. Current flows from anode to cathode (forward biased) but is blocked in the reverse direction. This is the most fundamental fact about diodes — they're electrical check valves.

### T6B03
**Which of these components can be used as an electronic switch?**
- A) Varistor
- B) Potentiometer
- **C) Transistor** ✅
- D) Thermistor

> Transistors can act as electronic switches — a small signal on the base (BJT) or gate (FET) controls a larger current flow. This is the basis of all digital electronics. Varistors protect against voltage spikes, thermistors sense temperature — neither switches.

### T6B04
**Which of the following components can consist of three regions of semiconductor material?**
- A) Alternator
- **B) Transistor** ✅
- C) Triode
- D) Pentagrid converter

> A transistor has three semiconductor regions — either NPN or PNP for bipolar junction transistors. Don't be tricked by "triode" — that's a vacuum tube, not a semiconductor. The three regions correspond to the emitter, base, and collector.

### T6B05
**What type of transistor has a gate, drain, and source?**
- A) Varistor
- **B) Field-effect** ✅
- C) Tesla-effect
- D) Bipolar junction

> FETs (Field-Effect Transistors) have gate, drain, and source terminals. BJTs have emitter, base, and collector. Memory trick: FET = Field-effect = Gate/Drain/Source. There's no such thing as a "Tesla-effect" transistor.

### T6B06
**How is the cathode lead of a semiconductor diode often marked on the package?**
- A) With the word "cathode"
- **B) With a stripe** ✅
- C) With the letter C
- D) With the letter K

> The cathode of a diode is marked with a stripe (band) on the component body. The stripe points toward the direction current flows OUT of the diode. This is one of the most practical facts to know for building circuits.

### T6B07
**What causes a light-emitting diode (LED) to emit light?**
- **A) Forward DC current** ✅
- B) Reverse DC current
- C) Capacitively-coupled RF signal
- D) Inductively-coupled RF signal

> An LED emits light when forward DC current flows through it (anode to cathode). Reverse current would block the LED, not light it. LEDs are diodes — they only work in the forward direction.

### T6B08
**What does the abbreviation FET stand for?**
- A) Frequency Emission Transmitter
- B) Fast Electron Transistor
- C) Free Electron Transmitter
- **D) Field Effect Transistor** ✅

> FET = Field Effect Transistor. It's a type of transistor controlled by an electric field at the gate terminal. The other options are made-up terms designed to trip you up.

### T6B09
**What are the names for the electrodes of a diode?**
- A) Plus and minus
- B) Source and drain
- **C) Anode and cathode** ✅
- D) Gate and base

> Diode electrodes are the anode (+) and cathode (−). Current flows from anode to cathode. "Source and drain" belong to FETs, "gate and base" mix FET and BJT terms. Plus and minus are battery terminals, not diode electrodes.

### T6B10
**Which of the following can provide power gain?**
- A) Transformer
- **B) Transistor** ✅
- C) Reactor
- D) Resistor

> Only a transistor provides power gain — it uses a small input signal to control a larger output signal powered by an external supply. Transformers can step up voltage but don't add power (they conserve it). Resistors only dissipate power.

### T6B11
**What is the term that describes a device's ability to amplify a signal?**
- **A) Gain** ✅
- B) Forward resistance
- C) Forward voltage drop
- D) On resistance

> Gain is the measure of amplification — how much bigger the output signal is compared to the input. Forward resistance and forward voltage drop are diode characteristics, and on resistance is a FET parameter.

### T6B12
**What are the names of the electrodes of a bipolar junction transistor?**
- A) Signal, bias, power
- **B) Emitter, base, collector** ✅
- C) Input, output, supply
- D) Pole one, pole two, output

> BJT electrodes are emitter, base, and collector. A small current into the base controls a larger current flowing from collector to emitter. Compare with FET terminals: gate, drain, source.

## Group T6C — Circuit Diagrams and Schematic Symbols

### T6C01
**What is the name of an electrical wiring diagram that uses standard component symbols?**
- A) Bill of materials
- B) Connector pinout
- **C) Schematic** ✅
- D) Flow chart

> A schematic is a wiring diagram using standardized symbols for components like resistors, capacitors, and transistors. A bill of materials lists parts, a connector pinout shows pin assignments, and a flow chart shows process logic.

### T6C02
**What is component 1 in figure T-1?**
- **A) Resistor** ✅
- B) Transistor
- C) Battery
- D) Connector

> In figure T-1, component 1 is a resistor, shown as a zigzag line (or rectangle in IEC style). This is one of the most basic schematic symbols to recognize.

### T6C03
**What is component 2 in figure T-1?**
- A) Resistor
- **B) Transistor** ✅
- C) Indicator lamp
- D) Connector

> In figure T-1, component 2 is a transistor, typically shown with three leads and an arrow indicating current direction. The transistor symbol has a distinctive shape with an angled emitter lead.

### T6C04
**What is component 3 in figure T-1?**
- A) Resistor
- B) Transistor
- **C) Lamp** ✅
- D) Ground symbol

> In figure T-1, component 3 is a lamp (indicator light), typically shown as a circle with an X or filament lines inside it.

### T6C05
**What is component 4 in figure T-1?**
- A) Resistor
- B) Transistor
- C) Ground symbol
- **D) Battery** ✅

> In figure T-1, component 4 is a battery, shown as alternating long and short parallel lines. The longer line represents the positive terminal.

### T6C06
**What is component 6 in figure T-2?**
- A) Resistor
- **B) Capacitor** ✅
- C) Regulator IC
- D) Transistor

> In figure T-2, component 6 is a capacitor, shown as two parallel lines (one may be curved for electrolytic types). This is one of the most common schematic symbols.

### T6C07
**What is component 8 in figure T-2?**
- A) Resistor
- B) Inductor
- C) Regulator IC
- **D) Light emitting diode** ✅

> In figure T-2, component 8 is an LED, shown as a diode symbol (triangle with a bar) with small arrows pointing away from it, representing emitted light.

### T6C08
**What is component 9 in figure T-2?**
- A) Variable capacitor
- B) Variable inductor
- **C) Variable resistor** ✅
- D) Variable transformer

> In figure T-2, component 9 is a variable resistor, shown as a resistor symbol with an arrow through it or across it, indicating adjustability.

### T6C09
**What is component 4 in figure T-2?**
- A) Variable inductor
- B) Double-pole switch
- C) Potentiometer
- **D) Transformer** ✅

> In figure T-2, component 4 is a transformer, shown as two coils (inductors) side by side, often with parallel lines between them representing the core. Transformers couple energy magnetically between windings.

### T6C10
**What is component 3 in figure T-3?**
- A) Connector
- B) Meter
- C) Variable capacitor
- **D) Variable inductor** ✅

> In figure T-3, component 3 is a variable inductor, shown as a coil symbol with an arrow through it indicating adjustability. Variable inductors are used in tuning circuits.

### T6C11
**What is component 4 in figure T-3?**
- **A) Antenna** ✅
- B) Transmitter
- C) Dummy load
- D) Ground

> In figure T-3, component 4 is an antenna, typically shown as a vertical line with angled lines at the top (like an inverted V or a line with radiating elements). This symbol represents the point where RF energy is radiated.

### T6C12
**Which of the following is accurately represented in electrical schematics?**
- A) Wire lengths
- B) Physical appearance of components
- **C) Component connections** ✅
- D) All these choices are correct

> Schematics show how components are electrically connected — not their physical size, shape, or wire lengths. The schematic is a logical diagram of the circuit, not a physical layout drawing.

## Group T6D — Practical Circuit Components and Their Functions

### T6D01
**Which of the following devices or circuits changes an alternating current into a varying direct current signal?**
- A) Transformer
- **B) Rectifier** ✅
- C) Amplifier
- D) Reflector

> A rectifier converts AC to DC using diodes to allow current flow in only one direction. This is the first stage in most power supplies. A transformer changes voltage levels but keeps the signal as AC.

### T6D02
**What is a relay?**
- **A) An electrically-controlled switch** ✅
- B) A current controlled amplifier
- C) An inverting amplifier
- D) A pass transistor

> A relay uses an electromagnet to mechanically open or close switch contacts. It's essentially a switch controlled by electricity rather than by hand — allowing a small control signal to switch a larger load.

### T6D03
**Which of the following is a reason to use shielded wire?**
- A) To decrease the resistance of DC power connections
- B) To increase the current carrying capability of the wire
- **C) To prevent coupling of unwanted signals to or from the wire** ✅
- D) To couple the wire to other signals

> Shielded wire has a conductive shield around the signal conductor that blocks electromagnetic interference (EMI) from entering or leaving the cable. It doesn't affect resistance or current capacity — it's all about signal isolation.

### T6D04
**Which of the following displays an electrical quantity as a numeric value?**
- A) Potentiometer
- B) Transistor
- **C) Meter** ✅
- D) Relay

> A meter (voltmeter, ammeter, multimeter) displays electrical measurements as numeric values. Potentiometers adjust resistance, transistors amplify, and relays switch — none of them display readings.

### T6D05
**What type of circuit controls the amount of voltage from a power supply?**
- **A) Regulator** ✅
- B) Oscillator
- C) Filter
- D) Phase inverter

> A voltage regulator maintains a constant output voltage despite changes in input voltage or load. Oscillators generate signals, filters pass or block frequencies, and phase inverters flip signal polarity.

### T6D06
**What component changes 120 V AC power to a lower AC voltage for other uses?**
- A) Variable capacitor
- **B) Transformer** ✅
- C) Transistor
- D) Diode

> A transformer uses electromagnetic induction between coils to step voltage up or down while keeping it AC. Key detail: a transformer changes AC voltage to a different AC voltage — it doesn't convert to DC (that requires a rectifier).

### T6D07
**Which of the following is commonly used as a visual indicator?**
- **A) LED** ✅
- B) FET
- C) Zener diode
- D) Bipolar transistor

> LEDs (Light Emitting Diodes) produce light and are commonly used as visual indicators — power lights, status indicators, etc. FETs and bipolar transistors are amplifiers/switches, and Zener diodes regulate voltage.

### T6D08
**Which of the following is combined with an inductor to make a resonant circuit?**
- A) Resistor
- B) Zener diode
- C) Potentiometer
- **D) Capacitor** ✅

> An inductor and capacitor together form a resonant (tuned) circuit, also called an LC circuit or tank circuit. At resonance, energy oscillates between the inductor's magnetic field and the capacitor's electric field. This is fundamental to radio frequency selection.

### T6D09
**What is the name of a device that combines several semiconductors and other components into one package?**
- A) Transducer
- B) Multi-pole relay
- **C) Integrated circuit** ✅
- D) Transformer

> An integrated circuit (IC) packs multiple transistors, resistors, capacitors, and other components onto a single semiconductor chip. Modern ICs can contain billions of transistors in a package smaller than your fingernail.

### T6D10
**What is the function of component 2 in figure T-1?**
- A) Give off light when current flows through it
- B) Supply electrical energy
- **C) Control the flow of current** ✅
- D) Convert electrical energy into radio waves

> Component 2 in figure T-1 is a transistor, and its function is to control the flow of current. A small signal at the base controls a larger current through the collector-emitter path — this is how transistors amplify and switch.

### T6D11
**Which of the following is a resonant or tuned circuit?**
- **A) An inductor and a capacitor in series or parallel** ✅
- B) A linear voltage regulator
- C) A resistor circuit used for reducing standing wave ratio
- D) A circuit designed to provide high-fidelity audio

> A resonant (tuned) circuit consists of an inductor (L) and capacitor (C) connected in series or parallel. The LC combination resonates at a specific frequency determined by the component values. This is how radios select specific frequencies.
