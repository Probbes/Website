import { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./Lang.module.css";

function Lang() {
    const svgRef = useRef();
    const containerRef = useRef(); // Ref for the container div

    useEffect(() => {
        const container = containerRef.current;
        const svg = d3.select(svgRef.current);

        function updateMap() {
            const { width, height } = container.getBoundingClientRect(); // Get container size
            
            svg.attr("width", width).attr("height", height);

            // Increase base scale for better resolution
            const projection = d3.geoEqualEarth()
                .fitSize([width, height], { type: "Sphere" }) // Fit to container
                .scale(1000); // Increase scale for higher resolution

            const pathGenerator = d3.geoPath().projection(projection);

            svg.selectAll("*").remove(); // Clear previous map
            const g = svg.append("g"); // Group for transformations

            d3.json("/custom.geo.json").then((geojson) => {
                g.selectAll("path")
                    .data(geojson.features)
                    .enter().append("path")
                    .attr("d", pathGenerator)
                    .attr("fill", "orange")
                    .attr("stroke", "white")
                    .on("mouseover", function () { d3.select(this).attr("fill", "red"); })
                    .on("mouseout", function () { d3.select(this).attr("fill", "orange"); });
            });

            // Define panning bounds based on zoom level
            function zoomed(event) {
                const { transform } = event;
                const scale = transform.k;

                // Compute limits
                const xMin = Math.min(0, width - width * scale);
                const xMax = Math.max(0, width * scale - width);
                const yMin = Math.min(0, height - height * scale);
                const yMax = Math.max(0, height * scale - height);

                // Clamp translation to limits
                const tX = Math.min(xMax, Math.max(xMin, transform.x));
                const tY = Math.min(yMax, Math.max(yMin, transform.y));

                g.attr("transform", `translate(${tX}, ${tY}) scale(${scale})`);
            }

            const zoom = d3.zoom()
                .scaleExtent([1, 16]) // Increase max zoom to 16x for more detail
                .on("zoom", zoomed);

            svg.call(zoom);
        }

        updateMap();
        window.addEventListener("resize", updateMap); // Update on resize

        return () => window.removeEventListener("resize", updateMap);
    }, []);

    return (
        <>
            <div className={styles.grid}>
                <div ref={containerRef} className={styles.gridWorld}>
                    <svg ref={svgRef}></svg>
                </div>
                <div className={styles.gridText}>KIKOU</div>
            </div>
        </>
    );
}

export default Lang;
