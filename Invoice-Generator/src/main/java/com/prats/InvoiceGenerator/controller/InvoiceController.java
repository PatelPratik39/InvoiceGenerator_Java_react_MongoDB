package com.prats.InvoiceGenerator.controller;

import com.prats.InvoiceGenerator.entity.Invoice;
import com.prats.InvoiceGenerator.repository.InvoiceRepository;
import com.prats.InvoiceGenerator.service.InvoiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/invoices")
@CrossOrigin("*")
public class InvoiceController {

    private final InvoiceService invoiceService;

    @PostMapping
    public ResponseEntity<Invoice> saveInvoice(@RequestBody Invoice invoice) {
            return ResponseEntity.ok(invoiceService.saveInvoice(invoice));
    }
}
