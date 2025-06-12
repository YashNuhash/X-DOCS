"use client";

import { LucideIcon, Undo2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolbarButtonProps {
    onClick?: () => void;
    icon: LucideIcon;
    isActive?: boolean;
};

export const ToolbarButton = ({ onClick, icon: Icon, isActive }: ToolbarButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-nutral-200/80",
                isActive && "bg-neutral-200/80"
            )}
        >
            <Icon className="size-4" />
        </button>
    );
};


export const Toolbar = () => {

    const section: {
        label: string;
        icon: LucideIcon;
        isActive?: boolean;
        onClick?: () => void;
    }[] [] = [
        [
            {
                label: "undo",
                icon: Undo2Icon,
                onClick: () => console.log("Undo clicked"),
            },
        ],
    ];

    return (

        <div className="bg-[#f5f5f5] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto shadow-sm border border-neutral-200">
            {
                section[0].map((item) => (
                    <ToolbarButton
                        key={item.label}
                        {...item}
                    />
                ))
            }
        </div>

    );
};