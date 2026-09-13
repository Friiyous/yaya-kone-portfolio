import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Line } from "@react-three/drei";
import * as THREE from "three";
import { hero } from "../data/portfolio";

// Positions des 4 étapes dans l'espace 3D
type Vec3 = [number, number, number];

const NOEUDS: { nom: string; pos: Vec3; couleur: string; taille: number }[] = [
    { nom: "Problème", pos: [-2.3, 0.7, 0], couleur: "#6366F1", taille: 0.36 },
    { nom: "Idée", pos: [-0.8, 1.3, 0.2], couleur: "#8B8CFA", taille: 0.29 },
    { nom: "Technologie", pos: [0.6, 0.75, 0.4], couleur: "#22D3EE", taille: 0.32 },
    { nom: "Solution", pos: [2.15, 0.05, 0.55], couleur: "#E8B84B", taille: 0.44 },
];

const chemin = NOEUDS.map((n) => new THREE.Vector3(n.pos[0], n.pos[1], n.pos[2]));

function Particules({ compte }: { compte: number }) {
    const positions = useMemo(() => {
        const pts: [number, number, number][] = [];
        for (let i = 0; i < compte; i++) {
            pts.push([
                (Math.random() - 0.5) * 9,
                Math.random() * 4 - 1.2,
                (Math.random() - 0.5) * 5,
            ]);
        }
        return pts;
    }, [compte]);
    return (
        <group>
            {positions.map((p, i) => (
                <mesh key={i} position={p}>
                    <sphereGeometry args={[0.018 + Math.random() * 0.02, 6, 6]} />
                    <meshStandardMaterial color={Math.random() > 0.5 ? "#6366F1" : "#22D3EE"} emissive={Math.random() > 0.5 ? "#6366F1" : "#22D3EE"} />
                </mesh>
            ))}
        </group>
    );
}

function MoteurTransformation() {
    const groupeRef = useRef<THREE.Group>(null);
    const pulsationRef = useRef<THREE.Mesh>(null);

    useFrame((state, dt) => {
        if (groupeRef.current) {
            groupeRef.current.rotation.y += dt * 0.45;
        }
        // Impulsion qui voyage le long du chemin
        if (pulsationRef.current) {
            const t = (state.clock.elapsedTime * 0.55) % 1;
            const indexFloride = t * (chemin.length - 1);
            const i0 = Math.min(Math.floor(indexFloride), chemin.length - 2);
            const frac = indexFloride - i0;
            const pos = chemin[i0].clone().lerp(chemin[i0 + 1], frac);
            pulsationRef.current.position.copy(pos);
            pulsationRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 6) * 0.25);
        }
    });

    return (
        <group ref={groupeRef}>
            {/* Chemins entre les nœuds */}
            {NOEUDS.slice(0, -1).map((n, i) => (
                <Line key={`ligne-${i}`} points={[n.pos, NOEUDS[i + 1].pos]} color="#4B52C7" opacity={0.7} lineWidth={0.045} />
            ))}

            {/* Nœuds */}
            {NOEUDS.map((n) => (
                <group key={n.nom} position={n.pos}>
                    <mesh>
                        <sphereGeometry args={[n.taille, 40, 40]} />
                        <meshStandardMaterial
                            color={n.couleur}
                            emissive={n.couleur}
                            emissiveIntensity={n.nom === "Solution" ? 1.6 : 0.75}
                            metalness={0.25}
                            roughness={0.35}
                        />
                    </mesh>
                    <mesh scale={[1.28, 1.28, 1.28]} position={[0, n.taille * 0.12, 0]}>
                        <sphereGeometry args={[n.taille, 40, 40]} />
                        <meshStandardMaterial color="#0A0F1C" metalness={0.5} roughness={0.2} opacity={0.25} transparent />
                    </mesh>
                </group>
            ))}

            {/* Impulsion lumineuse mobile */}
            <mesh ref={pulsationRef}>
                <sphereGeometry args={[0.11, 18, 18]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={2.2} />
            </mesh>

            <Particules compte={70} />
        </group>
    );
}

export default function Hero3D() {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7.4], fov: 40 }} style={{ width: "100%", height: "100%" }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.35} />
                <directionalLight position={[5, 8, 6]} intensity={1.6} color="#E8ECFF" />
                <pointLight position={[-5, 3, 4]} intensity={1.1} color={hero.flux[0].couleur} />
                <pointLight position={[5, -2, 5]} intensity={1.0} color={hero.flux[2].couleur} />

                <MoteurTransformation />

                <ContactShadows position={[0, -1.7, 0]} opacity={0.5} scale={9} blur={2.5} far={4} />
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    );
}