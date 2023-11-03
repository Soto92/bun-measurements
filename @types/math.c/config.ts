import { LoaderConfig, T } from "hyperimport";
export default {
	buildCommand: ["gcc", "-shared", "-fpic", "/mnt/c/Users/Mauricio/Git/pocs/bun-measurements/math.c", "-o", "build/math.c/libmath.so"],
	outDir: "build/math.c",
	symbols: {
		addC: {
			args: [T.int, T.int],
			returns: T.int
		},
		divC: {
			args: [T.int, T.int],
			returns: T.int
		},
		slowFibonacciC: {
			args: [T.int],
			returns: T.int
		},
	}
} satisfies LoaderConfig.Main;