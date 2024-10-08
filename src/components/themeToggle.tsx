import { useEffect, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const localTheme = localStorage.getItem("theme") || "light";
		setTheme(localTheme);
		document.documentElement.classList.toggle("dark", localTheme === "dark");
	}, []);

	const handleThemeChange = (newTheme: any) => {
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun
						className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
							theme === "dark" ? "-rotate-90 scale-0" : ""
						}`}
					/>
					<Moon
						className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
							theme === "dark" ? "rotate-0 scale-100" : ""
						}`}
					/>
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => handleThemeChange("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleThemeChange("dark")}>
					Dark
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
