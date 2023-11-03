import { LoaderConfig, T } from "hyperimport";
export default {
	buildCommand: ["rustc", "--crate-type", "cdylib", "/mnt/c/Users/Mauricio/Git/pocs/bun-measurements/math.rs", "--out-dir", "build/math.rs"],
	outDir: "build/math.rs",
	symbols: {
		addRust: {
			args: [T.int, T.int],
			returns: T.int
		},
		divRust: {
			args: [T.int, T.int],
			returns: T.int
		},
		slowFibonacciRust: {
			args: [T.int],
			returns: T.int
		},
	}
} satisfies LoaderConfig.Main;