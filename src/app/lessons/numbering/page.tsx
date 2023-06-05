import AnimatedCard from "../AnimatedCard";
import AudioCard from "../Audio";
import TimelineContainer, { TimelineCard } from "../Container";
import QuizLink from "../QuizLink";
import TextCard, { Card, ImageCard } from "../StaticCard";
import AnimatedGraphic from "./AnimatedGraphic";

export default function HistoryOfCalc() {
	return (
		<TimelineContainer title="Alternative Numbering Systems">
			{/* Intro */}
			<TimelineCard>
				<AnimatedCard animationType="Expand_From_Left">
					{/* <AnimatedCard animationType="Fade"> */}
					<TextCard
						header="What is a numbering system?"
						body="A numbering system is the way you write down numbers using digits. Most people are only familiar with decimal, where digits are 0-9, but there are many more numbering systems"
					/>
				</AnimatedCard>
				<div className="tallAbsolute">
					<AnimatedCard animationType="Slide_From_Left" delay={2}>
						<AudioCard
							src="/most_common_spongebob.wav"
							label="Most Common Numbering Systems"
						/>
					</AnimatedCard>
				</div>
				{/* </AnimatedCard> */}
				<AnimatedCard animationType="Slide_From_Right" delay={1}>
					{/* <AnimatedCard animationType="Fade"> */}
					<div className="xl:w-[40vw]">
						<ImageCard
							src="/common_numbering.png"
							alt="Common Numbering Systems"
							fit="contain"
							h={"h-[40vh]"}
							xl_h={"xl:h-[35em]"}
						/>
					</div>
				</AnimatedCard>
				{/* </AnimatedCard> */}
			</TimelineCard>
			{/* Base 10 */}
			<TimelineCard reverse>
				<div>
					<AnimatedCard animationType="Expand_From_Left">
						<TextCard
							header="Decimal Numbering"
							body="The most common numbering system is decimal, or base 10. 
						It is regarded as the easiest to use because we have a visual representation with our 10 fingers.
						Each decimal place represents a power of 10"
						/>
					</AnimatedCard>
					<AnimatedCard animationType="Slide_From_Right">
						<Card header="Applications of Base 10">
							<ul className="list-disc list-inside md:text-2xl text-md">
								<li>Most day-to-day math and arithmetic</li>
								<li>Measurements</li>
								<li>Currency</li>
								<li>Statistics</li>
								<li>
									Communications (phone numbers, postal codes,
									ID numbers, etc)
								</li>
							</ul>
						</Card>
					</AnimatedCard>
				</div>
				<div className="tallAbsolute">
					<AnimatedCard animationType="Slide_From_Right" delay={1}>
						<AudioCard
							src="/base10_patrick.wav"
							label="Decimal Numbering"
						/>
					</AnimatedCard>
					<AnimatedCard animationType="Slide_From_Right" delay={3}>
						<AudioCard
							src="/rogan_applications_base10.mp3"
							label="Applications of Base 10"
						/>
					</AnimatedCard>
				</div>
				<AnimatedCard animationType="Slide_From_Left">
					<div className="xl:w-[45vw] w-[90vw]">
						<ImageCard
							src="/fingers.jpg"
							alt="hand"
							xl_h="xl:h-[40em]"
							h="h-[30vh]"
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>
			{/* Base 2 */}
			<TimelineCard>
				<div className="relative xl:flex xl:flex-row xl:gap-6">
					<AnimatedCard animationType="Expand_From_Left">
						<Card header="Binary (Base 2) Numbering">
							<p className="2xl:text-2xl sm:text-lg text-sm transition-all ease-in-out">
								{" "}
								Binary is the language computers understand and
								has many applications with computers
							</p>
							<ul className="list-disc list-inside 2xl:text-2xl sm:text-lg text-sm transition-all ease-in-out">
								<li>Binary only has 2 digits, 0 or 1</li>
								<li>
									Each digit represents a power of 2 (1 in
									binary is 2<sup>0</sup>, 10 is 2<sup>1</sup>
									, 100 is 2<sup>2</sup>, etc.)
								</li>
								<li>
									On the Ti-Nspire and in many programming
									languages (such as JavaScript), binary
									numbers are prefixed with 0b, for example
									0b10 means the binary number 10, which is 2
									in decimal
								</li>
								<li>
									One binary digit (0 or 1) is called a bit,
									and 8 bits is called a byte
								</li>
								<li>
									Individual bits often represent Boolean
									(true/false) values (0 is false and 1 is
									true)
								</li>
							</ul>
						</Card>
					</AnimatedCard>
					<AnimatedCard animationType="Expand_From_Right">
						<Card header="Applications of Binary">
							<p className="2xl:text-2xl text-lg transition-all ease-in-out">
								Binary has many uses, primarly with computers.
								In addition to numbers, binary can be used to
								encode virtually any other information through
								various standards. A few examples are:
							</p>
							<ul className="list-disc list-inside 2xl:text-2xl text-lg transition-all ease-in-out">
								<li>Text using ASCII</li>
								<li>Images using varius formats like BMP</li>
								<li>Cryptography</li>
							</ul>
						</Card>
					</AnimatedCard>
					<div className="tallAbsolute tallRight pt-4">
						<AnimatedCard
							animationType="Slide_From_Right"
							delay={1}
						>
							<AudioCard src="" label="Binary Numbering" />
						</AnimatedCard>
						<AnimatedCard
							animationType="Slide_From_Right"
							delay={3}
						>
							<AudioCard src="" label="Applications of Binary" />
							{/* TODO: Generate audio clip */}
						</AnimatedCard>
					</div>
				</div>
				<AnimatedCard animationType="Slide_From_Right">
					<div className="xl:w-[45vw] w-[90vw]">
						<ImageCard
							src="/binarycode.jpg"
							alt="binary"
							xl_h="xl:h-[80vh]"
							h="h-[25vh]"
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>
			{/* Converting to Binary */}
			<TimelineCard reverse>
				<AnimatedCard animationType="Expand_From_Left">
					<Card header="Converting to Binary">
						<ol className="list-inside list-decimal 2xl:text-2xl xl:text-xl text-lg font-bold">
							<li>
								Take number and divide by 2, write down
								remainder
								<p className="xl:text-xl font-normal ml-8">
									<span className="font-semibold">
										Example:
									</span>{" "}
									start with 13, 13/2 = 6 remainder 1
								</p>
							</li>
							<li>
								Take the quotient from the previous step, divide
								by 2 again and record the remainder again
								<p className="xl:text-xl font-normal ml-8">
									<span className="font-semibold">
										Example:
									</span>{" "}
									6/2 = 3 remainder 0, so we're left with
									remainders of [1,0]
								</p>
							</li>
							<li>
								Repeat previous step until quotient is 0, adding
								remainders into list
								<p className="xl:text-xl font-normal ml-8">
									<span className="font-semibold">
										Example:
									</span>{" "}
									3/2 = 1 remainder 1, remainders = [1,0,1]
								</p>
								<p className="xl:text-xl font-normal ml-8">
									1/2 = 0 remainder 1, remainders = [1,0,1,1]
								</p>
							</li>
							<li>
								Reverse the list of remainders to get the number
								in Binary
								<p className="xl:text-xl font-normal ml-8">
									<span className="font-semibold">
										Example:
									</span>{" "}
									[1,0,1,1] becomes 1101, so 13 in binary is
									0b1101
								</p>
							</li>
						</ol>
					</Card>
				</AnimatedCard>
				<div className="tallAbsolute tallRight">
					<AnimatedCard animationType="Slide_From_Right">
						<AudioCard src="" label="Converting to Binary" />
					</AnimatedCard>
				</div>
				<div>
					<AnimatedCard animationType="Slide_From_Right">
						<Card header="Reading Binary">
							<p className="text-xl">
								In binary, each bit is a power of 2, starting
								with 2<sup>0</sup> with the first digit on the
								right. To read a binary number, look for all the
								bits that are 1s. Count how many spaces they are
								from the right, then raise 2 to that power. Add
								all the powers together to get the decimal
								number.
							</p>
							<p className="text-xl ml-8">
								<span className="font-bold">Example:</span>{" "}
								0b1010 = 2<sup>1</sup> + 2<sup>3</sup> = 2 + 8 =
								10
							</p>
						</Card>
					</AnimatedCard>
					<AnimatedCard animationType="Slide_From_Left">
						<div className="xl:w-[70vh] xl:max-w-[60vw] xl:h-[65vh] transition-all ease-in-out text-center">
							<Card header="">
								<AnimatedGraphic />
							</Card>
						</div>
					</AnimatedCard>
				</div>
			</TimelineCard>
			{/* Base 16 */}
			<TimelineCard>
				<AnimatedCard animationType="Expand_From_Left">
					<Card header="Hexadecimal (Base 16) Numbering">
						<p className="text-xl 2xl:text-2xl">
							Another numbering system commonly used in computer
							science is hexadecimal, or base 16. It is common in
							computer science because one hexadecimal digit can
							represent 4 bits, so an entire byte can be
							represented in just 2 hex digits.
						</p>
						<ul className=" list-disc list-inside 2xl:text-2xl text-lg ">
							<li>There are 16 digits representing 0-15</li>
							<li>
								0-9 are represented with their normal digits,
								and 10-15 are represented with A-F
							</li>
							<li>
								Each digit represents a coefficient times a
								power of 16 starting with 16<sup>0</sup> on the
								right
							</li>
							<li>
								Hexadecimal numbers are usually prefixed to
								indicate they are a hexadecimal. On the
								Ti-Nspire, hexadecimal numbers are prefixed with{" "}
								<code>0h</code>, but in most programming
								languages (like JavaScript, C, or Java) they are
								prefixed with <code>0x</code>
							</li>
							<li>
								<span className="font-bold">Example: </span>{" "}
								0x1A = 1*16<sup>1</sup> + 10*16<sup>0</sup> = 26
							</li>
						</ul>
					</Card>
				</AnimatedCard>
				<div>
					<AnimatedCard animationType="Expand_From_Right">
						<Card header="Applications of Hexadecimal">
							<p className="text-xl 2xl:text-2xl">
								Hex numbering has many applications, primarily
								in computer science due to its ability to
								efficiently represent binary data. It offers a
								sytem that is easier for computers to represent
								compared to base 10, but is easier for humans to
								understand than binary. These uses include:
							</p>
							<ul className="list-disc list-inside 2xl:text-2xl text-lg">
								<li>
									Colors using hex color codes (for example,
									black is #000000)
								</li>
								<li>
									Base16 string encoding to represent text as
									numbers
								</li>
								<li>Program error codes</li>
								<li>
									Memory addresses in low-level systems
									languages like Rust, C, and C++, or in
									assembly
								</li>
								<li>
									Representing the binary machine code that
									computers read in a more compact way
								</li>
							</ul>
						</Card>
					</AnimatedCard>
					<div className="tallAbsolute">
						<AnimatedCard animationType="Slide_From_Left">
							<AudioCard src="" label="Hexadecimal Numbering" />
						</AnimatedCard>
						<AnimatedCard animationType="Slide_From_Right">
							<AudioCard
								src=""
								label="Applications of Hexadecimal"
							/>
						</AnimatedCard>
					</div>
					<AnimatedCard animationType="Expand_From_Top">
						<div className="xl:w-full ">
							<ImageCard
								src="/hex.jpg"
								alt="hexadecimal numbering"
								xl_h="xl:h-[30vh]"
							/>
						</div>
					</AnimatedCard>
				</div>
			</TimelineCard>
			{/* Base 60 */}
			<TimelineCard>
				<div>
					<AnimatedCard animationType="Slide_From_Left">
						<Card header="Base 60 Numbering">
							<p className="text-xl 2xl:text-2xl">
								There is another numbering system that we use
								every day without realizing it: Base 60. It was
								developed by the Sumerians in the 3rd millenium
								BC, and was later used by the Babylonians,
								Egyptians, and Greeks.
							</p>
						</Card>
					</AnimatedCard>
					<AnimatedCard animationType="Slide_From_Right">
						<Card header="Applications of Base 60">
							<p className="text-xl 2xl:text-2xl">
								Although base 60 numeral systems are rare, there
								are still many situations today where base 60
								numbering is used, including:
							</p>
							<ul className=" list-disc list-inside text-xl">
								<li>
									Time (60 seconds in a minute, 60 minutes in
									an hour)
								</li>
								<li>Angles (360 degrees in a circle)</li>
								<li>
									Geographic coordinates (Latitude and
									Longitude)
								</li>
							</ul>
						</Card>
					</AnimatedCard>
				</div>
				<div className="tallAbsolute tallRight">
					<AnimatedCard animationType="Slide_From_Right">
						<AudioCard src="" label="Base 60 Numbering" />
					</AnimatedCard>
				</div>
				<div className="w-[90vw] xl:flex xl:flex-row">
					<div className="w-full mx-2">
						<AnimatedCard animationType="Expand_From_Left">
							<ImageCard
								src="/compass.jpg"
								alt="compass"
								fit="contain"
							/>
						</AnimatedCard>
					</div>
					<div className="w-full mx-2">
						<AnimatedCard animationType="Expand_From_Right">
							<ImageCard src="/clock.webp" alt="clock" />
						</AnimatedCard>
					</div>
				</div>
			</TimelineCard>
			{/* Calculator */}
			<TimelineCard reverse>
				<div>
					<AnimatedCard animationType="Expand_From_Left">
						<Card header="Setting your Nspire to Binary or Hexadecimal">
							<h2 className="text-lg 2xl:text-2xl">
								The Ti-Nspire can be set to use either
								hexadecimal or binary instead of base 10 to
								represent integers. To change your settings,
								follow these steps:
							</h2>
							<ol className=" list-decimal list-inside text-lg">
								<li>Open a document or scratchpad</li>
								<li>
									Press the <code>DOC</code> button
								</li>
								<li>
									Go to <code>7. Settings and Status</code>
								</li>
								<li>
									Go to <code>2. Document Settings...</code>
								</li>
								<li>
									Scroll down to <code>Base</code> and use the
									dropdown menu to select <code>Binary</code>{" "}
									or <code>Hexadecimal</code>
								</li>
							</ol>
						</Card>
					</AnimatedCard>
					<AnimatedCard animationType="Slide_From_Right">
						<Card header="Notes">
							<ul className="list-disc list-inside text-lg">
								<li>
									Only integers can be represented in binary
									or hexadecimal. Fractions and decimals will
									be represented in base 10
								</li>
								<li>
									To type in a hexadecimal number, you need to
									prefix it with <code>0h</code>, for example
									to type 47 in hexadecimal write{" "}
									<code>0h2F</code>
								</li>
								<li>
									To type binary numbers, prefix with{" "}
									<code>0b</code> for example to write 13 in
									binary type <span>0b1101</span>
								</li>
							</ul>
						</Card>
					</AnimatedCard>
				</div>
				<div className="w-full">
					<AnimatedCard animationType="Slide_From_Left">
						<ImageCard
							src="/DOC.png"
							alt="DOC button"
							fit="contain"
							h="h-[23vh]"
						/>
					</AnimatedCard>
					<AnimatedCard animationType="Slide_From_Left">
						<ImageCard
							src="/SETTINGS.png"
							alt="Doc settings"
							fit="contain"
							h="h-[23vh]"
						/>
					</AnimatedCard>
					<AnimatedCard animationType="Slide_From_Left">
						<ImageCard
							src="/BASE.png"
							alt="Doc settings"
							fit="contain"
							h="h-[23vh]"
						/>
					</AnimatedCard>
				</div>
			</TimelineCard>
			{/* Quiz Link */}
			<TimelineCard>
				<div className="w-full justify-center flex flex-row">
					<QuizLink variant="numbering" />
				</div>
			</TimelineCard>
		</TimelineContainer>
	);
}
