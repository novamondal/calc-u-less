import AnimatedCard from "../AnimatedCard";
import AudioCard from "../Audio";
import TimelineContainer, { TimelineCard } from "../Container";
import QuizLink from "../QuizLink";
import TextCard, { BasicCard, ImageCard } from "../StaticCard";

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
					<AnimatedCard animationType="Slide_From_Left">
						<AudioCard
							src="/most_common_spongebob.wav"
							label="Most Common Numbering Systems"
						/>
					</AnimatedCard>
				</div>
				{/* </AnimatedCard> */}
				<AnimatedCard animationType="Slide_From_Right">
					{/* <AnimatedCard animationType="Fade"> */}
					<div className="w-[90vw] xl:w-[40vw]">
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
						<BasicCard header="Applications of Base 10">
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
						</BasicCard>
					</AnimatedCard>
				</div>
				<div className="tallAbsolute">
					<AnimatedCard animationType="Slide_From_Right">
						<AudioCard
							src="/base10_patrick.wav"
							label="Decimal Numbering"
						/>
						<AudioCard
							src="/rogan_applications_base10.mp3"
							label="Applications of Base 10"
						/>
					</AnimatedCard>
				</div>
				<AnimatedCard animationType="Slide_From_Left">
					<div className="xl:w-[45vw] w-[90vw]">
						<ImageCard
							src="/hand.jpg"
							alt="sticky hand"
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
						<BasicCard header="Binary (Base 2) Numbering">
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
						</BasicCard>
					</AnimatedCard>
					<AnimatedCard animationType="Expand_From_Right">
						<BasicCard header="Applications of Binary">
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
						</BasicCard>
					</AnimatedCard>
					<div className="tallAbsolute tallRight pt-4">
						<AnimatedCard animationType="Slide_From_Right">
							<AudioCard src="" label="Binary Numbering" />
							<AudioCard src="" label="Applications of Binary" />
							{/* TODO: Generate audio clip */}
						</AnimatedCard>
					</div>
				</div>
				<AnimatedCard animationType="Slide_From_Right">
					<div className="xl:w-[45vw] w-[90vw]">
						<ImageCard
							src="/binary.jpg"
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
					<BasicCard header="Converting to Binary">
						<ol className="list-inside list-decimal text-2xl font-bold">
							<li>
								Take number and divide by 2, write down
								remainder
								<p className="text-xl font-normal ml-8">
									<span className="font-semibold">
										Example:
									</span>{" "}
									start with 13, 13/2 = 6 remainder 1
								</p>
							</li>
							<li>
								Take the quotient from the previous step, divide
								by 2 again and record the remainder again
								<p className="text-xl font-normal ml-8">
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
								<p className="text-xl font-normal ml-8">
									<span className="font-semibold">
										Example:
									</span>{" "}
									3/2 = 1 remainder 1, remainders = [1,0,1]
								</p>
								<p className="text-xl font-normal ml-8">
									1/2 = 0 remainder 1, remainders = [1,0,1,1]
								</p>
							</li>
							<li>
								Reverse the list of remainders to get the number
								in Binary
								<p className="text-xl font-normal ml-8">
									<span className="font-semibold">
										Example:
									</span>{" "}
									[1,0,1,1] becomes 1101, so 13 in binary is
									0b1101
								</p>
							</li>
						</ol>
					</BasicCard>
				</AnimatedCard>
				<div>
					<AnimatedCard animationType="Slide_From_Right">
						<BasicCard header="Reading Binary">
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
						</BasicCard>
					</AnimatedCard>
					<AnimatedCard animationType="Expand_From_Top">
						<div className="xl:w-[50vw] 2xl:w-[60vw] transition-all ease-in-out">
							<BasicCard header="">
								<div className="h-[50vh]">
									TODO: Make a cool graphic and animate it
								</div>
							</BasicCard>
						</div>
					</AnimatedCard>
				</div>
				<div className="tallAbsolute tallRight">
					<AnimatedCard animationType="Slide_From_Right">
						<AudioCard src="" label="Converting to Binary" />
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
