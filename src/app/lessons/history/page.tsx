import AnimatedCard from "../AnimatedCard";
import AudioCard from "../Audio";
import TimelineContainer, { TimelineCard } from "../Container";
import QuizLink from "../QuizLink";
import TextCard, { Card, ImageCard } from "../StaticCard";

export default function HistoryOfCalc() {
	return (
		<TimelineContainer title="The History of Calculus">
			{/* Eudoxus 400BC */}
			<TimelineCard>
				<AnimatedCard animationType="Expand_From_Left">
					<TextCard
						header="~400BCE: Eudoxus of Cnidus"
						body="Eudoxus of Cnidus, a greek mathematician, invented the technique of finding
							area by exhaustion. He would approximate the area of
							a shape by inscribing polygons in it and finding
							their areas. The approximation got better as he
							increased the number of sides. This was an early
							precursor to integration"
					/>
				</AnimatedCard>

				<div className="tallAbsolute">
					<AnimatedCard animationType="Slide_From_Right">
						<AudioCard
							src="/exodus_shapiro.mp3"
							label="Eudoxus and Area by Exhaustion"
							// TODO: update audio with proper name
						/>
					</AnimatedCard>
				</div>

				<AnimatedCard animationType="Expand_From_Top">
					<div className="xl:w-[40vw] w-[90vw]">
						<ImageCard
							src="/area-by-exhaustion.png"
							alt="Area by Exhaustion"
							fit="contain"
							h={"h-[40vh]"}
							xl_h={"xl:h-[60vh]"}
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>

			{/* René Descartes, 17th Century*/}
			<TimelineCard reverse>
				<div>
					<AnimatedCard animationType="Expand_From_Right">
						<Card header="17th Century: René Descartes">
							<p className="sm:text-lg xl:text-xl">
								René Descartes was a French mathematician as
								well as a scientist and philosopher born in
								1596. He had many contributions to mathematics
								and other fields, and much of his work was the
								basis of that of Leibniz and Newton later on.
							</p>
						</Card>
					</AnimatedCard>
					<AnimatedCard animationType="Expand_From_Left">
						<Card header="Contributions of Descartes">
							<ul className="sm:text-lg 2xl:text-xl">
								<li>
									Developed analytic geometry (using algebra
									to describe geometry)
								</li>
								<li>
									Developed modern notation like using x, y,
									and z as variables and a, b, and c as
									constants
								</li>
								<li>
									Pioneered idea of algebra being separate
									from geometry and representing abstract
									quantities
								</li>
							</ul>
						</Card>
					</AnimatedCard>
					<AnimatedCard animationType="Expand_From_Top">
						<Card header="Method of Normals">
							<p className="sm:text-lg xl:text-xl">
								One of Descartes' most import contributions to
								the devlopment of Calculus was his Method of
								Normals, which is a method of finding normal and
								tangent lines for curves geometrically. To find
								a tangent line for a curve at a given point:
							</p>
							<ol className="sm:text-lg xl:text-xl">
								<li>
									Draw a circle that fits your curve and
									intersects it at the point you want to find
									the tangent line
								</li>
								<li>
									Draw the radius from the center of the
									circle to this point. The radius of a circle
									is always normal to it's circumference, so
									the slope of this radius will also be the
									slope of the normal line
								</li>
								<li>
									Find the line perpendicular to this radius
									that intersects the curve at the same point
									to find the tangent line
								</li>
							</ol>
						</Card>
					</AnimatedCard>
				</div>
				<div className="tallAbsolute tallLeft">
					<AnimatedCard animationType="Slide_From_Right" delay={2}>
						<AudioCard src="" label="Descartes" />
					</AnimatedCard>
					<AnimatedCard animationType="Slide_From_Right" delay={3}>
						<AudioCard src="" label="Method of Normals" />
					</AnimatedCard>
				</div>
				<AnimatedCard animationType="Slide_From_Right" delay={1}>
					<div className="xl:w-[30vw] xl:h-[60vh]">
						<ImageCard
							src="/circle_tangent.gif"
							fit="contain"
							alt="Circle and Tangent Line"
							xl_h={"xl:h-[40vh]"}
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>

			{/* Cavalieri: mid 17th century*/}
			<TimelineCard>
				<AnimatedCard animationType="Expand_From_Left">
					<Card header="Mid 17th Century: Bonaventura Cavalieri">
						<h3 className="text-xl">
							Cavalieri was an Italian mathematician born in 1598
							who invented the method of indivisibles, an early
							form of calculus
						</h3>
						<ul className="lg:text-xl">
							<li>
								Came up with the method of indivisibles, an old
								version of calculus where all lines are made of
								an infinite amount of points, surfaces are an
								infinite amount of lines, and volumes are an
								infinite amount of surfaces
							</li>
							<li>
								Came up with Cavlieri's Principle, which states
								that if 2 volumes have the same height and the
								same cross sectional area at every given height,
								then they have the same volume
							</li>
							<li>
								His principle states that for a constant cross
								sectional area, V=bh, where b is the cross
								sectional area and h is the height
							</li>
							<li>
								This idea is important for finding volume by
								integrating cross sections
							</li>
						</ul>
					</Card>
				</AnimatedCard>
				<div className="tallAbsolute">
					<AnimatedCard animationType="Slide_From_Right" delay={2}>
						<AudioCard src="" label="Cavalieri" />
					</AnimatedCard>
				</div>
				<AnimatedCard animationType="Slide_From_Left">
					<div className="xl:w-[40vw]">
						<ImageCard
							src="/cavalieri.png"
							alt="Demonstration of Cavalieri's Principle"
							xl_h={"xl:h-[50vh]"}
							fit="contain"
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>

			{/* Fermat: mid 17th century */}
			<TimelineCard>
				<div>
					<div className="tallRow">
						<AnimatedCard animationType="Expand_From_Left">
							<Card header="Mid 17th Century: Pierre de Fermat">
								<h3 className="text-xl">
									French mathematician Pierre de Fermat, born
									in 1607, came up with the method of finding
									tangent lines that is closest to what most
									students learn today in the first days of
									their calculus class
								</h3>
							</Card>
						</AnimatedCard>
						<AnimatedCard animationType="Expand_From_Top">
							<Card header="Fermat's Method">
								<p className="text-xl">
									Fermat's method of finding a tangent line
									involved starting with a secant line, then
									moving the points closer together. The steps
									are:
								</p>
								<ol className="lg:text-xl">
									<li>
										Start with the curve and the point you
										want to find the tangent line of, and
										mark the point A
									</li>
									<li>
										Mark another point B some distance away
										on the curve
									</li>
									<li>
										Draw a secant line between the two
										points to approximate the tangent line
										at A
									</li>
									<li>
										Move point B closer to point A and draw
										a new secant line
									</li>
									<li>
										As B moves closer and closer to A, the
										slope of the secant line between them
										will give a better approximation of the
										true tangent line at A
									</li>
								</ol>
							</Card>
						</AnimatedCard>
					</div>
					<div className="tallAbsolute tallRight">
						<AnimatedCard
							animationType="Slide_From_Right"
							delay={1}
						>
							<AudioCard src="" label="Fermat's Method" />
						</AnimatedCard>
					</div>
					<AnimatedCard animationType="Slide_From_Left">
						<div className="xl:w-[50vw]">
							<ImageCard
								src="/fermat_tangent.png"
								alt="Fermat's Method"
								fit="contain"
								xl_h={"xl:h-[30vh]"}
							/>
						</div>
					</AnimatedCard>
				</div>
			</TimelineCard>

			{/* Mid 17th Century: Wallis */}
			<TimelineCard reverse>
				<AnimatedCard animationType="Expand_From_Top">
					<Card header="Mid 17th Century: John Wallis">
						<h3 className="text-xl">
							English mathematician John Wallis, born in 1616,
							made many important contributions to calculus and
							mathematics in general.
						</h3>
						<ul className="lg:text-xl">
							<li>
								Introduced notation of fractional exponents to
								represent roots as well as negative exponents to
								represent reciprocals
							</li>
							<li>
								Invented the modern notation for infinity, ∞
							</li>
							<li>
								Expanded on the work of Cavalieri and Descartes
							</li>
							<li>
								Found the area under many functions using
								integration
							</li>
							<li>
								Discovered an early version of the power rule
								for integrals of polynomials{" "}
							</li>
						</ul>
					</Card>
				</AnimatedCard>
				<div className="tallAbsolute tallRight">
					<AnimatedCard animationType="Slide_From_Right" delay={2}>
						<AudioCard src="" label="Wallis" />
					</AnimatedCard>
				</div>
				<AnimatedCard animationType="Slide_From_Right">
					<div className="xl:w-[40vw]">
						<ImageCard
							src="/wallis.jpg"
							alt="John  Wallis"
							xl_h={"xl:h-[60vh]"}
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>

			{/* Mid/Late 17th Century: Newton and Leibniz */}
			<TimelineCard>
				<AnimatedCard animationType="Expand_From_Right">
					<Card header="Mid/Late 17th Century: Newton and Leibniz">
						<h3 className="text-xl">
							Isaac Newton and Gottfried Leibniz, born in 1643 and
							1646 respectively, both independently invented the
							modern form of calculus that is practiced today.
						</h3>
						<ul className="lg:text-xl">
							<li>
								Newton is often credited for the discovery, but
								Leibniz's notation is the form commonly used
								today.
							</li>
							<li>
								Newton and Leibniz both developed the
								fundamental theorem of calculus, which states
								that integration and differentiation are inverse
								operations
							</li>
							<li>
								They developed rules for finding derivatives and
								integrals of many functions, as well as for
								composiing, multiplying, and dividing functions
							</li>
							<li>
								Newton developed calculus for his physics
								studies, so his discoveries primarly focused on
								applications in mechanics
							</li>
							<li>
								One of Newton's famous equations was a
								differential equation for modeling cooling,
								which is taught as an example of a separable
								differential equation in calculus classes today
							</li>
							<li>
								The formula for Newton's Law of Cooling is{" "}
								<code>y'=k(L-y)</code> and the solution is{" "}
								<code>
									y(t)=C·e<sup>-kt</sup>+L
								</code>
							</li>
						</ul>
					</Card>
				</AnimatedCard>
				<div className="tallAbsolute">
					<AnimatedCard animationType="Slide_From_Right" delay={2}>
						<AudioCard src="" label="Newton and Leibniz" />
					</AnimatedCard>
				</div>
				<AnimatedCard animationType="Slide_From_Left">
					<div className="xl:w-[40vw]">
						<ImageCard
							src="/newton.jpg"
							alt="Newton and Leibniz"
							xl_h={"xl:h-[70vh]"}
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>

			{/* Late 17th Century: Bernoulli and L'Hospital */}
			<TimelineCard>
				<div>
					<div className="tallRow">
						<AnimatedCard animationType="Expand_From_Left">
							<Card header="Late 17th Century: Bernoulli and L'Hospital">
								<h3 className="text-xl">
									Although the famous L'Hospital's rule, used
									for computing limits in indeterminate form,
									is named after Guillaume de L'Hospital, it
									was actually discovered by Johann Bernoulli.
									In addition to this, Bernoulli made many
									contributions to the fields of statistics
									and calculus.
								</h3>
							</Card>
						</AnimatedCard>
						<AnimatedCard animationType="Expand_From_Top">
							<Card header="L'Hospital's Rule">
								<p className="text-xl">
									L'Hospital's rule is used to find limits in
									indeterminate form (most commonly 0 divided
									by 0). When you have a limit of the quotient
									of 2 functions and it is in indeterminate
									form, you can take the derivative of the
									numerator and denominator and then take the
									limit of the new quotient. If the new limit
									is still in inderminate form, the process
									can be repeated until it is no longer in
									indeterminate form.
								</p>
							</Card>
						</AnimatedCard>
					</div>
					<div className="tallAbsolute z-10">
						<AnimatedCard
							animationType="Slide_From_Right"
							delay={1}
						>
							<AudioCard src="" label="L'Hospital's Rule" />
						</AnimatedCard>
					</div>
					<div className="tallRow">
						<AnimatedCard animationType="Slide_From_Left">
							<div className="xl:w-[35vw] xl:h-[50vh]">
								<ImageCard
									src="/bernoulli.jpg"
									alt="Bernoulli"
									fit="contain"
									xl_h={"xl:h-[35vh]"}
								/>
							</div>
						</AnimatedCard>
						<AnimatedCard animationType="Slide_From_Right">
							<div className="xl:w-[45vw] xl:h-[50vh]">
								<ImageCard
									src="/lhospital.jpeg"
									alt="L'Hospital"
									fit="contain"
									xl_h={"xl:h-[45vh]"}
								/>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</TimelineCard>

			{/* 18th Century: Taylor */}
			<TimelineCard reverse>
				<AnimatedCard animationType="Expand_From_Right">
					<Card header="18th Century: Brook Taylor">
						<h3 className="text-xl">
							English mathematician Brook Taylor, born in 1685,
							invented Taylor Series, which are used to
							approximate functions as series of polynomials. This
							comes from his theorem, Taylor's Theorem
						</h3>
						<ul className="lg:text-xl">
							<li>
								A function can be represented by an infinite
								series of polynomial terms
							</li>
							<li>
								The series is centered around a point, and
								beyond a certain distance from that point the
								series will not converge to the original
								function
							</li>
							<li>
								A selection of a few terms from this series is
								called a Taylor Polynomial and can be used to
								approximate the function, with more terms giving
								a better approximation
							</li>
						</ul>
					</Card>
				</AnimatedCard>
				<div className="tallAbsolute tallRight">
					<AnimatedCard animationType="Slide_From_Left" delay={2}>
						<AudioCard src="" label="Taylor" />
					</AnimatedCard>
				</div>
				<AnimatedCard animationType="Slide_From_Right">
					<div className="xl:w-[40vw]">
						<ImageCard
							src="/taylor.webp"
							alt="Taylor"
							xl_h={"xl:h-[65vh]"}
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>

			{/* 18th Century: Euler */}
			<TimelineCard>
				<AnimatedCard animationType="Expand_From_Left">
					<Card header="18th Century: Euler">
						<h3 className="text-xl">
							Swiss mathematician Leonhard Euler, born in 1707,
							was arguably one of the most influential
							mathematicians of all time. He made many
							contributions to calculus, but some of the most
							major were Euler's Method for solving differential
							equations, and Euler's Number <i>e</i>
						</h3>
					</Card>
				</AnimatedCard>
				<AnimatedCard animationType="Expand_From_Top">
					<Card header="Euler's Method">
						<p className="text-xl">
							Euler's Method is a method for approximating the
							solutions to differential equations, and is
							particularly useful for non-separable differential
							equations that are difficult to solve analytically.
							It is similar in concept to a tangent line
							approximation.
						</p>
						<ol className="lg:text-xl">
							<li>
								Start with a differential equation and an
								initial value. To approximate the value of the
								solution at a given point, determine a step size
								and number of steps to use. More steps will give
								a more accurate approximation.
							</li>
							<li>
								Starting at the initial value, use the
								differential equation to get the slope of the
								tangent line at that point, then multiply that
								slope by the step size to get the change in y
								value for that step. Add this Δy to the initial
								value to get the new y value.
							</li>
							<li>
								Repeat the previous step for the new y-value
								computed, and repeat until the desired point is
								reached
							</li>
						</ol>
					</Card>
				</AnimatedCard>
				<div className="tallAbsolute">
					<AnimatedCard animationType="Slide_From_Right" delay={2}>
						<AudioCard src="" label="Euler's Method" />
					</AnimatedCard>
				</div>
				<AnimatedCard animationType="Slide_From_Left">
					<div className="xl:w-[20vw]">
						<ImageCard
							src="/euler.jpg"
							alt="Euler"
							xl_h={"xl:h-[60vh]"}
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>

			{/* 18th Century: Lagrange */}
			<TimelineCard reverse>
				<AnimatedCard animationType="Expand_From_Top">
					<Card header="18th Century: Lagrange">
						<h3 className="text-xl">
							Italian mathematician Joseph-Louis Lagrange, born in
							1736, made many contributions to mathematics,
							including Lagrange Multipliers, which are used to
							optimize functions. He also developed Lagrange Error
							Bound, which is used to find the maximum error of a
							Taylor Polynomial
						</h3>
					</Card>
				</AnimatedCard>
				<div className="tallAbsolute tallRight">
					<AnimatedCard animationType="Slide_From_Left" delay={2}>
						<AudioCard src="" label="Lagrange" />
					</AnimatedCard>
				</div>
				<AnimatedCard animationType="Slide_From_Right">
					<div className="xl:w-[40vw]">
						<ImageCard
							src="/lagrange.jpg"
							alt="Lagrange"
							xl_h={"xl:h-[60vh]"}
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>

			{/* 19th Century: Riemann */}
			<TimelineCard>
				<AnimatedCard animationType="Expand_From_Left">
					<Card header="19th Century: Riemann">
						<h3 className="text-xl">
							German mathematician Bernhard Riemann, born in 1826,
							contributed many important ideas to the field of
							calculus. The most famous of these is the Riemann
							Sum, which is used to approximate the area under a
							curve. He also created the modern definition of the
							definite integral as the limit of a Riemann Sum as{" "}
							<i>n</i> approaches infinity.
						</h3>
					</Card>
				</AnimatedCard>
				<AnimatedCard animationType="Expand_From_Left">
					<Card header="Riemann Sums">
						<p className="text-xl">
							A Riemann Sum is a method of approximating the area
							under a curve by splitting it into a number of
							rectangles or trapezoids and adding up their areas.
							To compute a Riemann Sum:
						</p>
						<ol className="lg:text-xl">
							<li>
								Mark the endpoitns of the interval of your
								function as <i>a</i> and <i>b</i>
							</li>
							<li>
								Divide the interval into <i>n</i> slices of
								equal size, where <i>n</i> is the number of
								rectangles or trapezoids used.
							</li>
							<li>
								Use these sub-intervals to approximate the area
								under the curve by drawing a rectangle or
								trapezoid for each sub-interval. For a
								trapezoid, use both the left and right endpoints
								of the sub-interval to determine the bases of
								the trapezoid. With rectangles, either
								left-endpoints, right-endpoints, or midpoints
								can be used
							</li>
							<li>
								Compute the area of each rectangle or trapezoid
								using geometry formulas, then add them all
								together to get the Riemann Sum
							</li>
						</ol>
					</Card>
				</AnimatedCard>
				<div className="tallAbsolute">
					<AnimatedCard animationType="Slide_From_Right" delay={2}>
						<AudioCard src="" label="Riemann" />
					</AnimatedCard>
				</div>
				<AnimatedCard animationType="Slide_From_Left">
					<div className="xl:w-[30vw]">
						<ImageCard
							src="/riemann.jpeg"
							alt="Riemann"
							xl_h={"xl:h-[60vh]"}
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>

			{/* Quiz Link */}
			<TimelineCard>
				<div className="w-full flex flex-row justify-center">
					<QuizLink variant="history" />
				</div>
			</TimelineCard>
		</TimelineContainer>
	);
}
