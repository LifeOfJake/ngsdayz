"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components 2/primitives/overlays/Dialog";

import { shiftBriefing } from "@/data/dashboard";

import { ActivityItem } from "./ActivityItem";

interface ShiftBriefingProps {
  open: boolean;
  onClose: () => void;
}

export function ShiftBriefing({
  open,
  onClose,
}: ShiftBriefingProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        <DialogHeader>
          <DialogTitle>
            Shift Briefing
          </DialogTitle>

          <p className="text-muted-foreground">
            Since your last login, here's what happened.
          </p>
        </DialogHeader>

        <DialogContent className="space-y-3">
          {shiftBriefing.map((item) => (
            <ActivityItem
              key={`${item.type}-${item.timestamp}`}
              {...item}
            />
          ))}
        </DialogContent>

        <DialogFooter>
          <DialogClose>
           Understood
         </DialogClose>
        </DialogFooter>
      </div>
    </Dialog>
  );
}