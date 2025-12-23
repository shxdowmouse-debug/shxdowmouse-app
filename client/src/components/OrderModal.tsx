import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import NotifyForm from "@/components/notifyform";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: { name: string };
}

export function OrderModal({ isOpen, onClose, product }: OrderModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
          max-w-lg
          mx-auto
          rounded-3xl
          p-8
          text-white
          bg-white/10
          backdrop-blur-2xl
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        "
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold tracking-tight">
            Get Notified
          </DialogTitle>

          <DialogDescription className="text-white/70 text-base">
            Enter your email and we’ll notify you when{" "}
            <span className="text-white font-semibold">{product.name}</span> launches.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <NotifyForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
