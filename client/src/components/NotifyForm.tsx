import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import NotifyForm from "./NotifyForm";

export default function OrderModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
          backdrop-blur-2xl
          bg-white/10
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          rounded-3xl
          p-8
          max-w-md
          mx-auto
          text-white
        "
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold tracking-tight">
            Get Notified
          </DialogTitle>

          <DialogDescription className="text-white/70 text-base">
            Enter your email and we’ll let you know as soon as shxdowmouse releases.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <NotifyForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
